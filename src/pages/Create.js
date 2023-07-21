import React from "react";

import { useSession, signIn, signOut } from "next-auth/react";
import CreateExercice from "@/components/CreateExercice/CreateExercice";

export default function Create() {
  const { data: session } = useSession();
  if (session) {
    return <CreateExercice />;
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
