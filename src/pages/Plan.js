import React from "react";

import Navbar from "@/components/Navbar/Navbar";
import ExerciceCart from "@/components/ExerciceCart/ExerciceCart";

export default function Plan({ trainingAdded, setTrainingAdded }) {
  console.log("training added state from plan.js:", trainingAdded);
  return (
    <>
      <Navbar />
      <div className="searchExercicesDiv">
        {trainingAdded.map(({ name, type, muscle, equipment, _id }) => {
          return (
            <div key={_id}>
              <ExerciceCart
                name={name}
                type={type}
                muscle={muscle}
                equipment={equipment}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
