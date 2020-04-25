"use strict";

window.onload = () => {
  let indexArray = returnIndexArray();
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
  onChangeSetItemLocalStorage(inputText);

  let inputCheckbox = document.createElement("input");
  inputCheckbox.type = "checkbox";
  inputCheckbox.className = randomNumberToString;
  onChangeDeleteItem(inputCheckbox);

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

function onChangeSetItemLocalStorage(inputText) {
  inputText.addEventListener("change", (event) => {
    localStorage.setItem(
      String(inputText.className),
      String(event.target.value)
    );
  });
}

function onChangeDeleteItem(inputCheckbox) {
  inputCheckbox.addEventListener("change", () => {
    // Deletes the item from localStorage
    localStorage.removeItem(String(inputCheckbox.className));
    let indexArray = returnIndexArray();
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
}

function createNewLi(id, value) {
  let ul = document.querySelector("ul");
  let newLi = document.createElement("li");
  newLi.id = id;

  let inputText = document.createElement("input");
  inputText.type = "text";
  inputText.className = id;
  inputText.value = value;
  onChangeSetItemLocalStorage(inputText);

  let inputCheckbox = document.createElement("input");
  inputCheckbox.type = "checkbox";
  inputCheckbox.className = id;
  onChangeDeleteItem(inputCheckbox);

  newLi.appendChild(inputText);
  newLi.appendChild(inputCheckbox);
  ul.appendChild(newLi);
}

function returnIndexArray() {
  let indexString = localStorage.getItem("index");
  if (!indexString) return null;
  let indexArray = indexString.split(",").map((item) => {
    return item.trim();
  });
  return indexArray;
}
