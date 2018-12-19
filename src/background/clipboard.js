const CLIPBOARD_CLEAR_DELAY = 1 * 60 * 1000; // 1 minute

let clearClipboardTimer = null;

export async function copyToClipboard(field, toCopy, navigatorClipboard = navigator.clipboard) {
  if (clearClipboardTimer) {
    // Clear any existing timer before scheduling a new one.
    window.clearTimeout(clearClipboardTimer);
  }
  await navigatorClipboard.writeText(toCopy);
  clearClipboardTimer = window.setTimeout(
    async () => {
      clearClipboardTimer = null;
      // Only clear the clipboard if it still holds the value set earlier.
      const inClipboard = await navigatorClipboard.readText();
      if (inClipboard === toCopy) {
        navigatorClipboard.writeText("");
      }
    },
    CLIPBOARD_CLEAR_DELAY
  );
}

export default { copyToClipboard };
