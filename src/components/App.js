import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ls from '../services/localStorage';

import '../styles/components/App.scss';
import Hero from './Hero';
import Nav from './Nav';
import ArrowUp from './ArrowUp';
import ListCharacters from './ListCharacters';
import Form from './Form';
import CharacterDetail from './CharacterDetail';
import Pagination from './Pagination';
import AccordionInfo from './AccordionInfo';

function App() {
  const [dataCharacters, setDataCharacters] = useState(
    ls.get('dataCharacters', [])
  );
  let { info, results } = dataCharacters;
  const [inputSearch, setInputSearch] = useState(ls.get('inputSearch', ''));
  const [pageNumber, setPageNumber] = useState(1);
  const [filterBySpecies, setFilterBySpecies] = useState(
    ls.get('filterBySpecies', '')
  );
  const [filterByStatus, setFilterByStatus] = useState(
    ls.get('filterByStatus', '')
  );

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${inputSearch}&status=${filterByStatus}&species=${filterBySpecies}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setDataCharacters(data);
    })();
  }, [api]);

  // ---- SAVE IN LOCALSTORAGE ------

  useEffect(() => {
    ls.set('dataProducts', dataCharacters);
    ls.set('inputSearch', inputSearch);
    ls.set('filterBySpecies', filterBySpecies);
    ls.set('filterByStatus', filterByStatus);
  }, [dataCharacters, inputSearch, filterBySpecies, filterByStatus]);

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
    // TODO:METER FLECHA HACIA ARRIBA
    <div className="app">
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route
          path="/characterList"
          element={
            <>
              <section className="bg__characters">
                {' '}
                <Nav />
                <Form
                  preventSubmitForm={preventSubmitForm}
                  searchCharacter={searchCharacter}
                  inputSearch={inputSearch}
                  //FILTERS
                  handleFilterBySpecies={handleFilterBySpecies}
                  filterBySpecies={filterBySpecies}
                  handleFilterByStatus={handleFilterByStatus}
                  filterByStatus={filterByStatus}
                  // CLEAR FILTERS
                  clearFilters={clearFilters}
                />
                <ArrowUp />
                <ListCharacters results={results} inputSearch={inputSearch} />
                <Pagination
                  pageNumber={pageNumber}
                  info={info}
                  setPageNumber={setPageNumber}
                />
              </section>
            </>
          }
        />
        <Route path="/character/:id" element={<CharacterDetail />} />
        <Route
          path="/info"
          element={
            <>
              <section className="bg__info">
                {' '}
                <Nav />
                <AccordionInfo />
              </section>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
