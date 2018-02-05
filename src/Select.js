import React from 'react';

const Select = ({
  options,
  value,
  handleChange,
  children,
}) =>
  <label>
    {children}:
    <select value={value} onChange={(e) => handleChange(e.target.value)}>
      {Object.keys(options).map(key =>
        <option value={options[key].value} key={options[key].value}>{options[key].label}</option>
      )}
    </select>
  </label>

export default Select;