const filePath = "/Users/pahund/Box Sync/Actuals Tracking.xlsx",
    windowName = "Actuals Tracking";

if (!isExcelRunning()) {
    startExcel();
}

const excel = Application("Microsoft Excel");
excel.includeStandardAdditions = true;

var actualsTracking = getWindow(windowName);

if (!actualsTracking) {
    excel.openWorkbook({
        workbookFileName: filePath
    });
    excel.activate();
    $.exit(0);
}

if (isMinimized(actualsTracking)) {
    show(actualsTracking);
    $.exit(0);
}
hide(actualsTracking);
$.exit(0);

function getWindow(name) {
    for (var i = 0; i < excel.windows.length; i++) {
        const currentWindow = excel.windows[i],
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

function show(window) {
    window.windowState = "window state normal";
    excel.activate();
}

function hide(window) {
    window.windowState = "window state minimized";
}

function isExcelRunning() {
    var apps = ObjC.unwrap($.NSWorkspace.sharedWorkspace.runningApplications);
    for (var i = 0; i < apps.length; i++) {
        if (typeof apps[i].bundleIdentifier.isEqualToString === "undefined") {
            continue;
        }
        if (apps[i].bundleIdentifier.isEqualToString("com.microsoft.Excel")) {
            return true;
        }
    }
    return false;
}

function startExcel() {
    $.NSWorkspace.sharedWorkspace.launchApplication("com.microsoft.Excel");
}

