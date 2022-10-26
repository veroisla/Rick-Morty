import React from 'react';
import Card from '../components/Card';

import '../styles/components/ListCharacters.scss';

function ListCharacters({ results, inputSearch }) {
  // console.log(results);
  let display;

  if (results) {
    display = results.map((character, index) => {
      return (
        <section>
          <ul>
            <li key={index}>
              <Card character={character} />
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
