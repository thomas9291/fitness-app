import React from "react";

import { useSession, signIn, signOut } from "next-auth/react";
import CreateExercice from "@/components/CreateExercice/CreateExercice";
import { useRouter } from "next/router";

export default function Create() {
  const { data: session } = useSession();

  const router = useRouter();
  const { push } = router;

  async function addExercice(exercice) {
    const response = await fetch("/api/exercices", {
      method: "POST",
      body: JSON.stringify(exercice),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      push("/SearchExercice");
    } else {
      console.error(response.status);
    }
  }

  if (session?.user?.email === "thomas.jubinsolis@gmail.com") {
    return (
      <>
        <h2 className="text-center mt-2">Create a exercice</h2>

        <CreateExercice onSubmit={addExercice} />
      </>
    );
  }

  return (
    <>
      <div
        className="d-flex flex-column card mx-auto mt-5 p-2"
        style={{ width: "30%" }}
      >
        <h4 className="text-center">
          {" "}
          you are not the admin, you cannot have access to this page
        </h4>
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
