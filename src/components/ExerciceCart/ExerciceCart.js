import React from "react";
import classes from "./ExerciceCart.module.css";

/* import AddForm from "../AddForm/AddForm"; */

export default function ExerciceCart({
  onClick,
  name,
  type,
  muscle,
  equipment,
}) {
  return (
    <div className={classes.containerCart}>
      <h4>name: {name}</h4>
      {/* <img
        className={classes.image}
        src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
        alt=""
      /> */}
      <p>type: {type}</p>
      <p>muscle: {muscle}</p>
      <p>equipment: {equipment}</p>

      <button className="btn btn-success" onClick={onClick}>
        Add to my training
      </button>
    </div>
  );
}
