import React, { useState } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar/Navbar";
import { useSession, signIn, signOut } from "next-auth/react";
import InputCart from "@/components/InputCart/InputCart";
import useSWR from "swr";
import styled from "styled-components";

export default function DetaillPage() {
  const router = useRouter();
  const [hideResult, setHideResult] = useState(false);
  const { id } = router.query;
  const { data: session } = useSession();
  const { data: exercice } = useSWR(`/api/exercices/${id}`);

  async function addExerciceInput(exerciceInput) {
    const response = await fetch(`/api/exercices/${id}?id=${id}`, {
      method: "POST",
      body: JSON.stringify(exerciceInput),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      router.push("/Plan");
      console.log("put response from detaillPage:", response);
    } else {
      console.error(response.status);
    }
  }
  console.log("exercice from id detaill page:", exercice);
  if (session) {
    return (
      <>
        <Navbar />
        <p>id:{id}</p>
        <InputCart
          name={exercice?.name}
          type={exercice?.type}
          muscle={exercice?.muscle}
          equipment={exercice?.equipment}
          onSubmit={addExerciceInput}
          hideResult={hideResult}
          setHideResult={setHideResult}
        />
        {hideResult && (
          <ContainerCart>
            {exercice?.result.map((element) => {
              return (
                <ContainerCartItems key={element._id}>
                  <CartItems>date: {element.createDate.slice(0, 10)}</CartItems>
                  <CartItems>weigth: {element.weight}</CartItems>
                  <CartItems>repetition: {element.reps}</CartItems>
                  <CartItems>serie: {element.serie}</CartItems>
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
