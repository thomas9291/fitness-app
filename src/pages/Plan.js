import React from "react";

import Navbar from "@/components/Navbar/Navbar";
import AddedCart from "@/components/AddedCart/AddedCart";

export default function Plan({ trainingAdded, setTrainingAdded }) {
  console.log("training added state from plan.js:", trainingAdded);
  const handlerDelete = (id) => {
    const deleteId = trainingAdded.filter((element) => element._id !== id);
    setTrainingAdded(deleteId);
  };
  /* async function addInput(exercice) {
    const response = await fetch("/api/exercices", {
      method: "POST",
      body: JSON.stringify(exercice),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      push("/SearchExercice");
    } else {
      console.error(response.status);
    }
  } */

  return (
    <>
      <Navbar />
      <h2 className="text-center">week 1:</h2>
      <div className="searchExercicesDiv">
        {trainingAdded.map(({ name, type, muscle, equipment, _id }) => {
          return (
            <div key={_id}>
              <AddedCart
                name={name}
                type={type}
                muscle={muscle}
                equipment={equipment}
                onClick={() => handlerDelete(_id)}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
