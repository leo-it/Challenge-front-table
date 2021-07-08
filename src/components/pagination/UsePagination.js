import React, { useState } from "react";

function UsePagination(axiosData, list) {
  const [currentPage, setcurrentPage] = useState(axiosData.page);
  const [rowsPerPage, setRowsPerPage] = useState(axiosData.rowsPerPage);

  const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
  //click en el numero de pagina
  const handleClick = (event) => {
    setcurrentPage(Number(event.target.id));
  };
  //calcula cantidad de paginas en total
  const pages = [];
  for (let i = 1; i <= Math.ceil(list.length / rowsPerPage); i++) {
    pages.push(i);
  }

  //se guardan los datos que se van a mostrar por pagina
  const indexOfLastItem = currentPage * rowsPerPage;
  const indexOfFirstItem = indexOfLastItem - rowsPerPage;
  const currentItems = list.slice(indexOfFirstItem, indexOfLastItem);
  //renderiza los 5 numeros que aparecen en la paginacion
  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li key={number} id={number} onClick={handleClick}>
          {number}
        </li>
      );
    } else {
      return null;
    }
  });
  //se aumenta o disminuye en uno la pagina en la que estas,
  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);
    //si no llega a la ultima pagina pasa a las 5 paginas siguientes
    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };
  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };
  //maxPageNumberLimit va cambiando de 5 en 5, y pages.length es el total de paginas
  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
  }
  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
  }

  return {
    currentPage,
    currentItems,
    rowsPerPage,
    pageNumberLimit,
    maxPageNumberLimit,
    minPageNumberLimit,
    handleClick,
    handleNextbtn,
    handlePrevbtn,
    pages,
    pageDecrementBtn,
    renderPageNumbers,
    pageIncrementBtn,
  };
}

export default UsePagination;
