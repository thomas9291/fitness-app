import React, { useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import { useSession, signIn, signOut } from "next-auth/react";
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
      {/*  <Navbar onClick={() => signOut()} /> */}
      <div className={classes.containerBody}>
        <SigninBtnContainer>
          <button className="btn btn-success btn-sm" onClick={handlerSigin}>
            {signin ? "Back" : "Sign in"}
          </button>
        </SigninBtnContainer>
        {signin && (
          <div
            className="d-flex flex-column card mx-auto mt-5 p-2"
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
  margin-top: 5rem;
  display: flex;
  justify-content: flex-start;
`;
