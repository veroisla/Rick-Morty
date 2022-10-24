import React from 'react';

function Pagination(props) {
  const handleClickPrev = (ev) => {
    props.prevPage(ev.target);
  };
  const handleClickNext = (ev) => {
    props.nextPage(ev.target);
  };
  return (
    <div>
      <button onClick={handleClickPrev}>Prev</button>
      <button onClick={handleClickNext}>Next</button>
    </div>
  );
}

export default Pagination;

// import React from 'react';

// const Pagination = ({ setPageNumber }) => {
//   let next = () => {
//     setPageNumber((x) => x + 1);
//   };

//   let prev = () => {
//     setPageNumber((x) => x - 1);
//   };
//   return (
//     <div>
//       <button onClick={prev}>Prev</button>
//       <button onClick={next}>Next</button>
//     </div>
//   );
// };

// export default Pagination;

// La x representa el valor anterior, página 2 por ejemplo, y lo que queremos es que al clicar el boton de next se actualice la pagina al siguente valor, que seria la pagina 3
