// noinspection JSUnresolvedFunction,JSUnresolvedVariable

function getProcess(appName) {
  const sysEv = Application("System Events");
  for (let i = 0; i < sysEv.processes.length; i++){
    const process = sysEv.processes[i];
    if (process.title() === appName) {
      return process;
    }
  }
  return null;
}

window.main = ([ appName ]) => {
  if (!appName) {
    console.log("Usage: app-state appName");
    console.log("Example: app-state Safari");
    return;
  }

  const proc = getProcess(appName);

  if (!proc) {
    console.log("APP_NOT_RUNNING");
    return;
  }

  if (proc.frontmost()) {
    console.log( "APP_RUNNING_FRONTMOST");
    return;
  }

  if (proc.windows.length === 0) {
    console.log( "APP_RUNNING_NO_WINDOWS");
    return;
  }

  // with Ventura stage manager, it seems this is all we can find out;
  // proc.miniaturized/visible/zoomed won't tell us if the app has an open window on the
  // screen or not
  console.log("APP_RUNNING");
}
