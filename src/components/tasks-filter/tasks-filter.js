import React from 'react';

import './tasks-filter.css';

const filterButtons = [
  { name: 'all', label: 'All' },
  { name: 'active', label: 'Active' },
  { name: 'completed', label: 'Completed' },
];

const TasksFilter = ({ filter, onFilterChange = () => {} }) => {
  const buttons = filterButtons.map(({ name, label }) => {
    const isActive = name === filter;
    const classNames = 'btn ' + (isActive ? ' selected' : ' ');

    return (
      <li key={name}>
        <button
          type="button"
          onClick={() => onFilterChange(name)}
          className={classNames}
        >
          {label}
        </button>
      </li>
    );
  });

  return <ul className="filters">{buttons}</ul>;
};

export default TasksFilter;
