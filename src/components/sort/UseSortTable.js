import { useState, useEffect } from "react";

const UseSortTable = (listToSort) => {
  const [list, setList] = useState(listToSort);
  //ordenamos la lista si ya se ordeno se ordena a la inversa
  const sortCommercesList = (key, inverse) =>
    inverse
      ? [...list].sort((b, a) =>
          a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0
        )
      : [...list].sort((a, b) =>
          a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0
        );

  // devolvemos el estado que contiene la lista
  // ..el método para actualizar el estado
  // ..y el método para ordenarla
  return [list, setList, sortCommercesList];
};

export default UseSortTable;
