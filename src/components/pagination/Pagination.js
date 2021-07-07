import React from "react";
import "./style.css";
import { Center, Button } from "@chakra-ui/react";

function Pagination({
  currentPage,
  handleNextbtn,
  handlePrevbtn,
  pages,
  pageDecrementBtn,
  renderPageNumbers,
  pageIncrementBtn,
}) {
  return (
    <>
      <Center>
        <ul className="pageNumbers">
          <li>
            <Button
              onClick={handlePrevbtn}
              disabled={currentPage == pages[0] ? true : false}
            >
              Prev
            </Button>
          </li>
          {pageDecrementBtn}
          {renderPageNumbers}
          {pageIncrementBtn}

          <li>
            <Button
              onClick={handleNextbtn}
              disabled={currentPage == pages[pages.length - 1] ? true : false}
            >
              Next
            </Button>
          </li>
        </ul>
      </Center>
    </>
  );
}

export default Pagination;
