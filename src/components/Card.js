import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/Card.scss';

function Card(props) {
  return (
    <Link to={`/character/${props.character.id}`}>
      <div className="card" key={props.character.id}>
        <img
          className="card__img"
          src={props.character.image}
          alt={props.character.name}
          title={props.character.name}
        />{' '}
        <div className="card__info">
          <h4 className="card__name">{props.character.name}</h4>
          <p className="card__location">Localización:</p>
          <p className="card__locationName">{props.character.location.name}</p>
          <div
            className={
              props.character.status === 'Dead'
                ? 'card__status card__status--dead'
                : '' || props.character.status === 'unknown'
                ? 'card__status card__status--unknown'
                : 'card__status'
            }
          >
            {props.character.status}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
