import React from "react";
import classes from "./ExerciceCart.module.css";

export default function ExerciceCart({
  onClick,
  name,
  type,
  muscle,
  equipment,
  image,
}) {
  return (
    <div className={classes.containerCart}>
      <h4>name: {name}</h4>
      <img className={classes.image} src={image} alt="...waiting for image" />
      <p>type: {type}</p>
      <p>muscle: {muscle}</p>
      <p>equipment: {equipment}</p>

      <button className="btn btn-success" onClick={onClick}>
        Add to my training
      </button>
    </div>
  );
}
