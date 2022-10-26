import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// import { matchPath, useLocation } from 'react-router';

import '../styles/components/App.scss';

import ListCharacters from './ListCharacters';
import Form from './Form';
// import CharacterDetail from './CharacterDetail';
import Pagination from './Pagination';
// import AccordionFilters from './AccordionFilters';

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

  // ----- FILTER SPECIES VALUE ------

  const handleFilterBySpecies = (value) => {
    setFilterBySpecies(value);
  };

  // ------ FILTER STATUS VALUE -------

  const handleFilterByStatus = (value) => {
    setFilterByStatus(value);
  };

  // ---- CLEAR FILTERS -----
  const clearFilters = () => {
    setInputSearch('');
    setFilterBySpecies('');
    setFilterByStatus('');
  };

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Form
                preventSubmitForm={preventSubmitForm}
                searchCharacter={searchCharacter}
                //FILTERS
                handleFilterBySpecies={handleFilterBySpecies}
                filterBySpecies={filterBySpecies}
                handleFilterByStatus={handleFilterByStatus}
                filterByStatus={filterByStatus}
                // CLEAR FILTERS
                clearFilters={clearFilters}
              />

              {/* <AccordionFilters /> */}

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
