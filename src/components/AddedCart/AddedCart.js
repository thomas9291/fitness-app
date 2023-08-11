import React, { useState } from "react";
import classes from "./AddedCart.module.css";

export default function AddedCart({
  name,
  type,
  muscle,
  date,
  reps,
  serie,
  weight,
  equipment,
  onClick,
  linkedId,
  nextTraining,
}) {
  const [lastTraining, setLastTraining] = useState(false);
  const handlerLastTraining = () => {
    setLastTraining(!lastTraining);
  };
  return (
    <div className={classes.containerCart}>
      <h4>name: {name}</h4>

      <p className="text-danger">type: {type}</p>
      <p className="text-success">muscle: {muscle}</p>
      <p className="text-primary">equipment: {equipment}</p>
      {lastTraining && (
        <div className="text-danger text-center">
          Last training:
          <p className="text-primary">date: {date}</p>
          <p className="text-success">
            weight: {weight} , serie: {serie}, reps: {reps}
          </p>
        </div>
      )}
      <div className={classes.btnContainer}>
        <button className="btn btn-success ">{linkedId}</button>
        <button className="btn btn-info m-1" onClick={handlerLastTraining}>
          {lastTraining ? "Back" : "Last training"}
        </button>
        <button className="btn btn-primary m-1" onClick={nextTraining}>
          next training
        </button>
        <button className="btn btn-danger m-1" type="button" onClick={onClick}>
          Delete
        </button>
      </div>
    </div>
  );
}
