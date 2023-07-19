import React, { useState } from "react";
import classes from "./SearchExercices.module.css";
import ExerciceCart from "../ExerciceCart/ExerciceCart";
import { uid } from "uid";

export default function SearchExercices() {
  //I create the hook in order to have access to the return state outside the function.
  const [resultData, setResultData] = useState(null);
  const [hideForm, setHideForm] = useState(false);
  async function searchHandler(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log("data from searchExercices:", data);
    const exerciceUrl = `https://api.api-ninjas.com/v1/exercises?muscle=${data.searchMuscle}&equipment=${data.searchEquipment}`;
    const response = await fetch(exerciceUrl, {
      method: "GET",
      headers: {
        "X-Api-Key": "Uk1yQVyYhdRSuwMF2Hmk4cyKBhedf3oancYemH1E",
      },
    });
    if (!response.ok) {
      throw new Error("Error fetching data from API");
    }
    const resultData = await response.json();
    //thanks to this hook I can now work with the value of the inputs in the return state
    setResultData(resultData);
    event.target.reset();
  }
  const handlerForm = () => {
    setHideForm(!hideForm);
  };
  const id = uid();
  async function handelerPostNewExercice(event) {}
  return (
    <>
      <button
        className="btn btn-success m-1 p-1 text-center"
        onClick={handlerForm}
      >
        {hideForm ? "hide" : "select exercices"}
      </button>
      {hideForm && (
        <form onSubmit={searchHandler} className={classes.formContainer}>
          <label htmlFor="searchMuscle">Choose a muscle:</label>

          <select name="searchMuscle" id="muscle-select">
            <option value="">--Please choose an option--</option>
            <option value="quadriceps">quadriceps</option>
            <option value="glutes">glutes</option>
            <option value="abductors">abductors</option>
            <option value="adductors">adductors</option>
            <option value="lower_back">lower_back</option>
            <option value="middle_back">middle_back</option>
            <option value="chest">chest</option>
            <option value="lats">lats</option>
            <option value="traps">traps</option>
            <option value="neck">neck</option>
            <option value="triceps">triceps</option>
            <option value="biceps">biceps</option>
            <option value="forearms">forearms</option>
            <option value="hamstrings">hamstrings</option>
            <option value="calves">calves</option>
            <option value="abdominals">abdominals</option>
          </select>

          <label htmlFor="searchEquipment">Choose a Equipment:</label>

          <select name="searchEquipment" id="Equipment-select">
            <option value="">--Please choose an option--</option>
            <option value="dumbbell">dumbbell</option>
            <option value="barbell">barbell</option>
            <option value="machine">machine</option>
            <option value="None">None</option>
            <option value="other">other</option>
            <option value="body_only">body_only</option>
            <option value="e-z_curl_bar">e-z_curl_bar</option>
          </select>

          <button type="submit" className="btn btn-success m-1 ">
            submit
          </button>
        </form>
      )}
      <div className={classes.cartContainer}>
        {resultData &&
          resultData.map((elements) => (
            <ExerciceCart
              key={id}
              name={elements.name}
              type={elements.type}
              muscle={elements.muscle}
              difficulty={elements.difficulty}
              equipment={elements.equipment}
              instructions={elements.instructions}
            />
          ))}
      </div>
    </>
  );
}
