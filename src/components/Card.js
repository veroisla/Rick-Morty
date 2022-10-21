import React from 'react';
import '../styles/components/Card.scss';

function Card(props) {
  return (
    <div className="card">
      <img
        className="card__img"
        src={props.character.image}
        alt={props.character.name}
        title={props.character.name}
      />{' '}
      <h4 className="card__name">{props.character.name}</h4>
      <p className="card__location">{props.character.location.name}</p>
      <div
        className={
          props.character.status === 'Dead'
            ? 'card__status dead'
            : '' || props.character.status === 'unknown'
            ? 'card__status unknown'
            : 'card__status'
        }
      >
        {props.character.status}
      </div>
    </div>
  );
}

export default Card;
