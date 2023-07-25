import React, { useState } from "react";
import classes from "./ExerciceCart.module.css";
import BodyComposition from "../BodyComposition/BodyComposition";
import BodyCompositionPosterior from "../BodyComposition/BodyCompositionPosterior";
/* import AddForm from "../AddForm/AddForm"; */

export default function ExerciceCart({
  onClick,
  name,
  type,
  muscle,
  equipment,
}) {
  const [hideBody, setHideBody] = useState(false);
  const handlerBodyComposition = () => {
    setHideBody(!hideBody);
  };

  return (
    <div className={classes.containerCart}>
      <h4>name: {name}</h4>
      {/* <img
        className={classes.image}
        src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
        alt=""
      /> */}
      <p>type: {type}</p>
      <p>muscle: {muscle}</p>
      <p>equipment: {equipment}</p>

      <button onClick={handlerBodyComposition} className="btn btn-info m-2">
        Show Body
      </button>
      {hideBody && (
        <div>
          <BodyComposition name={name} muscles={[{ muscle }]} />

          <BodyCompositionPosterior name={name} muscles={[{ muscle }]} />
        </div>
      )}
      <button className="btn btn-success" onClick={onClick}>
        Add to my training
      </button>
    </div>
  );
}
