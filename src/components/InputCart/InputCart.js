import React, { useState } from "react";
import classes from "./InputCart.module.css";

export default function InputCart({
  name,
  type,
  muscle,
  equipment,
  onSubmit,
  hideResult,
  setHideResult,
}) {
  const [hideForm, setHideForm] = useState(false);
  function handlerHideForm() {
    setHideForm(!hideForm);
  }
  function handlerHideResult() {
    setHideResult(!hideResult);
  }
  const handlerInputData = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const data = Object.fromEntries(formData);
    console.log("data from form added cart:", data);
    onSubmit(data);
    event.target.reset();
  };
  return (
    <div className={classes.containerCart}>
      <h4>name: {name}</h4>

      <p>type: {type}</p>
      <p>muscle: {muscle}</p>
      <p>equipment: {equipment}</p>
      <div>
        <button className="btn btn-success" onClick={handlerHideForm}>
          {hideForm ? "Back" : "Add Info"}
        </button>
        <button className="btn btn-info m-1" onClick={handlerHideResult}>
          {hideResult ? "Back" : "show result"}
        </button>
      </div>
      {hideForm && (
        <form className={classes.formContainer} onSubmit={handlerInputData}>
          <div className="input-group mb-3 mt-1">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Weight:
            </span>
            <input
              type="text"
              name="weight"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Reps:
            </span>
            <input
              type="text"
              name="reps"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div className="input-group mb-3">
            {/*  <span className="input-group-text" id="inputGroup-sizing-default">
              Serie:
            </span> */}
            {/* <input
              type="number"
              name="serie"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            /> */}
            <select id="input-group-text" name="serie" className="fs-6">
              <option value=""> Number of serie </option>
              <option value="1">1</option>
              <option value="3">3</option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
            </select>
          </div>

          <button className="btn btn-success" type="submit">
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
