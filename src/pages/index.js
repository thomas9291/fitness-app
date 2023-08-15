import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import { useSession, signIn, signOut } from "next-auth/react";

export default function HomePage() {
  return (
    <>
      <Navbar onClick={() => signOut()} />
      <div className="d-flex flex-column justify-content-center flex-wrap align-content-center ">
        <h1>hello home</h1>
        <p>the page is under construction...</p>
      </div>
      {/* <ExerciceCart onSubmit={AddResultCart} /> */}
    </>
  );
}
