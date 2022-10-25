import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { matchPath, useLocation } from 'react-router';

import '../styles/components/App.scss';

import ListCharacters from './ListCharacters';
import Search from './Search';
import ClearFilters from './ClearFilters';
// import CharacterDetail from './CharacterDetail';
import Pagination from './Pagination';
import AccordionFilters from './AccordionFilters';

function App() {
  const [dataCharacters, setDataCharacters] = useState([]);
  let { info, results } = dataCharacters;
  const [inputSearch, setInputSearch] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const [filterBySpecies, setFilterBySpecies] = useState('');
  const [filterByStatus, setFilterByStatus] = useState('');

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${inputSearch}&status=${filterByStatus}&species=${filterBySpecies}`;

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

  // ------ SEARCH CHARACTER -------
  const searchCharacter = (ev) => {
    setInputSearch(ev.target.value);
    setPageNumber(1);
  };

  // ----- FILTER SPECIES ------

  const handleFilterBySpecies = (value) => {
    setFilterBySpecies(value);
  };

  // ------ FILTER STATUS -------

  const handleFilterByStatus = (value) => {
    setFilterByStatus(value);
  };

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <form action="" onClick={preventSubmitForm}>
                <Search
                  preventSubmitForm={preventSubmitForm}
                  searchCharacter={searchCharacter}
                />
                <ClearFilters />
                <AccordionFilters
                  handleFilterBySpecies={handleFilterBySpecies}
                  filterBySpecies={filterBySpecies}
                  handleFilterByStatus={handleFilterByStatus}
                  filterByStatus={filterByStatus}
                  setPageNumber={setPageNumber}
                />
              </form>

              <ListCharacters results={results} inputSearch={inputSearch} />

              <Pagination
                pageNumber={pageNumber}
                info={info}
                setPageNumber={setPageNumber}
              />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
