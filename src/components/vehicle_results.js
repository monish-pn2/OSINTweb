import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';
import 'bootstrap/dist/css/bootstrap.min.css';
import vehicleData from './vehicle.json'; // Adjust the path as necessary
import graphButtonImg from './img/graph.png';
import downloadButtonImg from './img/down.png';

const VehicleResults = () => {
  const [data, setData] = useState(null);

  useEffect(() => { 
    setData(vehicleData.result);
    localStorage.setItem('vehicleData', JSON.stringify(vehicleData.result));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const handleDownloadPDF = () => {
    const pdf = new jsPDF();

    // Title
    pdf.setFontSize(18);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Vehicle Results', 105, 15, { align: 'center' });

    // Vehicle Information
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Vehicle Information', 20, 30);
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'normal');
    pdf.text(`Registration Number: ${data.vehicleNumber}`, 20, 40);
    pdf.text(`Class: ${data.class}`, 20, 50);
    pdf.text(`Chassis: ${data.chassis}`, 20, 60);
    pdf.text(`Engine: ${data.engine}`, 20, 70);
    pdf.text(`Model: ${data.model}`, 20, 80);
    pdf.text(`Vehicle Colour: ${data.vehicleColour}`, 20, 90);
    pdf.text(`Type: ${data.type}`, 20, 100);

    // Owner Information
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Owner Information', 20, 120);
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'normal');
    pdf.text(`Owner: ${data.owner}`, 20, 130);
    pdf.text(`Owner Count: ${data.ownerCount}`, 20, 140);
    pdf.text(`Owner's Father Name: ${data.ownerFatherName}`, 20, 150);
    pdf.text(`Registration Date: ${data.regDate}`, 20, 160);

    // Insurance Information
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Insurance Information', 20, 180);
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'normal');
    pdf.text(`Insurance Company: ${data.vehicleInsuranceCompanyName}`, 20, 190);
    pdf.text(`Insurance Valid Upto: ${data.vehicleInsuranceUpto}`, 20, 200);
    pdf.text(`Insurance Policy Number: ${data.vehicleInsurancePolicyNumber}`, 20, 210);

    // Save the PDF
    pdf.save('vehicle_results.pdf');
  };

  return (
    <div className="d-flex flex-column">
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
            }
            .info-section {
              background-color: #e9ecef;
              padding: 15px;
              border-radius: 5px;
              margin-bottom: 20px;
            }
            .info-section h2 {
              background-color: #6c757d;
              color: white;
              padding: 10px;
              border-radius: 5px;
            }
            .info-section ul {
              list-style-type: none;
              padding-left: 0;
            }
            .info-section li {
              margin-bottom: 10px;
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

        <div className="main-content">
          <div className="container">
            <h1>Vehicle Results</h1>

            <div className="info-section">
              <h2>Vehicle Information</h2>
              <ul>
                <li>
                  <strong>Registration Number:</strong> {data.vehicleNumber}
                </li>
                <li>
                  <strong>Class:</strong> {data.class}
                </li>
                <li>
                  <strong>Chassis:</strong> {data.chassis}
                </li>
                <li>
                  <strong>Engine:</strong> {data.engine}
                </li>
                <li>
                  <strong>Model:</strong> {data.model}
                </li>
                <li>
                  <strong>Vehicle Colour:</strong> {data.vehicleColour}
                </li>
                <li>
                  <strong>Type:</strong> {data.type}
                </li>
              </ul>
            </div>

            <div className="info-section">
              <h2>Owner Information</h2>
              <ul>
                <li>
                  <strong>Owner:</strong> {data.owner}
                </li>
                <li>
                  <strong>Owner Count:</strong> {data.ownerCount}
                </li>
                <li>
                  <strong>Owner's Father Name:</strong> {data.ownerFatherName}
                </li>
                <li>
                  <strong>Registration Date:</strong> {data.regDate}
                </li>
              </ul>
            </div>

            <div className="info-section">
              <h2>Insurance Information</h2>
              <ul>
                <li>
                  <strong>Insurance Company:</strong> {data.vehicleInsuranceCompanyName}
                </li>
                <li>
                  <strong>Insurance Valid Upto:</strong> {data.vehicleInsuranceUpto}
                </li>
                <li>
                  <strong>Insurance Policy Number:</strong> {data.vehicleInsurancePolicyNumber}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons below main content */}
      <div style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: '1000',
      }}>
        <Link to="/aadhar_graph" style={{ textDecoration: 'none', color: 'inherit', marginBottom: '10px' }}>
          <div style={{
            backgroundColor: '#007bff', // Blue background color
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            marginBottom: '10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
            cursor: 'pointer',
          }}>
            <img src={graphButtonImg} alt="Graph" style={{
              width: '70%',
              height: '70%',
            }} />
          </div>
        </Link>
        <button onClick={handleDownloadPDF} style={{ textDecoration: 'none', color: 'inherit', background: 'none', border: 'none', padding: '0', cursor: 'pointer' }}>
          <div style={{
            backgroundColor: '#007bff', // Blue background color
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
            cursor: 'pointer',
          }}>
            <img src={downloadButtonImg} alt="Download" style={{
              width: '70%',
              height: '70%',
            }} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default VehicleResults;
