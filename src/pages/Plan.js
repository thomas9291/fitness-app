import React from "react";

import Navbar from "@/components/Navbar/Navbar";
import Link from "next/link";
import AddedCart from "@/components/AddedCart/AddedCart";

export default function Plan({ trainingAdded, setTrainingAdded }) {
  console.log("training added state from plan.js:", trainingAdded);
  const handlerDelete = (id) => {
    const deleteId = trainingAdded.filter((element) => element._id !== id);
    setTrainingAdded(deleteId);
    push("/Plan");
  };
  /* const addInput = (newData) => {
    setTrainingAdded([...trainingAdded, { ...newData, id: uid() }]);
  }; */
  console.log("training added state from plan.js:", trainingAdded);
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
                /* onSubmit={addInput} */
                linkedId={
                  <Link
                    className="text-white text-decoration-none"
                    href={`/exerciceInput/${_id}`}
                  >
                    Add result
                  </Link>
                }
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
