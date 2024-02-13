import React from "react";
import classes from "./homePagePart1.module.css";

const HomePagePart1 = () => {
  return (
    <section className={classes.container}>
      <div className={classes.card}>
        <p>Full Body Training</p>
      </div>
      <div className={classes.card}>
        <p>Personal Adaptation</p>
      </div>
      <div className={classes.card}>
        <p>Create Your Own Plan</p>
      </div>
      <div className={classes.card}>
        <p>Monitor Your Progress</p>
      </div>
    </section>
  );
};

export default HomePagePart1;
