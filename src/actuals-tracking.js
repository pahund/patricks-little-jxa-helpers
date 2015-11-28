import win from "./lib/win";
import app from "./lib/app";
import proc from "./lib/proc";

const filePath = "/Users/pahund/Box Sync/Actuals Tracking.xlsx",
    excel = app.get("com.microsoft.Excel"),
    actualsTracking = win.getWindow(excel, "Actuals Tracking");

if (!actualsTracking) {
    excel.openWorkbook({
        workbookFileName: filePath
    });
    excel.activate();
    proc.end();
}

if (win.isMinimized(actualsTracking)) {
    win.show(excel, actualsTracking);
    proc.end();
}

win.hide(actualsTracking);
proc.end();

