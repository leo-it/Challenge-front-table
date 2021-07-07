import React, { useEffect, useState } from "react";
import UsePagination from "../pagination/UsePagination";
import TableCommerce from "../table/Table";
import Pagination from "../pagination/Pagination";
import UseSortTable from "../sort/UseSortTable";

function ScreenTable({ axiosData }) {
  const [order, setOrder] = useState();
  const [status, setStatus] = useState(true);
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

  return (
    <>
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
