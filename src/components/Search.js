import React from 'react';

import '../styles/components/Search.scss';

const search = (props) => {
  return (
    <>
      <input
        type="search"
        class="input"
        placeholder="Search character"
        onChange={props.searchCharacter}
        value={props.inputSearch}
      ></input>
    </>
  );
};

export default search;
