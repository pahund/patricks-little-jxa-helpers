/**
 * toggle-app-window.js
 *
 * Starts, activates, minimizes an application with a specific file opened.
 *
 * @param filePath The absolute path to the file to open, e.g. /Users/jdoe/timesheet.xlsx
 * @param bundleId The bundle ID of the application to toggle, e.g. com.microsoft.Excel
 * @param windowName The name of the application window after the file has been loaded, e.g. Timesheet
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 26 Nov 2015
 */
import win from "./lib/win";
import app from "./lib/app";

window.main = ([ filePath, bundleId, windowName ]) => {
    if (!filePath || !bundleId || !windowName) {
        console.log("Usage: toggle-app-window filePath bundleId windowName");
        console.log("Example: toggle-app-window /Users/jdoe/timesheet.xlsx com.microsoft.Excel Timesheet");
        return;
    }
    const a = app.get(bundleId),
        w = win.get(a, windowName);

    if (!w) {
        a.open(Path(filePath));
        a.activate();
        return;
    }

    if (win.isMinimized(w)) {
        win.show(a, w);
        return;
    }

    if (a.frontmost()) {
        win.hide(w);
        return;
    }

    a.activate();
};

