import React from 'react';
import { Link } from 'react-router-dom';

const Previous = () => {
  return (
    <div>
      <style>
        {`
          .sidebar {
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            width: 280px;
            padding: 20px;
            background-color: #343a40;
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .sidebar .nav {
            flex-grow: 1;
            margin-bottom: 20px;
          }
          .main-layout {
            margin-left: 300px;
            margin-right: 20px;
            padding: 0;
          }
          .sticky-header {
            position: -webkit-sticky;
            position: sticky;
            top: 0;
            z-index: 1020;
          }
          .main-layout .navbar {
            margin: 0;
            background-color: #343a40;
            color: white;
            height: 80px; /* Increased height */
          }
          .sidebar-brand {
            margin-bottom: 4rem;
            font-size: 1.5rem;
          }
          .form-section {
            margin-top: 20px;
          }
          .nav-bar {
            margin-left: 280px;
          }
          .navbar-nav .nav-item .nav-link {
            line-height: 45px; /* Adjust line height to vertically center links */
          }
        `}
      </style>

      {/* Sidebar */}
      <nav className="sidebar">
        <div>
          <div className="sidebar-brand">
            <a href="/" className="text-white text-decoration-none">
              My Webpage
            </a>
          </div>
          <ul className="nav flex-column mb-auto">
            <li className="nav-item">
              <Link className="nav-link active text-white" to="/">
                <svg className="bi pe-none me-2" width="16" height="16">
                  <use xlinkHref="#search-new"></use>
                </svg>
                Search New
              </Link>
            </li>
            <li>
              <Link className="nav-link text-white" to="/previous">
                <svg className="bi pe-none me-2" width="16" height="16">
                  <use xlinkHref="#search-previous"></use>
                </svg>
                Search Previous
              </Link>
            </li>
          </ul>
          <hr />
        </div>

        <div className="dropdown">
          <Link
            to="/profile"
            className="d-flex align-items-center text-white text-decoration-none"
          >
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>mdo</strong>
          </Link>
          
        </div>
      </nav>

      {/* Main Content */}
      <div className="nav-bar">
        <nav className="navbar sticky-header navbar-expand-lg navbar-dark bg-dark mb-4">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    FAQs
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* Main Layout  */}
      <div className="main-layout">
        <form className="form-section" id="searchForm">
          <div className="mb-3">
            <label htmlFor="caseNumber" className="form-label">
              Case Number
            </label>
            <input type="text" className="form-control" id="caseNumber" required />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Previous;
