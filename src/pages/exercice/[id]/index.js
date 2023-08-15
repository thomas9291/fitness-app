import React, { useState } from "react";
import { useRouter } from "next/router.js";
import Link from "next/link";

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
