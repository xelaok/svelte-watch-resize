## svelte-watch-resize ([npm](https://www.npmjs.com/package/svelte-watch-resize), [demo](https://svelte.dev/repl/76389084c0e241e8b1e5bd910897c468))
Watch element resize in Svelte

## Installation

```bash
npm i -S svelte-watch-resize
```

## Usage

```html
<script>
    import { watchResize } from "svelte-watch-resize";

    let leftWidth;
    let mainWidth;

    function handleLeftResize(node) {
        leftWidth = node.clientWidth;
    }

    function handleMainResize(node) {
        mainWidth = node.clientWidth;
    }
</script>

<div class="root">
    <div class="content leftContent" use:watchResize={handleLeftResize}>
        {leftWidth}
    </div>
    <div class="content mainContent" use:watchResize={handleMainResize}>
        {mainWidth}
    </div>
</div>
```
