"use strict";

// Adiciona uma badge embaixo do ícone da extensão para
// mostrar quantas tasks estão cadastradas no momento.

chrome.browserAction.setBadgeText({
  text: String(localStorage.length - 1),
});

// window.onstorage é um evento que é acionado quando algum
// dado do localStorage é alterado.

window.onload = () => {
  window.onstorage = () => {
    chrome.browserAction.setBadgeText({
      text: String(localStorage.length - 1),
    });
  };
};
