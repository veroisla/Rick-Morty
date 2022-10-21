import React from 'react';
import Card from '../components/Card';

import '../styles/components/ListCharacters.scss';

function ListCharacters(props) {
  if (props.dataCharacters.length === 0) {
    return <p>No hay personajes con ese filtro</p>;
  } else {
    const characterList = props.dataCharacters.results.map(
      (character, index) => {
        return (
          <li key={index}>
            <Card character={character} />
          </li>
        );
      }
    );

    return (
      <section>
        <ul className="list">{characterList}</ul>
      </section>
    );
  }
}

export default ListCharacters;
