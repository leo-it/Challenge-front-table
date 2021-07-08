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
  const [list, setList, sort] = UseSortTable(axiosData.data, saveIdOrCUIT);
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

  useEffect(() => {
    let newSortedList = sort(saveIdOrCUIT);
    if (newSortedList[0] === list[0]) newSortedList = sort(saveIdOrCUIT, true);
    setList(newSortedList);
  }, [saveIdOrCUIT, idOrCuitStatus]);
  useEffect(() => {
    const activeAxios = () => {
      setactivityData(activityvalue);
    };
    activeAxios();
  }, [activityvalue]);
  useEffect(() => {
    const queryAxios = () => {
      setDataQuery(searchboxquery);
    };
    queryAxios();
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
