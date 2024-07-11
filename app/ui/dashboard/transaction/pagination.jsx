import React from 'react';

const Pagination = ({ totalItems, itemsPerPage, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination absolute right-4 bottom-0 flex justify-end my-4">
      {pageNumbers.map((number) => (
        <button
          key={number}
          className={`btn btn-xs mx-1 ${currentPage === number ? 'bg-red-500 text-white' : ''}`}
          onClick={() => paginate(number)}
        >
          {number}
        </button>
      ))}
    </nav>
  );
};

export default Pagination;
