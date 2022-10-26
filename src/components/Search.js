import React from 'react';
import '../styles/components/filterByName.scss';

const search = (props) => {
  return (
    <>
      <input
        className="search__input"
        type="text"
        placeholder="Search character"
        onChange={props.searchCharacter}
      ></input>
    </>
  );
};

export default search;
