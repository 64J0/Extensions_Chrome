'use strict';

import {getDecodedIndexArray} from './getDecodedIndexArray.js';
import {handleBadgeUpdate} from './handleBadgeUpdate.js';

const ul = document.querySelector('ul');

export const handleInputChange = (event, randomStrNum) => {
  localStorage.setItem(
      String(randomStrNum),
      String(event.target.value),
  );
};

export const handleCheckbox = (taskIndex) => {
  localStorage.removeItem(taskIndex);

  const indexArray = getDecodedIndexArray();
  const newIndexArray = indexArray.filter((idx) => {
    return idx !== taskIndex;
  });
  newIndexArray.join(', ');
  localStorage.setItem('index', newIndexArray);

  // Deletes the item from ul
  const liExcluded = document.getElementById(taskIndex);
  liExcluded.parentNode.removeChild(liExcluded);
};

export function handleBtnAddClick() {
  const randomStrNum = (Math.random() * 1e7).toFixed(0);

  const inputText = document.createElement('input');
  inputText.type = 'text';
  inputText.className = randomStrNum;
  inputText.addEventListener('change',
      (event) => handleInputChange(event, randomStrNum),
  );

  const inputCheckbox = document.createElement('input');
  inputCheckbox.type = 'checkbox';
  inputCheckbox.className = randomStrNum;
  inputCheckbox.addEventListener('change', () => handleCheckbox(randomStrNum));
  inputCheckbox.addEventListener('change', handleBadgeUpdate);

  const newLi = document.createElement('li');
  newLi.id = randomStrNum;
  newLi.appendChild(inputText);
  newLi.appendChild(inputCheckbox);
  ul.appendChild(newLi);

  const indexItem = localStorage.getItem('index');
  const newIndex = indexItem ? indexItem + ', ' + randomStrNum : randomStrNum;

  window.localStorage.setItem('index', newIndex);
  window.localStorage.setItem(randomStrNum, '');
}
