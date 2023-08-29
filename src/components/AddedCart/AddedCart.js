import React, { useState } from "react";
import classes from "./AddedCart.module.css";

export default function AddedCart({
  name,
  type,
  muscle,
  equipment,
  onClick,
  onDeleteWeek2,
  linkedId,
  image,
}) {
  return (
    <div className={classes.containerCart}>
      <h4>name: {name}</h4>
      <img className={classes.image} src={image} alt="...waiting for image" />
      <p className="text-danger">type: {type}</p>
      <p className="text-success">muscle: {muscle}</p>
      <p className="text-primary">equipment: {equipment}</p>

      <div className={classes.btnContainer}>
        <button className="btn btn-success ">{linkedId}</button>
      </div>
    </div>
  );
}
