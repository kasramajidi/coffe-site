
import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="pagination flex items-center cursor-pointer">
      <button 
        id="prevPage" 
        onClick={() => onPageChange(currentPage - 1)} 
        disabled={currentPage === 0}
        className="hover:text-emerald-600 px-4"
      >
        قبلی
      </button>
      <div className="num_btn flex items-center cursor-pointer">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`num__btn ${currentPage === index ? 'num__btn--active' : ''} hover:text-emerald-600 px-4`}
            onClick={() => onPageChange(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <button 
        id="nextPage" 
        onClick={() => onPageChange(currentPage + 1)} 
        disabled={currentPage === totalPages - 1}
        className="hover:text-emerald-600 px-4"
      >
        بعدی
      </button>
      <div className="active__indicator" style={{ transform: `translateX(${currentPage * 4}rem)` }}></div>
    </div>
  );
};

export default Pagination;
