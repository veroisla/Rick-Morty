import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { matchPath, useLocation } from 'react-router';

import '../styles/components/App.scss';

import getApiData from '../services/characterApi';
import ListCharacters from './ListCharacters';
import FilterByName from './FilterByName';
import CharacterDetail from './CharacterDetail';

function App() {
  const [dataCharacters, setDataCharacters] = useState([]);
  const [inputSearch, setInputSearch] = useState('');

  console.log(dataCharacters);

  useEffect(() => {
    if (dataCharacters.length === 0) {
      getApiData().then((dataFromApi) => {
        setDataCharacters(dataFromApi);
      });
    }
  }, []);

  //PREVENIR ENVÍO POR DEFECTO
  const handleSubmit = (ev) => {
    ev.preventDefault();
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

  const characterFilters = Array.isArray(dataCharacters)
    ? dataCharacters.filter((character) => {
        return character.results.name
          .toLowerCase()
          .includes(inputSearch.toLowerCase());
      })
    : [];

  // OBTENER DATO DE CADA PERSONAJE - RUTA DINÁMICA

  const { pathname } = useLocation();
  const dataPath = matchPath('/character/:id', pathname);
  console.log('dataPath', dataPath);
  const characterId = dataPath !== null ? dataPath.params.id : null;
  console.log('characterId', characterId);

  // const characterFound =  dataCharacters.find(
  //   (character) => character.results.id === characterId
  // );

  const characterFound = Array.isArray(dataCharacters)
    ? dataCharacters.find((character) => character.results.id === characterId)
    : [];

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
            </>
          }
        />
        <Route
          path="/character/:id"
          element={<CharacterDetail character={characterFound} />}
        />
      </Routes>
    </div>
  );
}

export default App;
