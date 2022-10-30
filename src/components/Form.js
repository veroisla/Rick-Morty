import React from 'react';

import '../styles/components/Form.scss';
import Search from './Search';
import StatusFilter from './StatusFilter';
import SpeciesFilter from './SpeciesFilter';
import ClearFilters from './ClearFilters';

function Form(props) {
  const handleSubmitForm = (props) => {
    props.PreventSubmitForm();
  };
  return (
    <form onSubmit={handleSubmitForm} className="form">
      <div className="form__searchDelete">
        <Search
          searchCharacter={props.searchCharacter}
          inputSearch={props.inputSearch}
        />

        <ClearFilters clearFilters={props.clearFilters} />
      </div>
      <div className="form__filters">
        {' '}
        <SpeciesFilter
          handleFilterBySpecies={props.handleFilterBySpecies}
          filterBySpecies={props.filterBySpecies}
        />
        <StatusFilter
          handleFilterByStatus={props.handleFilterByStatus}
          filterByStatus={props.filterByStatus}
        />
      </div>
    </form>
  );
}

export default Form;
