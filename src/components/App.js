import React, { useEffect, useState } from 'react';
import '../styles/components/App.scss';

import getApiData from '../services/characterApi';
import ListCharacters from './ListCharacters';

function App() {
  const [dataCharacters, setDataCharacters] = useState([]);

  console.log(dataCharacters);

  useEffect(() => {
    if (dataCharacters.length === 0) {
      getApiData().then((dataFromApi) => {
        setDataCharacters(dataFromApi);
      });
    }
  }, []);

  return (
    <>
      <ListCharacters dataCharacters={dataCharacters} />
    </>
  );
}

export default App;
