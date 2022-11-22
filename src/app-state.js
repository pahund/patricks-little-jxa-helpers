// noinspection JSUnresolvedFunction,JSUnresolvedVariable

function getKmVariable(k) {
  const kme = Application("Keyboard Maestro Engine");
  return kme.getvariable(k);
}

window.main = ([ appName ]) => {
  console.log("app name:", getKmVariable("appName"))
  if (!appName) {
    console.log("Usage: app-state appName");
    console.log("Example: app-state Safari");
    return;
  }

  if (!Application(appName).running()) {
    console.log("APP_NOT_RUNNING");
    return;
  }

  const proc = Application("System Events").processes.byName(appName);

  if (proc.windows.length === 0) {
    console.log( "APP_RUNNING_NO_WINDOWS");
    return;
  }

  if (proc.frontmost()) {
    console.log( "APP_RUNNING_FRONTMOST");
    return;
  }

  // with Ventura stage manager, it seems this is all we can find out;
  // proc.miniaturized/visible/zoomed won't tell us if the app has an open window on the
  // screen or not
  console.log("APP_RUNNING");
}
