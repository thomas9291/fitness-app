import React from "react";
import classes from "./ResultCart.module.css";

export default function ResultCart({ name, type, muscle, equipment, result }) {
  return (
    <div className={classes.containerCart}>
      <h4>name: {name}</h4>
      <p>type: {type}</p>
      <p>equipment: {equipment}</p>
      <p>result: {result}</p>{" "}
    </div>
  );
}
