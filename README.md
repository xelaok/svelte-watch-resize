## svelte-mobx ([npm](https://www.npmjs.com/package/svelte-watch-resize), [demo](https://svelte.dev/repl/76389084c0e241e8b1e5bd910897c468))
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

<style>
    .root {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;

        display: flex;
        flex-flow: row nowrap;
    }

    .content {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2em;
    }

    .leftContent {
        flex: 2;
        background-color: hsl(0, 0%, 97%);
    }

    .mainContent {
        flex: 4;
    }
</style>
```
