import React from "react";
import classes from "./AddedCart.module.css";

export default function AddedCart({
  name,
  muscle,
  equipment,
  onDelete,
  linkedId,
  image,
}) {
  return (
    <div className={classes.containerCart}>
      <h4>name: {name}</h4>
      <img className={classes.image} src={image} alt="...waiting for image" />
      <p>muscle: {muscle}</p>
      <p c>equipment: {equipment}</p>
      <div className={classes.btnContainer}>
        <button className="btn btn-danger m-1" onClick={onDelete}>
          Delete
        </button>
        <button className="btn btn-success ">{linkedId}</button>
      </div>
    </div>
  );
}
