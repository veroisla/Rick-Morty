import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { matchPath, useLocation } from 'react-router';

import '../styles/components/App.scss';

import ListCharacters from './ListCharacters';
import FilterByName from './FilterByName';
import CharacterDetail from './CharacterDetail';
import Pagination from './Pagination';

function App() {
  const [dataCharacters, setDataCharacters] = useState([]);
  const [inputSearch, setInputSearch] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  console.log(pageNumber);

  console.log(dataCharacters);

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setDataCharacters(data);
    })();
  }, [api]);

  //FETCH API
  // const getApiData = () => {
  //   return fetch(
  //     `https://rickandmortyapi.com/api/character/?page=${pageNumber}`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       return data;
  //     });
  // };

  // useEffect(() => {
  //   if (dataCharacters.length === 0) {
  //     getApiData().then((dataFromApi) => {
  //       setDataCharacters(dataFromApi);
  //     });
  //   }
  // }, []);

  //PREVENIR ENVÍO POR DEFECTO
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  //PAGINATION

  const prevPage = () => {
    //Para que no retorne páginas -1, -2 le digo cuando pageNumber sea igual a 1, dejas de retornar.
    if (pageNumber === 1) return;
    setPageNumber((x) => x - 1);
  };

  const nextPage = () => {
    if (pageNumber === 42) return;
    setPageNumber((x) => x + 1);
  };

  //INPUT SEARCH
  const handleFilterByText = (value) => {
    setInputSearch(value);
  };

  // FILTRADOS
  // const characterFilters = dataCharacters.filter((character) => {
  //   return character.results.name
  //     .toLowerCase()
  //     .includes(inputSearch.toLowerCase());
  // });

  // OBTENER DATO DE CADA PERSONAJE - RUTA DINÁMICA

  const { pathname } = useLocation();
  const dataPath = matchPath('/character/:id', pathname);
  // console.log('dataPath', dataPath);
  const characterId = dataPath !== null ? dataPath.params.id : null;
  // console.log('characterId', characterId);

  // const characterFound = dataCharacters.find(
  //   (character) => character.results.id === characterId
  // );

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <FilterByName
                handleSubmit={handleSubmit}
                handleFilterByText={handleFilterByText}
              />
              <ListCharacters
                // dataCharacters={characterFilters}
                dataCharacters={dataCharacters}
                inputSearch={inputSearch}
              />
              <Pagination
                prevPage={prevPage}
                pageNumber={pageNumber}
                nextPage={nextPage}
              />
            </>
          }
        />
        {/* <Route
          path="/character/:id"
          element={<CharacterDetail character={characterFound} />}
        /> */}
      </Routes>
    </div>
  );
}

export default App;
