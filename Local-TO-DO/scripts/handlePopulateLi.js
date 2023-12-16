'use strict';

import {handleInputChange, handleCheckbox} from './handleBtnAdd.js';
import {handleBadgeUpdate} from './handleBadgeUpdate.js';

const ul = document.querySelector('ul');

export function createNewLi(id, value) {
  const inputText = document.createElement('input');
  inputText.type = 'text';
  inputText.className = id;
  inputText.value = value;
  inputText.addEventListener('change', (event) => handleInputChange(event, id));

  const inputCheckbox = document.createElement('input');
  inputCheckbox.type = 'checkbox';
  inputCheckbox.className = id;
  inputCheckbox.addEventListener('change', () => handleCheckbox(id));
  inputCheckbox.addEventListener('change', handleBadgeUpdate);

  const newLi = document.createElement('li');
  newLi.id = id;
  newLi.appendChild(inputText);
  newLi.appendChild(inputCheckbox);
  ul.appendChild(newLi);
}
