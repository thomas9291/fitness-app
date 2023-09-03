import React from "react";
import classes from "./ExerciceCart.module.css";

export default function ExerciceCart({
  name,
  muscle,
  equipment,
  image,
  training2,
  training1,
  training3,
  training4,
}) {
  return (
    <div className={classes.containerCart}>
      <h4>name: {name}</h4>
      <img className={classes.image} src={image} alt="...waiting for image" />
      <p>muscle: {muscle}</p>
      <p>equipment: {equipment}</p>
      <button className="btn btn-success" onClick={training1}>
        Add to training 1
      </button>
      <button className="btn btn-success m-1" onClick={training2}>
        Add to training 2
      </button>
      <button className="btn btn-success m-1" onClick={training3}>
        Add to training 3
      </button>{" "}
      <button className="btn btn-success m-1" onClick={training4}>
        Add to training 4
      </button>
    </div>
  );
}
