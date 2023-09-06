import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar/Navbar";
import { useSession, signIn, signOut } from "next-auth/react";

export default function HomePage() {
  return (
    <>
      <Navbar onClick={() => signOut()} />
      <h2>bulding process</h2>
    </>
  );
}
