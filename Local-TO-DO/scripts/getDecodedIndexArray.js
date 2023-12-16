'use strict';

export function getDecodedIndexArray() {
  const indexString = localStorage.getItem('index');
  if (!indexString) return null;

  return indexString.split(',').map((item) => item.trim());
}
