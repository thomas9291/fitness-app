import React from "react";
import classes from "./CreateExercice.module.css";

export default function CreateExercice() {
  return (
    <>
      <h2>Create a exercice</h2>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="write a exercice name"
          />
        </div>
        <div>
          <label htmlFor="type">
            <input
              type="text"
              name="type"
              id="type"
              placeholder="write a type a exercie"
            />
          </label>
        </div>
        <div>
          <label htmlFor="muscle">
            <input
              type="text"
              name="muscle"
              id="muscle"
              placeholder="write the stressed muscle"
            />
          </label>
        </div>
        <div>
          <label htmlFor="equipment">
            <input
              type="text"
              name="equipment"
              id="equipment"
              placeholder="write the equipment"
            />
          </label>
        </div>
      </form>
    </>
  );
}
