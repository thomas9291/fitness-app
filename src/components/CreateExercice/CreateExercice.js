import React, { useState } from "react";
import classes from "./CreateExercice.module.css";

export default function CreateExercice({ onSubmit }) {
  const [hideMuscleInfo, setHideMuscleInfo] = useState(false);
  const [hideEquimentInfo, setHideEquimentInfo] = useState(false);
  const [hideTypeInfo, SethideTypeInfo] = useState(false);
  const handlerMuscleInfo = () => {
    setHideMuscleInfo(!hideMuscleInfo);
  };
  const handleEquimentInfo = () => {
    setHideEquimentInfo(!hideEquimentInfo);
  };
  const handlerTypeInfo = () => {
    SethideTypeInfo(!hideTypeInfo);
  };
  function handlerCreateExerciceData(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const data = Object.fromEntries(formData);
    onSubmit(data);
    event.target.reset();
  }
  return (
    <>
      <form
        className={classes.formContainer}
        onSubmit={handlerCreateExerciceData}
      >
        <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Name:
          </span>
          <input
            type="text"
            name="name"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Max kg value:
          </span>
          <input
            type="number"
            name="maxValue"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <div className="d-flex mb-3">
          <div className="input-group m-1 p-1">
            <select id="input-group-text" name="muscle" className="fs-6">
              <option value=""> Muscle</option>
              <option value="chest">chest</option>
              <option value="upper back">upper back</option>
              <option value="lower back">lower back</option>
              <option value="legs">legs</option>
            </select>
          </div>
          <div className="input-group m-1 p-1">
            <select id="input-group-text" name="equipment" className="fs-6">
              <option value=""> Equipment</option>
              <option value="dumbbell">dumbbell</option>
              <option value="barbell">barbell</option>
              <option value="cable">cable</option>
              <option value="machine">machine</option>
            </select>
          </div>
        </div>
        <button className="btn btn-success" type="submit">
          Submit
        </button>
      </form>
      <button className="btn btn-info m-2 " onClick={handlerMuscleInfo}>
        {hideMuscleInfo ? "back" : "muscles name info"}
      </button>
      <button className="btn btn-info m-2" onClick={handleEquimentInfo}>
        {hideEquimentInfo ? "back" : "equipments name info"}
      </button>
      <button className="btn btn-info m-2" onClick={handlerTypeInfo}>
        {hideTypeInfo ? "back" : "type name info"}
      </button>
      {hideTypeInfo && (
        <div className={classes.typeInfoContainer}>
          <ul>
            <li>Isolation</li>
            <li>muscle chain</li>
          </ul>
        </div>
      )}
      {hideEquimentInfo && (
        <div className={classes.equipmentInfoContainer}>
          <ul>
            <li>dumbbell</li>
            <li>barbell</li>
            <li>e-z_curl_bar</li>
            <li>none</li>
            <li>body_only</li>
            <li>cable</li>
            <li>machine</li>
          </ul>
        </div>
      )}
      {hideMuscleInfo && (
        <div className={classes.infoMuscleContainer}>
          <div className={classes.divItemsInfoMuscle}>
            <h3>Back</h3>
            <ul>
              <li>trapezius</li>
              <li>upper-back</li>
              <li>lower-back</li>
            </ul>
          </div>
          <div className={classes.divItemsInfoMuscle}>
            <h3>Chest</h3>
            <ul>
              <li>chest</li>
            </ul>
          </div>
          <div className={classes.divItemsInfoMuscle}>
            <h3>Arms</h3>
            <ul>
              <li>biceps</li>
              <li>triceps</li>
              <li>forearm</li>
              <li>back-deltoids</li>
              <li>front-deltoids</li>
            </ul>
          </div>
          <div className={classes.divItemsInfoMuscle}>
            <h3>Abs</h3>
            <ul>
              <li>abs</li>
              <li>obliques</li>
            </ul>
          </div>
          <div className={classes.divItemsInfoMuscle}>
            <h3>Legs</h3>
            <ul>
              <li>adductor</li>
              <li>hamstring</li>
              <li>quadriceps</li>
              <li>abductors</li>
              <li>calves</li>
              <li>gluteal</li>
            </ul>
          </div>
          <div className={classes.divItemsInfoMuscle}>
            <h3>Head</h3>
            <ul>
              <li>head</li>
              <li>neck</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
