"use strict";

/**
 * Função que faz o parse do formato de string salvada no localStorage
 * mais especificamente na chave index, que salva os id's dos dados
 * e retorna um array de id's.
 */

export function returnIndexDataArray() {
  let indexString = localStorage.getItem("index");
  if (!indexString) return null;
  let indexDataArray = indexString.split(",").map((item) => {
    return item.trim();
  });
  return indexDataArray;
}
