import React from "react";
import useSWR from "swr";
import { useRouter } from "next/router";

import { useSession, signIn, signOut } from "next-auth/react";
import Navbar from "@/components/Navbar/Navbar";
import ExerciceCart from "@/components/ExerciceCart/ExerciceCart";

export default function SearchExercice({ setTrainingAdded, trainingAdded }) {
  const { data: session } = useSession();
  const router = useRouter();
  const { data: exercicesList } = useSWR("/api/exercices", {
    fallbackData: [],
  });
  const { push } = router;
  const handlerAddTraining = (id) => {
    const filteredId = exercicesList.filter((element) => element._id === id);
    setTrainingAdded([...trainingAdded, ...filteredId]);
    push("/Plan");
  };

  if (session) {
    return (
      <>
        <Navbar onClick={() => signOut} />
        <h2>search exercices</h2>
        <h3>All Exercices:</h3>
        <div className="searchExercicesDiv">
          {exercicesList.map(
            ({ name, onClick, type, muscle, equipment, _id }) => {
              return (
                <div key={_id}>
                  <ExerciceCart
                    name={name}
                    type={type}
                    muscle={muscle}
                    equipment={equipment}
                    onClick={() => handlerAddTraining(_id)}
                  />
                </div>
              );
            }
          )}
        </div>
      </>
    );
  }
  return (
    <>
      <div
        className="d-flex flex-column card mx-auto mt-5 p-2"
        style={{ width: "30%" }}
      >
        <h4 className="text-center"> Not signed in </h4>

        <button
          type="button"
          className="btn btn-success"
          onClick={() => signIn()}
        >
          Sign in
        </button>
      </div>
    </>
  );
}
