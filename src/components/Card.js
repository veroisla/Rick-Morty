import React from 'react';
import '../styles/components/Card.scss';

function Card(props) {
  return (
    <div>
      <h4>{props.character.name}</h4>
      <img
        src={props.character.image}
        alt={props.character.name}
        title={props.character.name}
      />
    </div>
  );
}

export default Card;
