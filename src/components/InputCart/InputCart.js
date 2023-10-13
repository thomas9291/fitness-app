import React, { useState } from "react";
import classes from "./InputCart.module.css";

import Image from "next/image";

export default function InputCart({
  name,
  muscle,
  equipment,
  onSubmit,
  hideResult,
  setHideResult,
  image,
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
      <h4>{name}</h4>
      <div className={classes.image}>
        <Image
          src={image}
          alt="...waiting for image"
          width={200}
          height={150}
        />
      </div>
      <p>{muscle}</p>
      <p>{equipment}</p>
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
              required
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
              required
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>

          <div className="input-group mb-3">
            <select
              id="input-group-text"
              name="serieTarget"
              className="fs-6"
              required
            >
              <option value=""> next reps target</option>
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
