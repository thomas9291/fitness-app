import React from "react";
import classes from "./homePagePart4.module.css";
import AddedCart from "@/components/AddedCart/AddedCart";

const HomePagePart4 = () => {
  return (
    <section className={classes.container}>
      <h1>Monitor Your Progress</h1>
      <div className={classes.cardContainer}>
        <AddedCart
          muscle={"chest"}
          name={"Bench press"}
          equipment={"Dumbbell"}
          onDelete={() => {
            console.log("hello");
          }}
          linkedId={"Info & Add"}
          image={"/fitness-app.jpg"}
        />
      </div>
      <div className={classes.ContainerCart}>
        <div className={classes.GraphiqueItems}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "1rem",
            }}
          >
            <div className={classes.ChartBarLabel}>max: 30kg</div>
            <div className={classes.ChartBar}>
              <div
                className={classes.ChartBarFill}
                style={{
                  height: "10%",
                }}
              />
            </div>
            <div className={classes.ChartBarLabel}>
              2023.
              <br />
              04.10
            </div>
          </div>
        </div>
        <div className={classes.GraphiqueItems}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "1rem",
            }}
          >
            <div className={classes.ChartBarLabel}>max: 38kg</div>
            <div className={classes.ChartBar}>
              <div
                className={classes.ChartBarFill}
                style={{
                  height: "15%",
                }}
              />
            </div>
            <div className={classes.ChartBarLabel}>
              2023.
              <br />
              04.17
            </div>
          </div>
        </div>
        <div className={classes.GraphiqueItems}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "1rem",
            }}
          >
            <div className={classes.ChartBarLabel}>max: 40kg</div>
            <div className={classes.ChartBar}>
              <div
                className={classes.ChartBarFill}
                style={{
                  height: "20%",
                }}
              />
            </div>
            <div className={classes.ChartBarLabel}>
              2023.
              <br />
              04.23
            </div>
          </div>
        </div>
        <div className={classes.GraphiqueItems}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "1rem",
            }}
          >
            <div className={classes.ChartBarLabel}>max: 44kg</div>
            <div className={classes.ChartBar}>
              <div
                className={classes.ChartBarFill}
                style={{
                  height: "25%",
                }}
              />
            </div>
            <div className={classes.ChartBarLabel}>
              2023.
              <br />
              05.03
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePagePart4;
