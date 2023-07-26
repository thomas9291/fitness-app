import React, { useState } from "react";
import classes from "./AddedCart.module.css";

export default function AddedCart({
  onSubmit,
  name,
  type,
  muscle,
  equipment,
  onClick,
}) {
  const [hideForm, setHideForm] = useState(false);
  function handlerHideForm() {
    setHideForm(!hideForm);
  }
  const handlerInputData = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const data = Object.fromEntries(formData);
    console.log("data from form exercice:", data);
    onSubmit(data);
    event.target.reset();
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
      <div>
        <button
          className="btn btn-success"
          type="button"
          onClick={handlerHideForm}
        >
          {hideForm ? "Back" : "Add result"}
        </button>
        <button className="btn btn-danger m-2" type="button" onClick={onClick}>
          Delete
        </button>
      </div>
      {hideForm && (
        <form className={classes.formContainer} onSubmit={handlerInputData}>
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Weight:
            </span>
            <input
              type="number"
              name="weight"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Serie:
            </span>
            <input
              type="number"
              name="serie"
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
              type="number"
              name="reps"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <button className="btn btn-success" type="submit">
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
