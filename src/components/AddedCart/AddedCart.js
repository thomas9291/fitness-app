import React from "react";
import classes from "./AddedCart.module.css";

import Image from "next/image";

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
      <h4> {name}</h4>
      <div className={classes.image}>
        <Image
          src={image}
          alt="...waiting for image"
          width={200}
          height={150}
        />
      </div>
      <p className="mt-2"> {muscle}</p>
      <p> {equipment}</p>
      <div className={classes.btnContainer}>
        <button className="btn btn-danger m-1" onClick={onDelete}>
          Delete
        </button>
        <button className="btn btn-success ">{linkedId}</button>
      </div>
    </div>
  );
}
