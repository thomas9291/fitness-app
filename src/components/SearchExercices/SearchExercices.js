import React, { useState } from "react";
import classes from "./SearchExercices.module.css";
import ExerciceCart from "../ExerciceCart/ExerciceCart";

export default function SearchExercices() {
  const [resultData, setResultData] = useState(null);
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
    if (!response.ok) {
      throw new Error("Error fetching data from API");
    }
    const resultData = await response.json();

    setResultData(resultData);
    console.log("exercices resultat:", resultData);

    event.target.reset();
  }

  return (
    <>
      <form onSubmit={searchHandler} className={classes.formContainer}>
        <input
          type="text"
          id="searchMuscle"
          name="searchMuscle"
          placeholder="search a muscle"
        />

        <button type="submit">submit</button>
      </form>
      <div className={classes.cartContainer}>
        {resultData &&
          resultData.map((elements, index) => (
            <ExerciceCart
              key={index}
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
