import React from "react";
import classes from "./layout.module.css";
import Navbar from "@/components/Navbar/Navbar";

import { useSession, signIn, signOut } from "next-auth/react";

export default function layout(props) {
  return (
    <>
      <Navbar onClick={() => signOut()} />
      <main className={classes.main}>{props.children}</main>
    </>
  );
}
