import React from 'react';

function SpeciesFilter(props) {
  let species = [
    'Human',
    'Alien',
    'Humanoid',
    'Poopybutthole',
    'Mythological',
    'Unknow',
    'Animal',
    'Disease',
    'Robot',
    'Cronenberg',
  ];

  const handleChange = (ev) => {
    props.handleFilterBySpecies(ev.target.value);
  };

  const renderSpecies = () => {
    return species.map((species, index) => {
      return (
        <option value={species} key={index}>
          {species}
        </option>
      );
    });
  };

  return (
    <>
      <select
        name="species"
        onChange={handleChange}
        value={props.filterBySpecies}
      >
        <option value="">All</option>
        {renderSpecies()}
      </select>
    </>
  );
}

export default SpeciesFilter;
