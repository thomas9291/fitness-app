import React from "react";

import classes from "../GraphiqueFilter/GraphiqueFilter.module.css";

export default function SearchExerciceFilter({ onChangeFilter, selected }) {
  const dropdownChangeHandler = (event) => {
    onChangeFilter(event.target.value);
  };
  return (
    <div className={classes.filterContainer}>
      <div className={classes.filterControl}>
        <label className={classes.filterLabel}>Filter by equipment:</label>
        <select value={selected} onChange={dropdownChangeHandler}>
          <option value="dumbbell">dumbbell</option>
          <option value="barbell">barbell</option>
          <option value="cable">cable</option>
          <option value="machine">machine</option>
        </select>
      </div>
    </div>
  );
}
