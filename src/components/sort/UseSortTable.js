import { useState, useEffect } from "react";

const UseSortTable = (listToSort, originalKey) => {
  const [list, setList] = useState(listToSort);

  const sortCommercesList = (key, inverse) => //sacar guion o sortCommerces
    inverse
      ? [...list].sort((b, a) =>
          a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0
        )
      : [...list].sort((a, b) =>
          a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0
        );

  // ordenamos la lista con el useEffect
  useEffect(() => {
    setList(sortCommercesList(originalKey));
  }, [originalKey]);

  // devolvemos el estado que contiene la lista
  // ..el método para actualizar el estado
  // ..y el método para ordenarla
  return [list, setList, sortCommercesList];
};

export default UseSortTable;
