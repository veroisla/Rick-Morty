import React from 'react';

function ListCharacters(props) {
  if (props.dataCharacters.length === 0) {
    return <p>No hay personajes con ese filtro</p>;
  } else {
    const characterList = props.dataCharacters.map((character, index) => {
      return (
        <li key={index}>
          <h4>{character.name}</h4>
          <img src={character.image} alt="" />
        </li>
      );
    });

    return (
      <section>
        <ul>{characterList}</ul>
      </section>
    );
  }
}

export default ListCharacters;
