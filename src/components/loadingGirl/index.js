import React from "react";
import Image from "next/image";

const LoadingGirl = () => {
  return (
    <div className="text-center d-flex flex-column justify-content-center">
      <p>...is loading</p>
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
  );
};

export default LoadingGirl;
