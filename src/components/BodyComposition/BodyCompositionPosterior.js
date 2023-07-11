import React from "react";
import Model from "react-body-highlighter";
import classes from "./BodyComposition.module.css";

const BodyCompositionPosterior = ({ name, muscles }) => {
  const data = [
    {
      name: /* "Bench Press" */ name,
      muscles: /* ["chest", "triceps", "front-deltoids"] */ muscles,
    },
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
    <div /* className={classes.container} */ className="d-block w-100">
      <Model
        type={{ values: "anterior" }}
        data={data}
        onClick={handleClick}
        style={{ width: "10rem", height: "10rem", margin: "1rem " }}
      />
    </div>
  );
};

export default BodyCompositionPosterior;
