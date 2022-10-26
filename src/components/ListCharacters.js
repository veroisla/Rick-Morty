import React from 'react';
import Card from '../components/Card';

import '../styles/components/ListCharacters.scss';

// TODO:MEJORAR LISTADO, VER PORQUÉ SALE ERROR GET y ERROR KEY?

function ListCharacters({ results, inputSearch }) {
  // console.log(results);
  let display;

  if (results) {
    display = results.map((character, index) => {
      return (
        <section>
          <ul>
            <li key={index}>
              <Card character={character} page="/" />
            </li>
          </ul>
        </section>
      );
    });
  } else {
    display = <p>No chararters found {inputSearch}</p>;
  }
  return <>{display}</>;
}

export default ListCharacters;
