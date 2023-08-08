import React from "react";
// import './navBrands.css';
import { Link } from "react-router-dom";

const navBrands = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand nav-link" to="/">
          My Collection
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
            <li class="nav-item">
              <Link className="nav-link" to="/addBrands">
                Add Brands
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default navBrands;
