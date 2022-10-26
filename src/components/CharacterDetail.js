import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/components/CharacterDetail.scss';
import '../styles/components/Card.scss';

function CharacterDetail(props) {
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
    <div className="card">
      <h2>Detalle personaje</h2>
      <img
        className="card__img"
        src={dataCharacters.image}
        alt={dataCharacters.name}
        title={dataCharacters.name}
      />{' '}
      <div className="card__info">
        <h4 className="card__name">{dataCharacters.name}</h4>
        <h5>Species: {dataCharacters.species}</h5>
        <h5>Gender: {dataCharacters.gender}</h5>
        <h5>Location: {dataCharacters.location?.name}</h5>
        <h5>Origin:{dataCharacters.origin?.name}</h5>

        <div
          className={
            dataCharacters.status === 'Dead'
              ? ' card__status--dead'
              : '' || dataCharacters.status === 'unknown'
              ? 'card__status--unknown'
              : 'card__status'
          }
        >
          {dataCharacters.status}
        </div>
      </div>
    </div>
  );
}

export default CharacterDetail;
