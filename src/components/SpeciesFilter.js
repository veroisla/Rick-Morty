import React from 'react';
import '../styles/components/Filters.scss';

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
        <option value={species} key={index} className="filter__option">
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
        className="filter__select filter__species"
      >
        <option value="" className="filter__option" disabled>
          Species
        </option>
        <option value="" className="filter__option">
          All
        </option>
        {renderSpecies()}
      </select>
    </>
  );
}

export default SpeciesFilter;
