import React, { useState } from "react";

import { useSession, signIn, signOut } from "next-auth/react";
import useSWR from "swr";
import { useRouter } from "next/router";

import ExerciceCart from "@/components/ExerciceCart/ExerciceCart";
import SearchExerciceFilter from "@/components/SearchExerciceFilter/SearchExerciceFilter";
import Image from "next/image";
import Link from "next/link";

export default function SearchExercice() {
  const { data: session } = useSession();

  const router = useRouter();
  const [filteredEquipment, setfilteredEquipment] = useState("barbell");

  const { data: exercicesList, isLoading } = useSWR("/api/exercices", {
    fallbackData: [],
  });
  console.log("exerciceList from search page:", exercicesList);

  const filterChangeHandler = (selectedEquiment) => {
    setfilteredEquipment(selectedEquiment);
  };
  const filteredEquipmentExercices = exercicesList.filter(
    (element) => element.equipment === filteredEquipment
  );
  async function handlerAddTraining(id, training) {
    let filteredId = exercicesList.find((element) => element._id === id);
    if (training === "training1") {
      filteredId.trainings = "training1";
    }
    if (training === "training2") {
      filteredId.trainings = "training2";
    }
    if (training === "training3") {
      filteredId.trainings = "training3";
    }
    if (training === "training4") {
      filteredId.trainings = "training4";
    }
    const response = await fetch("/api/plan", {
      method: "POST",
      mode: "cors",
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
  const filteredChestExercice = filteredEquipmentExercices.filter(
    (element) => element.muscle === "chest"
  );
  const filteredUpperBackExercice = filteredEquipmentExercices.filter(
    (element) => element.muscle === "upper back"
  );
  const filteredLowerBackExercice = filteredEquipmentExercices.filter(
    (element) => element.muscle === "lower back"
  );
  const filteredLegsExercice = filteredEquipmentExercices.filter(
    (element) => element.muscle === "legs"
  );

  if (session) {
    return (
      <>
        <h2 className="text-center mt-1 p-2">search exercices</h2>
        <SearchExerciceFilter
          selected={filteredEquipment}
          onChangeFilter={filterChangeHandler}
        />
        <h3 className="text-center">Chest</h3>
        <div className="searchExercicesDiv">
          {filteredChestExercice.map(
            ({ name, muscle, equipment, _id, images }) => {
              return (
                <div key={_id} className="mt-4">
                  {session?.user?.name === "thomas jubin" && (
                    <div className="text-center">
                      <Link href={`/exercice/${_id}`}>
                        <p>Add Foto</p>
                      </Link>
                    </div>
                  )}
                  <ExerciceCart
                    name={name}
                    image={images?.[0]}
                    muscle={muscle}
                    equipment={equipment}
                    training1={() => handlerAddTraining(_id, "training1")}
                    training2={() => handlerAddTraining(_id, "training2")}
                    training3={() => handlerAddTraining(_id, "training3")}
                    training4={() => handlerAddTraining(_id, "training4")}
                  />
                </div>
              );
            }
          )}
        </div>
        <h3 className="text-center">Upper Back</h3>
        <div className="searchExercicesDiv">
          {filteredUpperBackExercice.map(
            ({ name, muscle, equipment, _id, images }) => {
              return (
                <div key={_id} className="mt-4">
                  {session?.user?.name === "thomas jubin" && (
                    <div className="text-center">
                      <Link href={`/exercice/${_id}`}>
                        <p>Add Foto</p>
                      </Link>
                    </div>
                  )}
                  <ExerciceCart
                    name={name}
                    image={images?.[0]}
                    muscle={muscle}
                    equipment={equipment}
                    training1={() => handlerAddTraining(_id, "training1")}
                    training2={() => handlerAddTraining(_id, "training2")}
                    training3={() => handlerAddTraining(_id, "training3")}
                    training4={() => handlerAddTraining(_id, "training4")}
                  />
                </div>
              );
            }
          )}
        </div>
        <h3 className="text-center">Lower Back</h3>
        <div className="searchExercicesDiv">
          {filteredLowerBackExercice.map(
            ({
              name,
              onClick,

              muscle,
              equipment,
              _id,
              images,
            }) => {
              return (
                <div key={_id} className="mt-4">
                  {session?.user?.name === "thomas jubin" && (
                    <div className="text-center">
                      <Link href={`/exercice/${_id}`}>
                        <p>Add Foto</p>
                      </Link>
                    </div>
                  )}
                  <ExerciceCart
                    name={name}
                    image={images?.[0]}
                    muscle={muscle}
                    equipment={equipment}
                    training1={() => handlerAddTraining(_id, "training1")}
                    training2={() => handlerAddTraining(_id, "training2")}
                    training3={() => handlerAddTraining(_id, "training3")}
                    training4={() => handlerAddTraining(_id, "training4")}
                  />
                </div>
              );
            }
          )}
        </div>
        <h3 className="text-center">Legs</h3>
        <div className="searchExercicesDiv">
          {filteredLegsExercice.map(
            ({
              name,
              onClick,

              muscle,
              equipment,
              _id,
              images,
            }) => {
              return (
                <div key={_id} className="mt-4">
                  {session?.user?.name === "thomas jubin" && (
                    <div className="text-center">
                      <Link href={`/exercice/${_id}`}>
                        <p>Add Foto</p>
                      </Link>
                    </div>
                  )}
                  <ExerciceCart
                    name={name}
                    image={images?.[0]}
                    muscle={muscle}
                    equipment={equipment}
                    training1={() => handlerAddTraining(_id, "training1")}
                    training2={() => handlerAddTraining(_id, "training2")}
                    training3={() => handlerAddTraining(_id, "training3")}
                    training4={() => handlerAddTraining(_id, "training4")}
                  />
                </div>
              );
            }
          )}
        </div>
      </>
    );
  }
  if (exercicesList.length === 0) {
    return (
      <>
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
