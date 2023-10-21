import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className="me-auto">

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" Link to="/Home">
      -PLay-||-PAL
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" Link to="/Home">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" Link to="/about">
            About
          </a>
        </li>
        
        <li className="nav-item">
          <a
            className="nav-link disabled"
            Link to="/login"
            tabIndex={-1}
            aria-disabled="true"
          >
            Disabled
          </a>
        </li>
      </ul>
      <form className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  </div>
</nav>
          </div>

  );
}

export default Header;
