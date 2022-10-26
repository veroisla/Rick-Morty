import React from 'react';

function ClearFilters(props) {
  const handleClearBtn = () => {
    props.clearFilters();
  };
  return (
    <section>
      <button type="reset" onClick={handleClearBtn}>
        Delete filters
      </button>
    </section>
  );
}

export default ClearFilters;
