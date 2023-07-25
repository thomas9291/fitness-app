import React, { useState } from "react";
import useSWR from "swr";

import { useSession, signIn, signOut } from "next-auth/react";
import Navbar from "@/components/Navbar/Navbar";
import ExerciceCart from "@/components/ExerciceCart/ExerciceCart";
import BodyComposition from "@/components/BodyComposition/BodyComposition";
import BodyCompositionPosterior from "@/components/BodyComposition/BodyCompositionPosterior";

export default function SearchExercice() {
  const { data: session } = useSession();
  const { data: exercicesList } = useSWR("/api/exercices", {
    fallbackData: [],
  });
  const [hideBody, setHideBody] = useState(false);
  const handlerBodyComposition = () => {
    setHideBody(!hideBody);
  };
  const handlerAddTraining = () => {
    console.log("clicked...");
  };
  console.log("exercice list from serachExercice:", exercicesList);
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
                    onClick={handlerAddTraining}
                    onHandlerBodyComposition={() => handlerBodyComposition()}
                  />
                  {hideBody && (
                    <div>
                      <BodyComposition name={name} muscles={[{ muscle }]} />

                      <BodyCompositionPosterior
                        name={name}
                        muscles={[{ muscle }]}
                      />
                    </div>
                  )}
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
