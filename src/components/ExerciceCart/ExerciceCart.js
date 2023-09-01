import React from "react";
import classes from "./ExerciceCart.module.css";

export default function ExerciceCart({
  name,
  muscle,
  equipment,
  image,
  week2,
  week1,
  week3,
  week4,
}) {
  return (
    <div className={classes.containerCart}>
      <h4>name: {name}</h4>
      <img className={classes.image} src={image} alt="...waiting for image" />
      <p>muscle: {muscle}</p>
      <p>equipment: {equipment}</p>
      <button className="btn btn-success" onClick={week1}>
        Add to week 1
      </button>
      <button className="btn btn-success m-1" onClick={week2}>
        Add to week 2
      </button>
      <button className="btn btn-success m-1" onClick={week3}>
        Add to week 3
      </button>{" "}
      <button className="btn btn-success m-1" onClick={week4}>
        Add to week 4
      </button>
    </div>
  );
}
