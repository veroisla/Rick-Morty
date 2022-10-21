import React from 'react';
import '../styles/components/CharacterDetail.scss';
import '../styles/components/Card.scss';

function CharacterDetail(props) {
  return (
    // <div className="card">
    //   <h2>Detalle personaje</h2>
    //   <img
    //     className="card__img"
    //     src={props.character.image}
    //     alt={props.character.name}
    //     title={props.character.name}
    //   />{' '}
    //   <div className="card__info">
    //     <h4 className="card__name">{props.character.name}</h4>

    //     <p className="card__location">Localización:</p>
    //     <p className="card__locationName">{props.character.location.name}</p>
    //     <div
    //       className={
    //         props.character.status === 'Dead'
    //           ? 'card__status card__status--dead'
    //           : '' || props.character.status === 'unknown'
    //           ? 'card__status card__status--unknown'
    //           : 'card__status'
    //       }
    //     >
    //       {props.character.status}
    //     </div>
    //   </div>
    //   <h2>Más info</h2>
    // </div>
    <>
      {' '}
      <p>mas info</p>
      <p>{props.name}</p>
    </>
  );
}

export default CharacterDetail;
