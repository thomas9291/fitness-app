import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

import ExerciceCart from "@/components/ExerciceCart/ExerciceCart";

export default function HomePage() {
  const { data: session } = useSession();

  async function AddResultCart(result) {
    await fetch("/api/exercices", {
      method: "POST",
      body: JSON.stringify(result),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  if (session) {
    return (
      <>
        <ExerciceCart onSubmit={AddResultCart} />
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
