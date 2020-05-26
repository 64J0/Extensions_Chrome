"use strict";

// Mostrar os valores: chrome.storage.sync.get(null, function(items) {console.log(items)})
// Deletar os valores: chrome.storage.sync.clear()

import { returnIndexDataArray } from "./returnIndexDataArray.js";

/**
 * Essa função é usada para criar uma nova <li> no arquivo popup.html.
 * @param {number} id
 * @param {string} value
 */

export async function createNewLi(id, value) {
  let ul = document.querySelector("ul");
  let newLi = document.createElement("li");
  newLi.id = id;

  let inputText = document.createElement("input");
  inputText.type = "text";
  inputText.className = id;
  inputText.value = value;
  inputText.addEventListener("change", (event) => {
    localStorage.setItem(
      String(inputText.className),
      String(event.target.value)
    );
  });

  let inputCheckbox = document.createElement("input");
  inputCheckbox.type = "checkbox";
  inputCheckbox.className = id;
  inputCheckbox.addEventListener("change", () => {
    // Deletes the item from localStorage
    localStorage.removeItem(String(inputCheckbox.className));
    let indexArray = returnIndexDataArray();
    let newIndexArray = indexArray.filter((index) => {
      return String(index) !== String(inputCheckbox.className);
    });
    newIndexArray.join(", ");
    console.log("newIndexArray", newIndexArray);
    localStorage.setItem("index", newIndexArray);

    // Deletes the item from ul
    let liExcluded = document.getElementById(String(inputCheckbox.className));
    liExcluded.parentNode.removeChild(liExcluded);
  });

  newLi.appendChild(inputText);
  newLi.appendChild(inputCheckbox);
  ul.appendChild(newLi);
}

/*
// Future implementations: using the storage API

let newKeysArray = [],
newValuesArray = [];

chrome.storage.sync.get(["keys"], function (keysArray) {
  console.log(1);
  if (keysArray.keys) {
    newKeysArray = [...keysArray.keys, String(inputText.className)];
  } else {
    newKeysArray = [String(inputText.className)];
  }

  return chrome.storage.sync.get(["values"], function (valuesArray) {
    console.log(2);
    if (valuesArray.values) {
      newValuesArray = [...valuesArray.values, String(event.target.value)];
    } else {
      newValuesArray = [String(event.target.value)];
    }

    console.log(3);
    console.log(newKeysArray);
    console.log(newValuesArray);
    return chrome.storage.sync.set(
      {
        keys: newKeysArray,
        values: newValuesArray,
      },
      function () {
        console.log("Task saved");
      }
    );
  });
});
*/
