'use strict';

export function handleBadgeUpdate() {
  chrome.action.setBadgeText({
    text: String(window.localStorage.length - 1),
  });
}
