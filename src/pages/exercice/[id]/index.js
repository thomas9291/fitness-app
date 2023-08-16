import React, { useState } from "react";
import { useRouter } from "next/router.js";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
//cloudinary
import axios from "axios";
//cloudinary

export default function ExerciceDetaillPage() {
  const [loading, setLoading] = useState(false);
  //cloudinary
  const [res, setRes] = useState({});
  const [file, setFile] = useState(null);
  const [fotoForm, setFotoForm] = useState(false);
  //cloudinary
  const router = useRouter();
  const { isReady, push } = router;
  const { id } = router.query;
  const { data: session } = useSession();

  const handelFotoForm = () => {
    setFotoForm(!fotoForm);
  };
  //cloudinary
  const handleSelectFile = (e) => setFile(e.target.files[0]);
  const uploadFile = async (e) => {
    setLoading(true);
    e.preventDefault();
    const data = new FormData();
    data.set("sample_file", file);
    try {
      const res = await axios.post(`/api/upload/upload?id=${id}`, data);

      setRes(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  //cloudinary
  if (session) {
    return (
      <>
        <div className="d-flex justify-content-center">
          <Link href={"/SearchExercice"}>Back to exercice list</Link>
          <button
            type="button"
            onClick={handelFotoForm}
            className="btn btn-success text-center m-1"
          >
            {fotoForm ? "back" : "add fotos"}
          </button>
        </div>
        {fotoForm && (
          <div className="App d-flex justify-content-center m-2">
            <label htmlFor="file" className="btn btn-grey">
              {" "}
              select file
            </label>
            <input
              id="file"
              type="file"
              onChange={handleSelectFile}
              multiple={false}
            />{" "}
          </div>
        )}

        {file && (
          <>
            <div className="d-flex justify-content-center m-2">
              <button className="btn btn-success" onClick={uploadFile}>
                {loading ? "uploading..." : " upload "}
              </button>
            </div>
          </>
        )}
      </>
    );
  }
  return (
    <>
      <div
        className="d-flex flex-column card mx-auto mt-5 p-2"
        style={{ width: "30%" }}
      >
        <h1 className="text-center">Fitness App</h1>

        <h4 className="text-center"> Not signed in </h4>
        <p className="text-center">
          you are not the admin, you cannot have access to this page
        </p>

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
