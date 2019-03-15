// Returns a function that logs to a DOM element.
const getLogger = (id) => {
  return (result) => {
    let target = document.querySelector(`#${id}-results`);
    target.textContent = result instanceof Error ? result.toString() : JSON.stringify(result);
  };
};

document.querySelector("#get-profile-info").addEventListener("click", () => {
  const log = getLogger("get-profile-info");
  browser.experiments.sync.getUserProfileInfo().
    then(log, log);
});

document.querySelector("#check-passwords-pref").addEventListener("click", () => {
  const log = getLogger("check-passwords-pref");
  browser.experiments.sync.getCurrentState("passwords").
    then(log, log);
});

document.querySelector("#open-sync-prefs").addEventListener("click", () => {
  const log = getLogger("open-sync-prefs");
  browser.experiments.sync.openPreferences("lockbox-addon-tests").
    then(log, log);
});

document.querySelector("#register-listener").addEventListener("click", () => {
  const events = [];
  const log = getLogger("register-listener");
  browser.experiments.sync.onUserProfileChanged.addListener(update => {
    events.push(update);
    log(events);
  });
});
