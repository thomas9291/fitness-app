import React from "react";
import classes from "./ContainerResultCart.module.css";

export default function ContainerResultCart({ children }) {
  return <div className={classes.container}>{children}</div>;
}
