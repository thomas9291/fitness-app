import React, { useState } from "react";
import classes from "./ExerciceCart.module.css";
import BodyComposition from "../BodyComposition/BodyComposition";
import BodyCompositionPosterior from "../BodyComposition/BodyCompositionPosterior";

export default function ExerciceCart() {
  const [hideBody, setHideBody] = useState(false);
  const handlerBodyComposition = () => {
    setHideBody(!hideBody);
  };
  return (
    <div className={classes.containerCart}>
      <h4>name</h4>
      <img
        className={classes.image}
        src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
        alt=""
      />
      <p>type</p>
      <p>muscle</p>
      <p>difficulty</p>
      <button onClick={handlerBodyComposition} className="btn btn-info m-2">
        Show Body
      </button>
      {hideBody && (
        <div>
          <BodyComposition
            name={"benche presse"}
            muscles={["chest", "triceps", "front-deltoids"]}
          />

          <BodyCompositionPosterior
            name={"benche presse"}
            muscles={["chest", "triceps", "front-deltoids"]}
          />
        </div>
      )}
    </div>
  );
}
