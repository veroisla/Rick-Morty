import React from 'react';
import '../styles/components/filterByName.scss';

const filterByName = (props) => {
  const handleSubmit = (ev) => {
    props.preventSubmitForm(ev);
  };

  return (
    <form action="" onClick={handleSubmit}>
      <input
        className="search__input"
        type="text"
        placeholder="Search character"
        onChange={props.searchCharacter}
      ></input>
    </form>
  );
};

export default filterByName;
