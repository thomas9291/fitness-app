import React from "react";
import classes from "./layout.module.css";
import Navbar from "@/components/Navbar/Navbar";

export default function layout(props) {
  return (
    <>
      <Navbar />
      <main className={classes.main}>{props.children}</main>
    </>
  );
}
