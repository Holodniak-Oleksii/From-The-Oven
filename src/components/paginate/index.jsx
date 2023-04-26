import React from "react";
import ReactPaginate from "react-paginate";

const Paginate = ({ pageCount, handlePageClick }) => {
  return (
    <ReactPaginate
      breakLabel='...'
      nextLabel='next >'
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel='< previous'
      renderOnZeroPageCount={null}
    />
  );
};

export default Paginate;
