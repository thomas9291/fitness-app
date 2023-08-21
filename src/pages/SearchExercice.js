import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import useSWR from "swr";
import { useRouter } from "next/router";

import Navbar from "@/components/Navbar/Navbar";
import ExerciceCart from "@/components/ExerciceCart/ExerciceCart";

import Image from "next/image";
import Link from "next/link";

export default function SearchExercice() {
  const { data: session } = useSession();
  const router = useRouter();
  const { data: exercicesList, isLoading } = useSWR("/api/exercices", {
    fallbackData: [],
  });
  console.log("exerciceList from search page:", exercicesList);
  /*  const [trainingAdded, setTrainingAdded] = useState([]); */
  /* onst [trainingAddedWeek2, setTrainingAddedWeek2] = useState([]); */

  async function handlerAddTraining(id) {
    const filteredId = exercicesList.filter((element) => element._id === id);
    console.log("filter id from search page:", filteredId);
    /*  setTrainingAdded(filteredId); */
    const response = await fetch("/api/plan", {
      method: "POST",
      body: JSON.stringify({ filteredId }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      console.error(`There was an error: ${response.status}`);
    } else {
      router.push("/Plan");
    }
  }

  /* console.log("trainingAdded from search page:", trainingAdded); */
  /* console.log("trainingAddedWeek2 from search page:", trainingAddedWeek2); */
  const filteredChestExercice = exercicesList.filter(
    (element) => element.muscle === "chest"
  );
  const filteredUpperBackExercice = exercicesList.filter(
    (element) => element.muscle === "upper back"
  );
  const filteredLowerBackExercice = exercicesList.filter(
    (element) => element.muscle === "lower back"
  );
  const filteredLegsExercice = exercicesList.filter(
    (element) => element.muscle === "legs"
  );

  if (exercicesList.length === 0) {
    return (
      <>
        <Navbar onClick={() => signOut} />

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
        <h2 className="text-center">search exercices</h2>
        <div className="searchExercicesDiv">
          <h3 className="position-absolute top-0 start-50">Chest</h3>
          {filteredChestExercice.map(
            ({ name, onClick, type, muscle, equipment, _id, images }) => {
              return (
                <div key={_id} className="m-2">
                  {session?.user?.name === "thomas jubin" && (
                    <div className="text-center">
                      <Link href={`/exercice/${_id}`}>
                        <p>Add Foto</p>
                      </Link>
                    </div>
                  )}
                  <ExerciceCart
                    name={name}
                    type={type}
                    image={images?.[0]}
                    muscle={muscle}
                    equipment={equipment}
                    onClick={() => handlerAddTraining(_id)}
                    /*  week2={() => handlerAddTrainingWeek2(_id)} */
                  />
                </div>
              );
            }
          )}
        </div>
        <div className="searchExercicesDiv">
          <h3 className="position-absolute top-0 start-50">Upper Back</h3>
          {filteredUpperBackExercice.map(
            ({ name, onClick, type, muscle, equipment, _id, images }) => {
              return (
                <div key={_id} className="m-2">
                  {session?.user?.name === "thomas jubin" && (
                    <div className="text-center">
                      <Link href={`/exercice/${_id}`}>
                        <p>Add Foto</p>
                      </Link>
                    </div>
                  )}
                  <ExerciceCart
                    name={name}
                    type={type}
                    image={images?.[0]}
                    muscle={muscle}
                    equipment={equipment}
                    onClick={() => handlerAddTraining(_id)}
                    /*  week2={() => handlerAddTrainingWeek2(_id)} */
                  />
                </div>
              );
            }
          )}
        </div>
        <div className="searchExercicesDiv">
          <h3 className="position-absolute top-0 start-50">Lower Back</h3>
          {filteredLowerBackExercice.map(
            ({ name, onClick, type, muscle, equipment, _id, images }) => {
              return (
                <div key={_id} className="m-2">
                  {session?.user?.name === "thomas jubin" && (
                    <div className="text-center">
                      <Link href={`/exercice/${_id}`}>
                        <p>Add Foto</p>
                      </Link>
                    </div>
                  )}
                  <ExerciceCart
                    name={name}
                    type={type}
                    image={images?.[0]}
                    muscle={muscle}
                    equipment={equipment}
                    onClick={() => handlerAddTraining(_id)}
                    /*  week2={() => handlerAddTrainingWeek2(_id)} */
                  />
                </div>
              );
            }
          )}
        </div>
        <div className="searchExercicesDiv">
          <h3 className="position-absolute top-0 start-50">Legs</h3>
          {filteredLegsExercice.map(
            ({ name, onClick, type, muscle, equipment, _id, images }) => {
              return (
                <div key={_id} className="m-2">
                  {session?.user?.name === "thomas jubin" && (
                    <div className="text-center">
                      <Link href={`/exercice/${_id}`}>
                        <p>Add Foto</p>
                      </Link>
                    </div>
                  )}
                  <ExerciceCart
                    name={name}
                    type={type}
                    image={images?.[0]}
                    muscle={muscle}
                    equipment={equipment}
                    onClick={() => handlerAddTraining(_id)}
                    /*  week2={() => () => handlerAddTrainingWeek2(_id)} */
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
