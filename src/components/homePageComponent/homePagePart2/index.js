import React from "react";
import classes from "./homePagePart2.module.css";
import AddedCart from "@/components/AddedCart/AddedCart";

const HomePagePart2 = () => {
  return (
    <section className={classes.container}>
      <h1>Choose Your Equipment</h1>
      <div className={classes.cardContainer}>
        <AddedCart
          muscle={"chest"}
          name={"Bench Press"}
          equipment={"Barbell"}
          onDelete={() => {
            console.log("hello");
          }}
          linkedId={"Info & Add"}
          image={"/fitness-app.jpg"}
        />
        <AddedCart
          muscle={"chest"}
          name={"Bench Press"}
          equipment={"Dumbbell"}
          onDelete={() => {
            console.log("hello");
          }}
          linkedId={"Info & Add"}
          image={"/fitness-app.jpg"}
        />
        <AddedCart
          muscle={"chest"}
          name={"Bench Press"}
          equipment={"Cable"}
          onDelete={() => {
            console.log("hello");
          }}
          linkedId={"Info & Add"}
          image={"/fitness-app.jpg"}
        />
        <AddedCart
          muscle={"chest"}
          name={"Bench Press"}
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

export default HomePagePart2;
