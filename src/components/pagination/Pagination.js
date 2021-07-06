import React from "react";
import "./style.css";

function Pagination({  currentPage,
  handleNextbtn,
  handlePrevbtn,
  pages,
  pageDecrementBtn,
  renderPageNumbers,
  pageIncrementBtn,
  currentItems, }) {


  console.log(currentPage);
  return (
    <>
      
      <ul className="pageNumbers">
        <li>
          <button
            onClick={handlePrevbtn}
            disabled={currentPage == pages[0] ? true : false}
          >
            Prev
          </button>
        </li>
        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}

        <li>
          <button
            onClick={handleNextbtn}
            disabled={currentPage == pages[pages.length - 1] ? true : false}
          >
            Next
          </button>
        </li>
      </ul>
    </>
  );
}

export default Pagination;
