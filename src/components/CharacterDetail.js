import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { CgArrowLongLeft } from 'react-icons/cg';

import '../styles/components/CharacterDetail.scss';
import '../styles/components/Card.scss';

function CharacterDetail() {
  let { id } = useParams();
  const [dataCharacters, setDataCharacters] = useState([]);
  console.log(dataCharacters);

  let api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setDataCharacters(data);
    })();
  }, [api]);

  return (
    <section className="detail">
      {' '}
      <h2 className="detail__name">{dataCharacters.name}</h2>
      <div className="detail__card">
        <img
          className="detail__img"
          src={dataCharacters.image}
          alt={dataCharacters.name}
          title={dataCharacters.name}
        />{' '}
        <div
          className={
            dataCharacters.status === 'Dead'
              ? ' card__status--dead detail__status'
              : '' || dataCharacters.status === 'unknown'
              ? ' card__status--unknown detail__status'
              : '' || dataCharacters.status === 'Alive'
              ? 'card__status--alive detail__status'
              : ''
          }
        >
          {dataCharacters.status}
        </div>
        <div className="detail__info">
          <h5>Species: {dataCharacters.species}</h5>
          <h5>Gender: {dataCharacters.gender}</h5>
          <h5>Location: {dataCharacters.location?.name}</h5>
          <h5>Origin: {dataCharacters.origin?.name}</h5>
        </div>
      </div>
      {/* TODO:CHANGE ARROW COLORS ADD EFFECT */}
      <Link to={'/characterList'}>
        <CgArrowLongLeft
          alt="Back to home"
          title="Back to home"
          className="detail__arrow"
        />
      </Link>
    </section>
  );
}

export default CharacterDetail;
