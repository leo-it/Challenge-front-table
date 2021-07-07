import React, { useEffect, useState } from "react";
import UsePagination from "../pagination/UsePagination";
import TableCommerce from "../table/Table";
import Pagination from "../pagination/Pagination";
import UseSortTable from "../sort/UseSortTable";
import FilterActive from "../filter/FilterActive";
import SearchBox from "../searchBox/SearchBox";

function ScreenTable({ axiosData, setDataActive, setDataQuery }) {
  const [order, setOrder] = useState();
  const [status, setStatus] = useState(true);
  const [query, setQuery] = useState("");
  const [valueActive, setValueActive] = useState();
  const [list, setList, sort] = UseSortTable(axiosData.data, order);
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
    let newSortedList = sort(order);
    if (newSortedList[0] === list[0]) newSortedList = sort(order, true);
    setList(newSortedList);
  }, [order, status]);
useEffect(() => {
   const activeAxios = () => {
/*     setData({...setData, valueActive })
 */ 
setDataActive(valueActive)
}
  activeAxios()
}, [valueActive])
useEffect(() => {
  const queryAxios = () => {
/*    setDataQuery({...setDataQuery, query }) */
setDataQuery(query)
 }
 queryAxios()
}, [query])
  return (
    <>
    <SearchBox setQuery={setQuery}/>
      <FilterActive
        setValueActive={setValueActive}
      />

      <TableCommerce
        setOrder={setOrder}
        status={status}
        setStatus={setStatus}
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
