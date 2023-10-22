import React, { useState } from "react";
import { signIn } from "next-auth/react";
import VideoComponent from "@/components/VideoComponent/VideoComponent";
import styled from "styled-components";
import classes from "../styles/Home.module.css";

export default function HomePage() {
  const [signin, setSigin] = useState(false);
  function handlerSigin() {
    setSigin(!signin);
  }
  return (
    <>
      <div className={classes.containerBody}>
        <div className="textContainer">
          <h1>Fitness App</h1>
          <p>
            website based on the full body principle,
            <br /> here you will find exercises made to train your muscular
            chains.
            <br /> Create your training plan,
            <br /> note your performances and follow the adaptation plan.
            <br /> Monitor your progress thanks to the graph and train hard.{" "}
          </p>
          <p>For more details, watch the video below:</p>
          <SigninBtnContainer>
            <button className="btn btn-success btn-lg" onClick={handlerSigin}>
              {signin ? "Back" : "Sign in"}
            </button>
          </SigninBtnContainer>
        </div>
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
        <ContainerVideo>
          <VideoComponent />
        </ContainerVideo>
      </div>
    </>
  );
}

const ContainerVideo = styled.div`
  display: flex;
  justify-content: center;
  margin: 1.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.1rem;
  background: linear-gradient(black, white);
  border-radius: 1rem;
`;
const SigninBtnContainer = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: center;
`;
