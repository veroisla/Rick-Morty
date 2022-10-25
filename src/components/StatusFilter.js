import React from 'react';

function StatusFilter(props) {
  let status = ['Alive', 'Dead', 'Unknow'];

  const handleChange = (ev) => {
    props.handleFilterByStatus(ev.target.value);
  };

  const renderStatus = () => {
    return status.map((status, index) => {
      return (
        <option value={status} key={index}>
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
      >
        <option value="">All</option>
        {renderStatus()}
      </select>
    </>
  );
}

export default StatusFilter;
