import React from "react";
/* import { useRouter } from "next/router";
import useSWR from "swr"; */
import Navbar from "@/components/Navbar/Navbar";
import Link from "next/link";
import AddedCart from "@/components/AddedCart/AddedCart";

export default function Plan({ trainingAdded, setTrainingAdded }) {
  /*   const router = useRouter();
  const { id } = router.query;
  const { data: exercice } = useSWR(`/api/exercices`);
  console.log("training added state from plan.js:", trainingAdded); */
  const handlerDelete = (id) => {
    const deleteId = trainingAdded.filter((element) => element._id !== id);
    setTrainingAdded(deleteId);
    push("/Plan");
  };
  console.log("training added state from plan.js:", trainingAdded);
  return (
    <>
      <Navbar />

      <h2 className="text-center">week 1:</h2>
      <div className="searchExercicesDiv">
        {trainingAdded.map(({ name, type, muscle, equipment, _id, result }) => {
          return (
            <div key={_id}>
              <AddedCart
                name={name}
                type={type}
                muscle={muscle}
                equipment={equipment}
                weight={result[result.length - 1]?.weight}
                reps={result[result.length - 1]?.reps}
                serie={result[result.length - 1]?.serie}
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
