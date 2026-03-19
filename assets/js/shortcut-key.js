// Check if the user is on a Mac and update the shortcut key for search accordingly.
const updateSearchShortcutKey = () => {
  const isMac = navigator.platform.toUpperCase().includes("MAC");
  const shortcutKeyElement = document.querySelector("#search-toggle .nav-link");

  if (shortcutKeyElement && isMac) {
    // use the unicode for command key
    shortcutKeyElement.innerHTML = '&#x2318; k <i class="ti ti-search"></i>';
  }
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", updateSearchShortcutKey);
} else {
  updateSearchShortcutKey();
}
