import Link from "next/link";
import React from "react";

export default function Navbar({ onClick }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link "
                aria-current="page"
                href="/SearchExercice"
              >
                Search exercices
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/Create">
                Create exercice
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/Plan">
                Training plan
              </Link>
            </li>
            <li className="nav-item">
              <button className="nav-link signout" onClick={onClick}>
                Sign out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
