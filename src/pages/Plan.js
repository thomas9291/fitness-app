import React from "react";

import Navbar from "@/components/Navbar/Navbar";
import Link from "next/link";
import AddedCart from "@/components/AddedCart/AddedCart";
import { useRouter } from "next/router";
import Image from "next/image";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Plan({ trainingAdded, setTrainingAdded }) {
  const router = useRouter();
  const { data: session } = useSession();

  const handlerDelete = (id) => {
    const deleteId = trainingAdded.filter((element) => element._id !== id);
    setTrainingAdded(deleteId);
    router.push("/Plan");
  };

  console.log("training added state from plan.js:", trainingAdded);

  if (session) {
    if (trainingAdded.length === 0) {
      return (
        <>
          <Navbar />
          <h2 className="text-center">week 1:</h2>
          <div className="text-center d-flex flex-column justify-content-center">
            <h4 className="m-2 text-center">
              <Link className="text-decoration-none" href="/SearchExercice">
                ... waiting for new exercice
              </Link>
            </h4>
            <Image
              src="https://plus.unsplash.com/premium_photo-1672784160207-03d75e2b83a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zml0bmVzcyUyMGdpcmx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
              alt="fitness girl"
              width={200}
              height={200}
              style={{
                borderRadius: "1rem",
                boxShadow: "10px 5px 5px grey",
                margin: "auto",
              }}
            />
          </div>
        </>
      );
    }
    return (
      <>
        <Navbar />
        <h2 className="text-center">week 1:</h2>
        <div className="searchExercicesDiv">
          {trainingAdded.map(
            ({ name, type, muscle, equipment, _id, result }) => {
              return (
                <div key={_id} className="text-center">
                  <AddedCart
                    name={name}
                    type={type}
                    muscle={muscle}
                    equipment={equipment}
                    date={result[result.length - 1]?.createDate.slice(0, 10)}
                    weight={result[result.length - 1]?.weight}
                    reps={result[result.length - 1]?.reps}
                    serie={result[result.length - 1]?.serie}
                    onClick={() => handlerDelete(_id)}
                    linkedId={
                      <Link
                        className="text-white text-decoration-none"
                        href={`/exerciceInput/${_id}`}
                      >
                        Info & Add
                      </Link>
                    }
                    nextTraining={() =>
                      console.log("next training btn clicked")
                    }
                  />
                </div>
              );
            }
          )}
        </div>
      </>
    );
  }
  return (
    <>
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
    </>
  );
}
