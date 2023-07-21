import React from "react";

import { useSession, signIn, signOut } from "next-auth/react";

export default function SearchExercice() {
  const { data: session } = useSession();
  if (session) {
    return <h2>search exercices</h2>;
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
