import React from 'react';
import '../styles/components/ClearFilters.scss';

function ClearFilters(props) {
  const handleClearBtn = () => {
    props.clearFilters();
  };
  return (
    <section>
      <button type="reset" onClick={handleClearBtn} className="resetBtn">
        Delete filters
      </button>
    </section>
  );
}

export default ClearFilters;
