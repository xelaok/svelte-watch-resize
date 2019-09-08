import elementResizeDetectorMaker from "element-resize-detector";

let erd = elementResizeDetectorMaker({ strategy: "scroll" });

function watchResize(element: HTMLElement, handler: (element: HTMLElement) => void) {
    erd.listenTo(element, handler);
    let currentHandler = handler;

    return {
        update(newHandler: (element: HTMLElement) => void) {
            erd.removeListener(element, currentHandler);
            erd.listenTo(element, newHandler);
            currentHandler = newHandler;
        },
        destroy() {
            erd.removeListener(element, currentHandler);
        },
    };
}

export { watchResize };
