import React from 'react';
import Card from '../components/Card';

import '../styles/components/ListCharacters.scss';

// TODO:MEJORAR LISTADO, VER PORQUÉ SALE ERROR GET

function ListCharacters({ results, inputSearch }) {
  let display;
  if (results) {
    display = results.map((character, index) => {
      return (
        <li key={index}>
          <Card character={character} />
        </li>
      );
    });
  } else {
    return (
      <p className="list__errorMessage">
        Character {inputSearch} doesn´t exist!
      </p>
    );
  }
  return <ul className="list">{display}</ul>;
}
export default ListCharacters;
