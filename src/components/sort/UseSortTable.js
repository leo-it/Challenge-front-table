import { useState, useEffect } from "react";

const UseSortTable = (listToSort, originalKey) => {
  const [list, setList] = useState(listToSort);

  const sort_lists = (key, inverse) =>
    inverse
      ? [...list].sort((b, a) =>
          a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0
        )
      : [...list].sort((a, b) =>
          a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0
        );

  // ordenamos la lista con el useEffect
  useEffect(() => {
    setList(sort_lists(originalKey));
  }, []);

  // devolvemos el estado que contiene la lista
  // ..el método para actualizar el estado
  // ..y el método para ordenarla
  return [list, setList, sort_lists];
};

export default UseSortTable;
