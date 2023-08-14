import React, { useState } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar/Navbar";
import { useSession, signIn, signOut } from "next-auth/react";
import InputCart from "@/components/InputCart/InputCart";
import useSWR from "swr";
import styled from "styled-components";
import { uid } from "uid";
import Image from "next/image";

export default function DetaillPage({ setTrainingAdded, trainingAdded }) {
  const router = useRouter();
  const [hideResult, setHideResult] = useState(false);
  const { id } = router.query;
  const { data: session } = useSession();
  const { data: exercice, isLoading } = useSWR(`/api/exercices/${id}`);

  function getSerie(key) {
    const pourcentageRep = {
      1: 10,
      3: 9,
      5: 8.5,
      10: 7.5,
      20: 6,
    };

    return pourcentageRep[key];
  }

  async function addExerciceInput(exerciceInput) {
    const response = await fetch(`/api/exercices/${id}?id=${id}`, {
      method: "POST",
      body: JSON.stringify(exerciceInput),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let newDate = new Date().toLocaleString();
    let exerciceInputWeightToNumber = +exerciceInput.weight;
    let exerciceInputRepsToNumber = +exerciceInput.reps;
    let exerciceInputserieTarget = +exerciceInput.serieTarget;
    const targetSerie = getSerie(exerciceInputserieTarget);

    let a = exerciceInputWeightToNumber * exerciceInputRepsToNumber;
    let b = a * 0.0333;
    let rm = b + exerciceInputWeightToNumber;
    let c = rm / 10;
    let targetSerieFinal = c * targetSerie;
    let d = targetSerieFinal / 10;
    let adaptationCalcul = Math.round(d * 10.5);
    console.log(
      "adaptation calcul from detaill page post req:",
      adaptationCalcul
    );

    if (response.ok) {
      setTrainingAdded(
        trainingAdded.map((training) =>
          training._id === id
            ? {
                ...training,
                result: [
                  ...training.result,
                  {
                    id: uid(),
                    weight: exerciceInputWeightToNumber,
                    reps: exerciceInputRepsToNumber,
                    createDate: newDate,
                    repMax: rm,
                    adaptation: adaptationCalcul,
                    serieTarget: exerciceInputserieTarget,
                  },
                ],
              }
            : training
        )
      );
      router.push("/Plan");
      console.log("put response from detaillPage:", response);
    } else {
      console.error(response.status);
    }
  }

  console.log("exercice from id detaill page:", exercice);
  if (isLoading) {
    return (
      <div className="text-center d-flex flex-column justify-content-center">
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
        <Navbar />
        <div className="text-center d-flex justify-content-center">
          <InputCart
            name={exercice?.name}
            type={exercice?.type}
            muscle={exercice?.muscle}
            equipment={exercice?.equipment}
            onSubmit={addExerciceInput}
            hideResult={hideResult}
            setHideResult={setHideResult}
          />
        </div>
        {hideResult && (
          <ContainerCart>
            {exercice?.result.map((element) => {
              return (
                <ContainerCartItems key={element._id}>
                  <CartItems>date: {element.createDate.slice(0, 10)}</CartItems>
                  <CartItems>weigth: {element.weight}kg</CartItems>
                  <CartItems>repetition: {element.reps}</CartItems>
                </ContainerCartItems>
              );
            })}
          </ContainerCart>
        )}
      </>
    );
  }
  return (
    <>
      <div
        className="d-flex flex-column card mx-auto mt-5 p-2"
        style={{ width: "30%" }}
      >
        <h1 className="text-center">Fitness App</h1>

        <h4 className="text-center"> Not signed in </h4>
        <p className="text-center">
          to have access to your account, first sign in!
        </p>

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
const ContainerCart = styled.div`
  background-color: #526d82;
  color: #ffea20;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  border: 1px solid black;
  margin: 1rem;
  padding: 1rem;
  overflow: hidden;
  overflow-x: scroll;
  border-radius: 1rem;
  align-content: center;
  align-items: center;
`;
const ContainerCartItems = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border: 1px solid white;
  border-radius: 1rem;
  box-shadow: 5px 5px 5px #331d2c;
  align-items: flex-start;
  margin: 0.5rem;
  padding: 0.5rem;
`;
const CartItems = styled.p`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  border: 1px solid white;
  box-shadow: 5px 5px 5px #331d2c;

  border-radius: 1rem;
  padding: 0.5rem;
  margin: 0.5rem;
`;
