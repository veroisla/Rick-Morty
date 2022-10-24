import React from 'react';
import ReactPaginate from 'react-paginate';
import '../styles/components/Pagination.scss';

function Pagination({ info, pageNumber, setPageNumber }) {
  return (
    <div>
      {' '}
      <ReactPaginate
        onPageChange={(data) => {
          setPageNumber(data.selected + 1);
        }}
        pageCount={info?.pages}
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        className="pagination"
        nextLabel=">"
        previousLabel="<"
        previousClassName="pagination__btn"
        nextClassName="pagination__btn"
        pageClassName="pagination__number"
        activeClassName="pagination__active"
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
      />
    </div>
  );
}

export default Pagination;
// TODO: VISITAR https://www.npmjs.com/package/react-paginate

// --> Estamos diciendo a la variable pageNumber que se actualice con el valor de data.slected (que es el numero de la pagina en la que estamos) y ponemos +1, porque si no empieza en la pagina 0
