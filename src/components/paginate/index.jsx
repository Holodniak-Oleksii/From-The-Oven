import "@/assets/scss/effects/_paginate.scss";
import React from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import ReactPaginate from "react-paginate";
const Paginate = ({ page = 1, pageCount, handlePageClick }) => {
  return (
    <ReactPaginate
      activeClassName={"item active "}
      breakClassName={"item break-me "}
      breakLabel={"..."}
      containerClassName={"pagination"}
      disabledClassName={"disabled-page"}
      nextClassName={"item next "}
      nextLabel={<GrFormNext />}
      onPageChange={handlePageClick}
      forcePage={page - 1}
      pageCount={pageCount}
      pageClassName={"item pagination-page "}
      previousClassName={"item previous"}
      previousLabel={<GrFormPrevious />}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
    />
  );
};

export default Paginate;
