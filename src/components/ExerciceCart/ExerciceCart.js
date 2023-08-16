import React from "react";
import classes from "./ExerciceCart.module.css";

export default function ExerciceCart({
  onClick,
  name,
  type,
  muscle,
  equipment,
  image,
  week2,
}) {
  return (
    <div className={classes.containerCart}>
      <h4>name: {name}</h4>
      <img className={classes.image} src={image} alt="...waiting for image" />
      <p>type: {type}</p>
      <p>muscle: {muscle}</p>
      <p>equipment: {equipment}</p>

      <button className="btn btn-success" onClick={onClick}>
        Add to week 1
      </button>
      <button className="btn btn-success m-1" onClick={week2}>
        Add to week 2
      </button>
    </div>
  );
}
