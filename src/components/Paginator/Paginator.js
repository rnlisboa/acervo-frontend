import React, { useState, useEffect } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr"
import "./styled.css";

function Pagination({ totalSize, pageSize, onPageChange }) {
  const [currentPage, setCurrentPage] = useState(
    localStorage.getItem("currentPage") || 1
  );
  const totalPages = Math.ceil(totalSize / pageSize);
  const previousPages = Number(currentPage) > 1 ? Number(currentPage) - 1 : null;
  const nextPages = Number(currentPage) < totalPages ? Number(currentPage) + 1 : null;
  useEffect(() => {
    localStorage.setItem("currentPage", currentPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const getButtons = () => {
    const buttons = [];
    if (totalPages <= 4) {
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(i);
      }
    } else if (Number(currentPage) <= 2) {
      for (let i = 1; i <= 4; i++) {
        buttons.push(i);
      }
    } else if (Number(currentPage) >= totalPages - 1) {
      for (let i = totalPages - 3; i <= totalPages; i++) {
        buttons.push(i);
      }
    } else {
      for (let i = Number(currentPage) - 1; i <= Number(currentPage) + 2; i++) {
        buttons.push(i);
      }
    }
    return buttons;
  };

  const buttons = getButtons();

  return (
    <div className="pagination">
      {previousPages && (
        <div
          className="navigate previous"
          onClick={() => handlePageChange(previousPages)}
        >
          <GrFormPrevious />
        </div>
      )}
      { buttons[0] > 1 &&
        <button
        key={1}
        className={`page ${1 === +currentPage ? "active" : ""}`}
        onClick={() => handlePageChange(1)}
        disabled={1 === +currentPage}
      >
        {1}
      </button>
      }
      {buttons.map((page) => (
        <button
          key={page}
          className={`page ${page === +currentPage ? "active" : ""}`}
          onClick={() => handlePageChange(page)}
          disabled={page === +currentPage}
        >
          {page}
        </button>
      ))}
      {
        buttons[buttons.length - 1] !== totalPages && <button
        key={totalPages}
        className={`page ${totalPages === +currentPage ? "active" : ""}`}
        onClick={() => handlePageChange(totalPages)}
        disabled={totalPages === +currentPage}
      >
        {totalPages}
      </button>
      }
      {nextPages && (
        <div
          className="navigate next"
          onClick={() => handlePageChange(nextPages)}>
          <GrFormNext />
        </div>
      )}
    </div>
  );
}

export default Pagination;
