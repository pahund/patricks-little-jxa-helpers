import win from "./lib/win";

const filePath = "/Users/pahund/Box Sync/Actuals Tracking.xlsx",
    windowName = "Actuals Tracking";

if (!isExcelRunning()) {
    startExcel();
}

const excel = Application("Microsoft Excel");
excel.includeStandardAdditions = true;

const actualsTracking = win.getWindow(excel, windowName);

if (!actualsTracking) {
    excel.openWorkbook({
        workbookFileName: filePath
    });
    excel.activate();
    $.exit(0);
}

if (win.isMinimized(actualsTracking)) {
    win.show(excel, actualsTracking);
    $.exit(0);
}

win.hide(actualsTracking);
$.exit(0);

function isExcelRunning() {
    const apps = ObjC.unwrap($.NSWorkspace.sharedWorkspace.runningApplications);
    for (let i = 0; i < apps.length; i++) {
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

