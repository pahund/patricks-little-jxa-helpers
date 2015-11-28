/**
 * win.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 28 Nov 2015
 */
function getWindow(app, name) {
    for (let i = 0; i < app.windows.length; i++) {
        const currentWindow = app.windows[i],
            currentName = currentWindow.name();
        if (currentName === name) {
            return currentWindow;
        }
    }
    return null;
}

function isAtFront(window) {

}

function isMinimized(window) {
    return window.windowState() === "window state minimized";
}

function show(app, window) {
    window.windowState = "window state normal";
    app.activate();
}

function hide(window) {
    window.windowState = "window state minimized";
}

export default {
    getWindow,
    isAtFront,
    isMinimized,
    show,
    hide
}
