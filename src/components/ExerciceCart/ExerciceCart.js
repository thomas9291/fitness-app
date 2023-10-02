import React from "react";
import classes from "./ExerciceCart.module.css";

import Image from "next/image";

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
      <button className={classes.btn} onClick={training1}>
        Add to training 1
      </button>
      <button className={classes.btn} onClick={training2}>
        Add to training 2
      </button>
      <button className={classes.btn} onClick={training3}>
        Add to training 3
      </button>{" "}
      <button className={classes.btn} onClick={training4}>
        Add to training 4
      </button>
    </div>
  );
}
