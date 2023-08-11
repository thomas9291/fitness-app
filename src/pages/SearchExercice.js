import React from "react";
import useSWR from "swr";
import { useRouter } from "next/router";

import { useSession, signIn, signOut } from "next-auth/react";
import Navbar from "@/components/Navbar/Navbar";
import ExerciceCart from "@/components/ExerciceCart/ExerciceCart";
import Image from "next/image";

export default function SearchExercice({ setTrainingAdded, trainingAdded }) {
  const { data: session } = useSession();
  const router = useRouter();
  const { data: exercicesList, isLoading } = useSWR("/api/exercices", {
    fallbackData: [],
  });
  const { push } = router;
  const handlerAddTraining = (id) => {
    const filteredId = exercicesList.filter((element) => element._id === id);
    setTrainingAdded([...trainingAdded, ...filteredId]);
    push("/Plan");
  };
  if (exercicesList.length === 0) {
    return (
      <>
        <Navbar />

        <div className="text-center d-flex flex-column justify-content-center">
          <h2>search exercices</h2>
          <p> ...waiting for exercices</p>
          <Image
            src="https://plus.unsplash.com/premium_photo-1672784160207-03d75e2b83a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zml0bmVzcyUyMGdpcmx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
            alt="fitness girl"
            width={200}
            height={200}
            style={{
              borderRadius: "1rem",
              boxShadow: "10px 5px 5px grey",
              margin: "auto",
            }}
          />
        </div>
      </>
    );
  }
  if (isLoading) {
    return (
      <div className="text-center d-flex justify-content-center">
        <p>...is loading</p>
        <Image
          src="https://plus.unsplash.com/premium_photo-1672784160207-03d75e2b83a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zml0bmVzcyUyMGdpcmx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
          alt="fitness girl"
          width={200}
          height={200}
          style={{
            borderRadius: "1rem",
            boxShadow: "10px 5px 5px grey",
            margin: "auto",
          }}
        />
      </div>
    );
  }
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
