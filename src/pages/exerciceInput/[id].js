import React, { useState } from "react";
import { useRouter } from "next/router";

import { useSession, signIn, signOut } from "next-auth/react";

import InputCart from "@/components/InputCart/InputCart";
import ContainerResultCart from "@/components/ContainerResultCart/ContainerResultCart";
import GraphiqueFilter from "@/components/GraphiqueFilter/GraphiqueFilter";
import useSWR from "swr";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export default function DetaillPage() {
  const router = useRouter();
  const [hideResult, setHideResult] = useState(false);
  const [filteredYear, setFilteredYear] = useState("2023");
  const { id } = router.query;
  const { data: session } = useSession();
  const { data: exercice, isLoading } = useSWR(`/api/exercices/${id}`);

  console.log("exercice from id api:", exercice);
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
    console.log("exercice from detaill page:", exercice);
    if (response.ok) {
      console.log("put response from detaillPage:", response);
      router.reload();
    } else {
      console.error(response.status);
    }
  }

  console.log("exercice from id detaill page:", exercice);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredGraphique = exercice?.result?.filter(
    (element) => element.createDate.slice(0, 4) === filteredYear
  );

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
        <div className="d-flex flex-column align-items-center text-center mt-1 p-2">
          <Link href={"/Plan"}>Back to the plan</Link>
          <InputCart
            name={exercice?.name}
            image={exercice?.images?.[0]}
            muscle={exercice?.muscle}
            equipment={exercice?.equipment}
            onSubmit={addExerciceInput}
            hideResult={hideResult}
            setHideResult={setHideResult}
          />
          {exercice?.result?.length === 0 ? (
            <p className="text-danger">...waiting for info</p>
          ) : (
            <ContainerResultCart>
              {exercice?.result?.map((element, index) => {
                if (index === exercice.result.length - 1) {
                  return (
                    <div key={element?._id}>
                      <h2 className="m-1">next training:</h2>
                      <p>
                        weight:{" "}
                        <span className="text-info">
                          {element?.adaptation}kg
                        </span>
                      </p>
                      <p>
                        repetition:{" "}
                        <span className="text-info">{element.serieTarget}</span>
                      </p>
                    </div>
                  );
                }
              })}
            </ContainerResultCart>
          )}
        </div>
        {hideResult && (
          <div className="d-flex flex-column justify-content-center  p-2">
            <GraphiqueFilter
              selected={filteredYear}
              onChangeFilter={filterChangeHandler}
            />
          </div>
        )}
        {hideResult && (
          <ContainerCart>
            <GraphiqueItems>
              {filteredGraphique?.map((element) => {
                return (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      margin: "1rem",
                    }}
                    key={element._id}
                  >
                    <ChartBarLabel>
                      max: {Math.round(element.repMax)}kg
                    </ChartBarLabel>
                    <ChartBar>
                      <ChartBarFill
                        style={{
                          height: `${Math.round(
                            (Number(element.repMax) /
                              Number(exercice.maxValue)) *
                              100
                          )}%`,
                        }}
                      />
                    </ChartBar>
                    <ChartBarLabel>
                      {element.createDate.slice(0, 10)}
                    </ChartBarLabel>
                  </div>
                );
              })}
            </GraphiqueItems>
          </ContainerCart>
        )}

        {hideResult && (
          <ContainerCart>
            {filteredGraphique?.map((element) => {
              return (
                <ContainerCartItems key={element._id}>
                  <CartItems>{element.createDate.slice(0, 10)}</CartItems>
                  <CartItems>
                    {element.reps} x {element.weight}kg
                  </CartItems>
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
  background: linear-gradient(0.25turn, #080101, #ffff09, #080101);
  color: #ffea20;
  display: flex;
  justify-content: start;
  flex-direction: row;
  border: 1px solid black;
  margin: 1rem;
  padding: 1rem;
  overflow: hidden;
  overflow-x: scroll;
  width: 100%;
  border-radius: 1rem;
  align-content: center;
  align-items: center;
  position: relative;
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
  color: white;
  background-color: rgb(66, 55, 55);
`;
const GraphiqueItems = styled.div`
  padding: 0.5rem;
  border-radius: 12px;
  background-color: rgb(66, 55, 55);
  text-align: center;
  display: flex;
  justify-content: space-around;
  height: 15rem;
`;
const ChartBar = styled.div`
  height: 100%;
  width: 100%;
  border: 1px solid #313131;
  border-radius: 12px;
  background-color: #ffff00;
  opacity: 0.33;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
const ChartBarFill = styled.div`
  background-color: #952323;
  width: 100%;
  transition: all 0.3s ease-out;
`;
const ChartBarLabel = styled.div`
  font-weight: bold;
  font-size: 0.5rem;
  text-align: center;
  color: white;
  display: flex;
  max-width: 1.5rem;
`;
