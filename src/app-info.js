/**
 * app-info.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 29 Nov 2015
 */
import app from "./lib/app";

window.main = ([ bundleId ]) => {
    if (!bundleId) {
        console.log("Usage: app-info bundleId");
        console.log("Example: app-info com.microsoft.Excel");
        return;
    }
    const a = app.get(bundleId);
    console.log("Application(\"" + bundleId + "\").windows.length: ", a.windows.length);
    for (let wi = 0; wi < a.windows.length; wi++) {
        console.log("Application(\"" + bundleId + "\").windows[" + wi + "].name(): ", a.windows[wi].name());
        console.log("Application(\"" + bundleId + "\").windows[" + wi + "].id(): ", a.windows[wi].id());
        console.log("Application(\"" + bundleId + "\").windows[" + wi + "].index(): ", a.windows[wi].index());
        console.log("Application(\"" + bundleId + "\").windows[" + wi + "].bounds(): ", JSON.stringify(a.windows[wi].bounds()));
        console.log("Application(\"" + bundleId + "\").windows[" + wi + "].closeable(): ", a.windows[wi].closeable());
        console.log("Application(\"" + bundleId + "\").windows[" + wi + "].miniaturizable(): ", a.windows[wi].miniaturizable());
        console.log("Application(\"" + bundleId + "\").windows[" + wi + "].miniaturized(): ", a.windows[wi].miniaturized());
        console.log("Application(\"" + bundleId + "\").windows[" + wi + "].resizable(): ", a.windows[wi].resizable());
        console.log("Application(\"" + bundleId + "\").windows[" + wi + "].visible(): ", a.windows[wi].visible());
        console.log("Application(\"" + bundleId + "\").windows[" + wi + "].zoomable(): ", a.windows[wi].zoomable());
        console.log("Application(\"" + bundleId + "\").windows[" + wi + "].zoomed(): ", a.windows[wi].zoomed());
        //console.log("Application(\"" + bundleId + "\").windows[" + wi + "].entryIndex(): ", JSON.stringify(a.windows[wi].entryIndex()));
        //console.log("Application(\"" + bundleId + "\").windows[" + wi + "].position(): ", JSON.stringify(a.windows[wi].position()));
        //console.log("Application(\"" + bundleId + "\").windows[" + wi + "].titled(): ", a.windows[wi].titled());
        //console.log("Application(\"" + bundleId + "\").windows[" + wi + "].floating(): ", a.windows[wi].floating());
        //console.log("Application(\"" + bundleId + "\").windows[" + wi + "].modal(): ", a.windows[wi].modal());
        //console.log("Application(\"" + bundleId + "\").windows[" + wi + "].collapsable(): ", a.windows[wi].collapsable());
        //console.log("Application(\"" + bundleId + "\").windows[" + wi + "].collapsed(): ", a.windows[wi].collapsed());
        //console.log("Application(\"" + bundleId + "\").windows[" + wi + "].sheet(): ", a.windows[wi].sheet());
    }

};
