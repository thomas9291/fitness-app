import React from "react";
import classes from "./homePagePart2.module.css";
import Image from "next/image";

const HomePagePart2 = () => {
  return (
    <section className={classes.container}>
      <h1>Choose Your Equipment</h1>
      <div className={classes.cardContainer}>
        <div className={classes.cards}>
          <h2>Cable</h2>
          <div className={classes.imgContainer}>
            <Image
              src={"/fitness-cable-machine.jpg"}
              height={200}
              width={200}
              alt="image"
            />
          </div>
        </div>
        <div className={classes.cards}>
          <h2>Barbell</h2>
          <div className={classes.imgContainer}>
            <Image src={"/barbel.jpg"} height={200} width={200} alt="image" />
          </div>
        </div>
        <div className={classes.cards}>
          <h2>dumbbell</h2>
          <div className={classes.imgContainer}>
            <Image
              src={"/dumbbell.avif"}
              height={200}
              width={200}
              alt="image"
            />
          </div>
        </div>
        <div className={classes.cards}>
          <h2>Machine</h2>
          <div className={classes.imgContainer}>
            <Image
              src={"/fitness-machine.jpg"}
              height={200}
              width={200}
              alt="image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePagePart2;
