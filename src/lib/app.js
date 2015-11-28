/**
 * app.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 28 Nov 2015
 */
function get(bundleIdentifier) {
    if (!isRunning(bundleIdentifier)) {
        start(bundleIdentifier);
    }
    const app = Application(bundleIdentifier);
    app.includeStandardAdditions = true;
    return app;
}

function isRunning(bundleIdentifier) {
    const apps = ObjC.unwrap($.NSWorkspace.sharedWorkspace.runningApplications);
    for (let i = 0; i < apps.length; i++) {
        if (typeof apps[i].bundleIdentifier.isEqualToString === "undefined") {
            continue;
        }
        if (apps[i].bundleIdentifier.isEqualToString(bundleIdentifier)) {
            return true;
        }
    }
    return false;
}

function start(bundleIdentifier) {
    $.NSWorkspace.sharedWorkspace.launchApplication(bundleIdentifier);
}

export default {
    get,
    isRunning,
    start
};
