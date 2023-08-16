import React, { useState } from "react";
import classes from "./AddedCart.module.css";

export default function AddedCart({
  name,
  type,
  muscle,
  date,
  reps,
  weight,
  equipment,
  onClick,
  onDeleteWeek2,
  linkedId,
  adaptation,
  serieTarget,
  image,
}) {
  const [lastTraining, setLastTraining] = useState(false);
  const [nextTraining, setNextTraining] = useState(false);
  const handlerLastTraining = () => {
    setLastTraining(!lastTraining);
  };
  const handlerNextTraining = () => {
    setNextTraining(!nextTraining);
  };
  return (
    <div className={classes.containerCart}>
      <h4>name: {name}</h4>
      <img className={classes.image} src={image} alt="...waiting for image" />
      <p className="text-danger">type: {type}</p>
      <p className="text-success">muscle: {muscle}</p>
      <p className="text-primary">equipment: {equipment}</p>
      {lastTraining && (
        <div className="text-danger text-center">
          Last training:
          <p className="text-primary">date: {date}</p>
          <p className="text-success">
            weight: {weight}kg x reps: {reps}
          </p>
        </div>
      )}
      {nextTraining && (
        <div>
          Next training:
          <p>
            weight: {adaptation}kg x reps: {serieTarget}
          </p>
        </div>
      )}
      <div className={classes.btnContainer}>
        <button className="btn btn-success ">{linkedId}</button>
        <button className="btn btn-info m-1" onClick={handlerLastTraining}>
          {lastTraining ? "Back" : "Last training"}
        </button>
        <button className="btn btn-primary m-1" onClick={handlerNextTraining}>
          {nextTraining ? "Back" : "Next training"}
        </button>
        <button className="btn btn-danger m-1" type="button" onClick={onClick}>
          Delete
        </button>
      </div>
    </div>
  );
}
