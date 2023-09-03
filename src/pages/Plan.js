import React from "react";

import useSWR from "swr";
import Navbar from "@/components/Navbar/Navbar";
import Link from "next/link";
import AddedCart from "@/components/AddedCart/AddedCart";
import { useRouter } from "next/router";
import Image from "next/image";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Plan() {
  const { data: userExercicesList, isLoading } = useSWR("/api/plan", {
    fallbackData: [],
  });
  const trainingUnit1 = userExercicesList?.training1;
  const trainingUnit2 = userExercicesList?.training2;
  const trainingUnit3 = userExercicesList?.training3;
  const trainingUnit4 = userExercicesList?.training4;
  const router = useRouter();
  const { data: session } = useSession();

  /* async function handleDelete(obj) {
    const response = await fetch(`/api/exercices/${obj._id}`, {
      method: "PUT",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      await response.json();
      router.reload();
    } else {
      console.error(`Error:${response.status}`);
    }
  } */

  async function handleDelete(id) {
    await fetch(`/api/exercices/${id}`, {
      method: "DELETE",
    });
    router.reload();
  }

  if (session) {
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
    if (
      userExercicesList.training1.length === 0 &&
      userExercicesList.training2.length === 0 &&
      userExercicesList.training3.length === 0 &&
      userExercicesList.training4.length === 0
    ) {
      return (
        <>
          <Navbar />
          <h2 className="text-center">training 1:</h2>
          <div className="text-center d-flex flex-column justify-content-center">
            <h4 className="m-2 text-center">
              <Link className="text-decoration-none" href="/SearchExercice">
                ... waiting for new exercice
              </Link>
            </h4>
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
    if (userExercicesList) {
      return (
        <>
          <Navbar onClick={() => signOut()} />
          <h2 className="text-center">training 1:</h2>
          <div className="searchExercicesDiv">
            {trainingUnit1?.map((element) => {
              return (
                <div key={element._id} className="text-center">
                  <AddedCart
                    name={element.name}
                    image={element.images?.[0]}
                    muscle={element.muscle}
                    equipment={element.equipment}
                    onDelete={() => handleDelete(element._id)}
                    linkedId={
                      <Link
                        className="text-white text-decoration-none"
                        href={`/exerciceInput/${element._id}`}
                      >
                        Info & Add
                      </Link>
                    }
                  />
                </div>
              );
            })}
          </div>
          <h2 className="text-center">training 2:</h2>
          <div className="searchExercicesDiv">
            {trainingUnit2?.map((element) => {
              return (
                <div key={element._id} className="text-center">
                  <AddedCart
                    name={element.name}
                    image={element.images?.[0]}
                    muscle={element.muscle}
                    equipment={element.equipment}
                    onDelete={() => handleDelete(element._id)}
                    linkedId={
                      <Link
                        className="text-white text-decoration-none"
                        href={`/exerciceInput/${element._id}`}
                      >
                        Info & Add
                      </Link>
                    }
                  />
                </div>
              );
            })}
          </div>
          <h2 className="text-center">training 3:</h2>
          <div className="searchExercicesDiv">
            {trainingUnit3?.map((element) => {
              return (
                <div key={element._id} className="text-center">
                  <AddedCart
                    name={element.name}
                    image={element.images?.[0]}
                    muscle={element.muscle}
                    equipment={element.equipment}
                    onDelete={() => handleDelete(element._id)}
                    linkedId={
                      <Link
                        className="text-white text-decoration-none"
                        href={`/exerciceInput/${element._id}`}
                      >
                        Info & Add
                      </Link>
                    }
                  />
                </div>
              );
            })}
          </div>
          <h2 className="text-center">training 4:</h2>
          <div className="searchExercicesDiv">
            {trainingUnit4?.map((element) => {
              return (
                <div key={element._id} className="text-center">
                  <AddedCart
                    name={element.name}
                    image={element.images?.[0]}
                    muscle={element.muscle}
                    equipment={element.equipment}
                    onDelete={() => handleDelete(element._id)}
                    linkedId={
                      <Link
                        className="text-white text-decoration-none"
                        href={`/exerciceInput/${element._id}`}
                      >
                        Info & Add
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
