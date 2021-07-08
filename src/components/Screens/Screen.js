import React, { useEffect, useState } from "react";
import UsePagination from "../pagination/UsePagination";
import TableCommerce from "../table/Table";
import Pagination from "../pagination/Pagination";
import UseSortTable from "../sort/UseSortTable";
import FilterActive from "../filter/ActivityFilter";
import SearchBox from "../searchBox/SearchBox";

function ScreenTable({ axiosData, setactivityData, setDataQuery }) {
  const [saveIdOrCUIT, setSaveIdOrCUIT] = useState();
  const [idOrCuitStatus, setIdOrCuitidOrCuitStatus] = useState(true);
  const [searchboxquery, setSearchboxquery] = useState("");
  const [activityvalue, setActivityvalue] = useState();
  //le paso al hook que ordena la lista, la data y una key que sera la que ordene
  const [list, setList, sortCommercesList] = UseSortTable(
    axiosData.data,
    
  );
  //le paso por parametroal hook de la paginacion la data entera, y tambien la lista ya ordenada
  const {
    currentPage,
    handleNextbtn,
    handlePrevbtn,
    pages,
    pageDecrementBtn,
    renderPageNumbers,
    pageIncrementBtn,
    currentItems,
  } = UsePagination(axiosData, list);
  //ordeno la lista en base a si la key o el status cambia
  useEffect(() => {
    let newSortedList = sortCommercesList(saveIdOrCUIT);
    if (newSortedList[0] === list[0])
      newSortedList = sortCommercesList(saveIdOrCUIT, idOrCuitStatus);
    setList(newSortedList);
  }, [saveIdOrCUIT, idOrCuitStatus]);
  //cada vez que el valor de Activo cambia "1", "0" log guardo en una variable de estado
  useEffect(() => {
    setactivityData(activityvalue);
  }, [activityvalue]);
//lo mismo con la query
  useEffect(() => {
      setDataQuery(searchboxquery);
  }, [searchboxquery]);
  return (
    <>
      <SearchBox setSearchboxquery={setSearchboxquery} />
      <FilterActive setActivityvalue={setActivityvalue} />

      <TableCommerce
        setSaveIdOrCUIT={setSaveIdOrCUIT}
        idOrCuitStatus={idOrCuitStatus}
        setIdOrCuitidOrCuitStatus={setIdOrCuitidOrCuitStatus}
        currentItems={currentItems}
      />
      <Pagination
        currentPage={currentPage}
        handleNextbtn={handleNextbtn}
        handlePrevbtn={handlePrevbtn}
        pages={pages}
        pageDecrementBtn={pageDecrementBtn}
        renderPageNumbers={renderPageNumbers}
        pageIncrementBtn={pageIncrementBtn}
        currentItems={currentItems}
      />
    </>
  );
}

export default ScreenTable;
