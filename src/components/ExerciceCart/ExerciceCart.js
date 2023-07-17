import React, { useState } from "react";
import classes from "./ExerciceCart.module.css";
import BodyComposition from "../BodyComposition/BodyComposition";
import BodyCompositionPosterior from "../BodyComposition/BodyCompositionPosterior";
/* import AddForm from "../AddForm/AddForm"; */

export default function ExerciceCart({
  onSubmit,
  name,
  type,
  muscle,
  difficulty,
  equipment,
  instructions,
}) {
  const [hideBody, setHideBody] = useState(false);
  /* const [hideInputs, setHideInputs] = useState(false); */
  const [hideInstruction, setHideInstruction] = useState(false);
  const handlerBodyComposition = () => {
    setHideBody(!hideBody);
  };
  /*   const handlerInputs = () => {
    setHideInputs(!hideInputs);
  }; */
  const handlerInstruction = () => {
    setHideInstruction(!hideInstruction);
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
      <p>difficulty: {difficulty}</p>
      <button className="btn btn-info m-2" onClick={handlerInstruction}>
        {hideInstruction ? "back" : "instructions"}
      </button>
      {hideInstruction && <p>instructions: {instructions}</p>}
      {/*  <button className="btn btn-info m-2" onClick={handlerInputs}>
        {hideInputs ? "hide" : "result"}
      </button> */}
      {/* {hideInputs && <AddForm onSubmit={onSubmit} />} */}
      <button onClick={handlerBodyComposition} className="btn btn-info m-2">
        Show Body
      </button>
      {hideBody && (
        <div>
          <BodyComposition
            name={name}
            muscles={["chest", "triceps", "front-deltoids"]}
          />

          <BodyCompositionPosterior
            name={name}
            muscles={["chest", "triceps", "front-deltoids"]}
          />
        </div>
      )}
    </div>
  );
}
