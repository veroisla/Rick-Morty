import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { matchPath, useLocation } from 'react-router';

import '../styles/components/App.scss';

import ListCharacters from './ListCharacters';
import FilterByName from './FilterByName';
// import CharacterDetail from './CharacterDetail';
import Pagination from './Pagination';

function App() {
  const [dataCharacters, setDataCharacters] = useState([]);
  let { info, results } = dataCharacters;
  const [inputSearch, setInputSearch] = useState('');
  const [pageNumber, setPageNumber] = useState(1);

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${inputSearch}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setDataCharacters(data);
    })();
  }, [api]);

  // ----- PREVENIR ENVÍO POR DEFECTO -------
  const preventSubmitForm = (ev) => {
    ev.preventDefault();
  };

  // ------- PAGINATION --------
  const prevPage = () => {
    //Para que no retorne páginas -1, -2 le digo cuando pageNumber sea igual a 1, dejas de retornar.
    if (pageNumber === 1) return;
    setPageNumber((x) => x - 1);
  };

  const nextPage = () => {
    if (pageNumber === 42) return;
    setPageNumber((x) => x + 1);
  };

  // ------ SEARCH CHARACTER -------
  const searchCharacter = (ev) => {
    setInputSearch(ev.target.value);
  };

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <FilterByName
                preventSubmitForm={preventSubmitForm}
                searchCharacter={searchCharacter}
              />

              <ListCharacters results={results} />

              <Pagination
                prevPage={prevPage}
                pageNumber={pageNumber}
                nextPage={nextPage}
              />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
