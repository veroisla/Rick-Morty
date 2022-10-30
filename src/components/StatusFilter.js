import React from 'react';
import '../styles/components/Filters.scss';

function StatusFilter(props) {
  let status = ['Alive', 'Dead', 'Unknow'];

  const handleChange = (ev) => {
    props.handleFilterByStatus(ev.target.value);
  };

  const renderStatus = () => {
    return status.map((status, index) => {
      return (
        <option value={status} key={index} className="filter__option">
          {status}
        </option>
      );
    });
  };

  return (
    <>
      <select
        name="status"
        onChange={handleChange}
        value={props.filterByStatus}
        className="filter__select"
      >
        <option value="" className="filter__option" disabled>
          Status
        </option>
        <option value="" className="filter__option">
          All
        </option>
        {renderStatus()}
      </select>
    </>
  );
}

export default StatusFilter;
