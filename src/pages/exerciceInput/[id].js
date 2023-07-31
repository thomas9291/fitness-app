import React from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar/Navbar";
import { useSession, signIn, signOut } from "next-auth/react";
import InputCart from "@/components/InputCart/InputCart";

export default function DetaillPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data: session } = useSession();
  /* const { data: exercice } = useSWR(`/api/exercices/${id}`); */

  async function addExerciceInput(exerciceInput) {
    const response = await fetch(`/api/inputs/${id}?id=${id}`, {
      method: "POST",
      body: JSON.stringify(exerciceInput),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      router.push("/SearchExercice");
      console.log("put response from detaillPage:", response);
    } else {
      console.error(response.status);
    }
  }
  if (session) {
    return (
      <>
        <Navbar />
        <p>id:{id}</p>

        <InputCart onSubmit={addExerciceInput} />
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
