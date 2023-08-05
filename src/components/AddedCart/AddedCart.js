import React, { Children } from "react";
import classes from "./AddedCart.module.css";

export default function AddedCart({
  onSubmit,
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
}) {
  return (
    <div className={classes.containerCart}>
      <h4>name: {name}</h4>

      <p>type: {type}</p>
      <p>muscle: {muscle}</p>
      <p>equipment: {equipment}</p>
      <div>
        last training:
        <p>date: {date}</p>
        <p>
          weight: {weight} , serie: {serie}, reps: {reps}
        </p>
      </div>
      <div>
        <button className="btn btn-success ">{linkedId}</button>
        <button className="btn btn-danger m-2" type="button" onClick={onClick}>
          Delete
        </button>
      </div>
    </div>
  );
}
