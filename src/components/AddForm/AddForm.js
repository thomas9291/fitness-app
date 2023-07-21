/* import React from "react";
import classes from "./AddForm.module.css";

export default function AddForm({ onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmit(data);
  }
  return (
    <form className={classes.formContainer} onSubmit={handleSubmit}>
      <div className={classes.itemsForm}>
        <input type="number" name="reps" id="reps" placeholder="reps" />
      </div>
      <div className={classes.itemsForm}>
        <input type="number" name="weight" id="weigth" placeholder="weigth" />
      </div>
      <div className={classes.itemsForm}>
        <input type="number" name="serie" id="serie" placeholder="serie" />
      </div>

      <button type="submit" className="btn btn-success m-1">
        submit
      </button>
    </form>
  );
}
 */
