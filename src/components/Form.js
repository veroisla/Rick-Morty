import React from 'react';
import Search from './Search';
import StatusFilter from './StatusFilter';
import SpeciesFilter from './SpeciesFilter';
import ClearFilters from './ClearFilters';

function Form(props) {
  const handleSubmitForm = (props) => {
    props.PreventSubmitForm();
  };
  return (
    <form onSubmit={handleSubmitForm}>
      <Search
        searchCharacter={props.searchCharacter}
        inputSearch={props.inputSearch}
      />

      <ClearFilters clearFilters={props.clearFilters} />

      <SpeciesFilter
        handleFilterBySpecies={props.handleFilterBySpecies}
        filterBySpecies={props.filterBySpecies}
      />
      <StatusFilter
        handleFilterByStatus={props.handleFilterByStatus}
        filterByStatus={props.filterByStatus}
      />
    </form>
  );
}

export default Form;
