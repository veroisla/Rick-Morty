import React from 'react';
import '../styles/components/filterByName.scss';

function filterByName(props) {
  const handleChange = (ev) => {
    props.handleFilterByText(ev.target.value);
  };
  const handleSubmit = (ev) => {
    props.handleSubmit(ev);
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        className="search__input"
        type="text"
        placeholder="Busca producto, deporte..."
        onChange={handleChange}
        value={props.inputSearch}
      ></input>
    </form>
  );
}

export default filterByName;
