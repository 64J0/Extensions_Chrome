'use strict';

export function handleBadgeUpdate() {
  chrome.action.setBadgeText({
    text: window.localStorage.length > 0 ?
      String(window.localStorage.length - 1) : // due to the index key
      '0',
  });
}
