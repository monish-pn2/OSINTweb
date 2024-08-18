import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import profileData from './profile.json'; // Adjust the path as necessary

const ProfilePage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(profileData);
    localStorage.setItem('profileData', JSON.stringify(profileData));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

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
            .sidebar-brand {
              margin-bottom: 4rem;
              font-size: 1.5rem;
            }
            .dropdown img {
              border-radius: 50%;
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
              <Link className="nav-link active text-white" to="/search">
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
              alt="Profile"
              width="32"
              height="32"
              className="me-2"
            />
            <strong>mdo</strong>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="content-container">
        <style>
          {`
            .content-container {
              margin-left: 280px;
              padding: 20px;
              width: calc(100% - 280px);
            }
            .navbar {
              background-color: #343a40;
            }
            .navbar-nav .nav-link {
              color: white;
            }
            .navbar-nav .nav-link.active {
              background-color: #495057;
            }
            .profile-section {
              display: flex;
              flex-direction: column;
              align-items: center;
              padding: 30px;
              background-color: #e9ecef;
              border-radius: 10px;
              margin-bottom: 20px;
              text-align: center;
            }
            .profile-section img {
              border-radius: 50%;
              margin-bottom: 20px;
            }
            .profile-details {
              display: flex;
              flex-direction: column;
              align-items: center;
            }
            .profile-details h2 {
              background-color: #6c757d;
              color: white;
              padding: 10px;
              border-radius: 5px;
              margin-bottom: 20px;
              font-size: 1.5rem;
            }
            .profile-details ul {
              list-style-type: none;
              padding-left: 0;
            }
            .profile-details li {
              margin-bottom: 10px;
            }
            .profile-details li strong {
              font-weight: bold;
            }
          `}
        </style>
        
        {/* Navigation Bar */}
        <nav className="navbar navbar-expand-lg navbar-dark mb-4">
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
                  <a className="nav-link" href="/">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Profile Section */}
        <div className="container">
          <div className="profile-section">
            <img
              src="https://github.com/mdo.png"
              alt="User Profile"
              width="150"
              height="150"
              className="rounded-circle mb-3"
            />
            <div className="profile-details">
              <h2>{data.name}</h2>
              <ul>
                <li><strong>Email:</strong> {data.email}</li>
                <li><strong>Phone:</strong> {data.phone}</li>
                <li><strong>Address:</strong> {data.address}</li>
                <li><strong>Occupation:</strong> {data.occupation}</li>
                <li><strong>Bio:</strong> {data.bio}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
