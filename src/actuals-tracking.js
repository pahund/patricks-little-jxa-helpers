/**
 * actuals-tracking.js
 *
 * Starts, activates, minimizes MS Excel with spreadsheet
 * "Actuals Tracking.xlsx".
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 26 Nov 2015
 */
import win from "./lib/win";
import app from "./lib/app";

window.main = () => {
    const filePath = "/Users/pahund/Box Sync/Actuals Tracking.xlsx",
        excel = app.get("com.microsoft.Excel"),
        actualsTracking = win.get(excel, "Actuals Tracking");

    if (!actualsTracking) {
        excel.openWorkbook({
            workbookFileName: filePath
        });
        excel.activate();
        return;
    }

    if (win.isMinimized(actualsTracking)) {
        win.show(excel, actualsTracking);
        return;
    }

    win.hide(actualsTracking);
};

