import React from "react";
import classes from "./homePagePart3.module.css";
import AddedCart from "@/components/AddedCart/AddedCart";

const HomePagePart3 = () => {
  return (
    <section className={classes.container}>
      <h1>Choose Your Trainings Plans</h1>
      <div className={classes.trainingHeader}>Trainings 1</div>
      <div className={classes.cardContainer}>
        <AddedCart
          muscle={"chest"}
          name={"Dips"}
          equipment={"Machine"}
          onDelete={() => {
            console.log("hello");
          }}
          linkedId={"Info & Add"}
          image={"/fitness-app.jpg"}
        />
        <AddedCart
          muscle={"Upper Back"}
          name={"Rowing"}
          equipment={"Cable"}
          onDelete={() => {
            console.log("hello");
          }}
          linkedId={"Info & Add"}
          image={"/fitness-app.jpg"}
        />
        <AddedCart
          muscle={"Lower Back"}
          name={"Dead Lift"}
          equipment={"Barbell"}
          onDelete={() => {
            console.log("hello");
          }}
          linkedId={"Info & Add"}
          image={"/fitness-app.jpg"}
        />
        <AddedCart
          muscle={"Legs"}
          name={"Leg Press"}
          equipment={"Machine"}
          onDelete={() => {
            console.log("hello");
          }}
          linkedId={"Info & Add"}
          image={"/fitness-app.jpg"}
        />
      </div>
    </section>
  );
};

export default HomePagePart3;
