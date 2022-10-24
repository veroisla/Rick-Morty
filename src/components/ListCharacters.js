import React from 'react';
import Card from '../components/Card';

import '../styles/components/ListCharacters.scss';

function ListCharacters({ results }) {
  // console.log(results);
  let display;

  if (results) {
    display = results.map((character) => {
      return (
        <section>
          <ul>
            <li key={character.id}>
              <Card character={character} />
            </li>
          </ul>
        </section>
      );
    });
  } else {
    display = <p>No chararters found</p>;
  }
  return <>{display}</>;
}

export default ListCharacters;
