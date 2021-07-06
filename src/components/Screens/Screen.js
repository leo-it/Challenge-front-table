import React, { useEffect, useState } from "react";
import UsePagination from "../pagination/UsePagination";
import TableCommerce from "../table/Table";
import Pagination from "../pagination/Pagination";

function ScreenTable({ axiosData }) {
  const {
    currentPage,
    handleNextbtn,
    handlePrevbtn,
    pages,
    pageDecrementBtn,
    renderPageNumbers,
    pageIncrementBtn,
    currentItems,
  } = UsePagination(axiosData);

  return (
    <>
      <TableCommerce currentItems={currentItems} />
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
