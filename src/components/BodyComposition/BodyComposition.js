import React from "react";
import Model from "react-body-highlighter";
import classes from "./BodyComposition.module.css";

const BodyComposition = () => {
  const data = [
    {
      name: "Bench Press",
      muscles: ["chest", "triceps", "front-deltoids"],
    },
    { name: "Push Ups", muscles: ["chest"] },
  ];

  const handleClick = React.useCallback(({ muscle, data }) => {
    const { exercises, frequency } = data;

    alert(
      `You clicked the ${muscle}! You've worked out this muscle ${frequency} times through the following exercises: ${JSON.stringify(
        exercises
      )}`
    );
  }, []);

  return (
    <div className={classes.container}>
      <Model
        /* type={{ values: "anterior" }} */
        data={data}
        onClick={handleClick}
        style={{ width: "10rem", height: "10rem", padding: "5rem" }}
      />
    </div>
  );
};

export default BodyComposition;
