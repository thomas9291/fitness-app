import React from "react";
import classes from "./SearchExercices.module.css";
import ExerciceCart from "../ExerciceCart/ExerciceCart";

export default function SearchExercices() {
  async function searchHandler(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log("data from searchExercices:", data);
    const exerciceUrl = `https://api.api-ninjas.com/v1/exercises?muscle=${data.searchMuscle}`;
    const response = await fetch(exerciceUrl, {
      method: "GET",
      headers: {
        "X-Api-Key": "Uk1yQVyYhdRSuwMF2Hmk4cyKBhedf3oancYemH1E",
      },
    });

    const resultData = await response.json();

    console.log("exercices resultat:", resultData);
    event.target.reset();
  }

  return (
    <>
      <form onSubmit={searchHandler}>
        <input
          type="text"
          id="searchMuscle"
          name="searchMuscle"
          placeholder="search a muscle"
        />

        <button type="submit">submit</button>
      </form>
    </>
  );
}
