"use strict";

import { createNewLi } from "./scripts/addNewLi.js";
import { returnIndexDataArray } from "./scripts/returnIndexDataArray.js";

window.onload = () => {
  let indexArray = returnIndexDataArray();
  if (!indexArray) return null;
  indexArray.map((indexItem) => {
    let id = String(indexItem);
    let value = localStorage.getItem(id);
    return createNewLi(id, value);
  });
};

let btnAdd = document.getElementById("btn-add");

btnAdd.addEventListener("click", () => {
  let randomNumberToString = (Math.random() * 1e7).toFixed(0);
  let ul = document.querySelector("ul");
  let newLi = document.createElement("li");
  newLi.id = randomNumberToString;

  let inputText = document.createElement("input");
  inputText.type = "text";
  inputText.className = randomNumberToString;
  inputText.addEventListener("change", (event) => {
    localStorage.setItem(
      String(inputText.className),
      String(event.target.value)
    );
  });

  let inputCheckbox = document.createElement("input");
  inputCheckbox.type = "checkbox";
  inputCheckbox.className = randomNumberToString;
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

  let indexItem = localStorage.getItem("index");
  let newIndex;
  if (indexItem) {
    newIndex = indexItem + ", " + randomNumberToString;
  } else {
    newIndex = randomNumberToString;
  }

  localStorage.setItem("index", newIndex);
  localStorage.setItem(randomNumberToString, "");
});
