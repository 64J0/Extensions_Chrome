'use strict';

import {createNewLi} from './scripts/handlePopulateLi.js';
import {handleBtnAddClick} from './scripts/handleBtnAdd.js';
import {getDecodedIndexArray} from './scripts/getDecodedIndexArray.js';
import {handleBadgeUpdate} from './scripts/handleBadgeUpdate.js';

window.onload = () => {
  const indexArray = getDecodedIndexArray();
  if (!indexArray) return null;

  // populate based on local storage data
  indexArray.forEach((indexItem) => {
    const value = localStorage.getItem(indexItem);
    createNewLi(indexItem, value);
  });
};

const btnAdd = document.getElementById('btn-add');
btnAdd.addEventListener('click', handleBtnAddClick);
btnAdd.addEventListener('click', handleBadgeUpdate);
