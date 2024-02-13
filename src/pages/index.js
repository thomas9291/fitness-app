import React, { useState } from "react";
import { signIn } from "next-auth/react";
import classes from "../styles/Home.module.css";
import HomePagePart1 from "@/components/homePageComponent/homePagePart1";
import HomePagePart2 from "@/components/homePageComponent/homePagePart2";
import HomePagePart3 from "@/components/homePageComponent/homePagePart3";
import HomePagePart4 from "@/components/homePageComponent/homePagePart4";

export default function HomePage() {
  const [signin, setSigin] = useState(false);
  function handlerSigin() {
    setSigin(!signin);
  }
  return (
    <>
      <div className={classes.containerBody}>
        <div>
          <button className={classes.btn} onClick={handlerSigin}>
            {signin ? "Back" : "Sign in"}
          </button>
        </div>
        <h1>Fitness App</h1>
        {signin && (
          <div
            className="d-flex flex-column card mx-auto mt-1 p-2"
            style={{ width: "30%" }}
          >
            <h4 className="text-center"> Not signed in </h4>

            <button
              type="button"
              className="btn btn-success"
              onClick={() => signIn()}
            >
              Sign in
            </button>
          </div>
        )}
        <div>
          <HomePagePart1 />
          <HomePagePart2 />
          <HomePagePart3 />
          <HomePagePart4 />
        </div>
      </div>
    </>
  );
}
