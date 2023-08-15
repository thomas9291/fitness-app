import React from "react";

import classes from "./GraphiqueFilter.module.css";

export default function GraphiqueFilter({ onChangeFilter, selected }) {
  const dropdownChangeHandler = (event) => {
    onChangeFilter(event.target.value);
  };
  return (
    <div className={classes.filterContainer}>
      <div className={classes.filterControl}>
        <label className={classes.filterLabel}>Filter by year</label>
        <select value={selected} onChange={dropdownChangeHandler}>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
        </select>
      </div>
    </div>
  );
}
