import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import graphButtonImg from "./img/graph.png";
import downloadButtonImg from "./img/down.png";

const UsernameResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const firstName = queryParams.get('firstname');
  const lastName = queryParams.get('lastname');

  const webmiiLink = `https://webmii.com/people?n=%22${firstName}%20${lastName}%22#gsc.tab=0&gsc.q=%22${firstName}%20${lastName}%22&gsc.sort=date`;

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <nav className="sidebar">
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
            .nav-content {
              margin-left: 280px;
              padding: 0;
              width: calc(100% - 280px);
            }
            .sticky-header {
              position: -webkit-sticky;
              position: sticky;
              top: 0;
              z-index: 1020;
            }
            .nav-content .navbar {
              margin: 0;
              background-color: #343a40;
              color: white;
            }
            .sidebar-brand {
              margin-bottom: 4rem;
              font-size: 1.5rem;
              color: #f8f9fa;
              font-weight: bold;
            }
            .info-section {
              background-color: #aaaaaa; /* Slightly grey background for the box */
              padding: 15px;
              border-radius: 5px;
              margin-bottom: 20px;
            }
            .info-section h2 {
              background-color: #6c757d; /* Dark grey background behind the title */
              color: white;
              padding: 10px;
              border-radius: 5px;
              margin-bottom: 10px; /* Added margin-bottom */
            }
            .info-section ul {
              list-style-type: none;
              padding-left: 0;
            }
            .info-section li {
              margin-bottom: 10px;
            }
            .fixed-buttons {
              position: fixed;
              bottom: 20px;
              right: 20px;
              display: flex;
              flex-direction: column;
              gap: 10px;
            }
            .btn-graph,
            .btn-download {
              background: none;
              border: none;
              border-radius: 50%;
              padding: 0;
              width: 50px;
              height: 50px;
              cursor: pointer;
            }
            .btn-graph img,
            .btn-download img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          `}
        </style>
        <div>
          <div className="sidebar-brand">
            <Link to="/" className="text-white text-decoration-none">
              My Webpage
            </Link>
          </div>
          <ul className="nav flex-column mb-auto">
            <li className="nav-item">
              <Link className="nav-link active text-white" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link text-white" to="/previous">
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
      <div className="nav-content">
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

        {/* Main content sections */}
        <div className="container py-5">
          <div className="bg-light rounded shadow-sm p-4">
            <h1 className="mb-4" style={{ backgroundColor: '#6c757d', color: 'white', padding: '15px', borderRadius: '5px' }}>
              Username Search Results
            </h1>
            <p className="mb-4">
              Results for: <strong>{firstName} {lastName}</strong>
            </p>
            <a href={webmiiLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              View results on Webmii
            </a>
          </div>
        </div>

        {/* Fixed Buttons */}
        <div className="fixed-buttons">
          <button className="btn-graph">
            <img src={graphButtonImg} alt="Graph" />
          </button>
          <button className="btn-download">
            <img src={downloadButtonImg} alt="Download" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UsernameResults;
