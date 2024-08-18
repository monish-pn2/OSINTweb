import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';
import aadharData from './aadhar.json'; // Adjust the path as necessary
import 'bootstrap/dist/css/bootstrap.min.css';
import graphButtonImg from './img/graph.png';
import downloadButtonImg from './img/down.png';

const AadharResults = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(aadharData.result);
    localStorage.setItem('aadharData', JSON.stringify(aadharData.result));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const handleDownloadPDF = () => {
    const pdf = new jsPDF('p', 'mm', 'a4');

    // Define initial y offsets
    let yOffset = 15; // Starting y offset for content

    // Title
    pdf.setFontSize(18);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Aadhar Results', 105, yOffset, { align: 'center' });
    yOffset += 10;

    // Owner Information
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Owner Information', 105, yOffset, { align: 'center' });
    yOffset += 10;
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'normal');
    pdf.text(`PAN Number: ${data.pan_number}`, 20, yOffset);
    yOffset += 10;
    pdf.text(`Full Name: ${data.full_name}`, 20, yOffset);
    yOffset += 10;
    pdf.text(`Masked Aadhaar: ${data.masked_aadhaar}`, 20, yOffset);
    yOffset += 10;
    pdf.text(`Email: ${data.email}`, 20, yOffset);
    yOffset += 10;
    pdf.text(`Phone Number: ${data.phone_number}`, 20, yOffset);
    yOffset += 10;
    pdf.text(`Gender: ${data.gender}`, 20, yOffset);
    yOffset += 10;
    pdf.text(`Date of Birth: ${data.dob}`, 20, yOffset);
    yOffset += 15; // Add extra space after section

    // Address Information
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Address Information', 105, yOffset, { align: 'center' });
    yOffset += 10;
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'normal');
    pdf.text(`Address Line 1: ${data.address.line_1}`, 20, yOffset);
    yOffset += 10;
    pdf.text(`Address Line 2: ${data.address.line_2}`, 20, yOffset);
    yOffset += 10;
    pdf.text(`Street Name: ${data.address.street_name}`, 20, yOffset);
    yOffset += 10;
    pdf.text(`City: ${data.address.city}`, 20, yOffset);
    yOffset += 10;
    pdf.text(`State: ${data.address.state}`, 20, yOffset);
    yOffset += 10;
    pdf.text(`Zip Code: ${data.address.zip}`, 20, yOffset);
    yOffset += 10;
    pdf.text(`Country: ${data.address.country}`, 20, yOffset);
    yOffset += 15; // Add extra space after section

    // Company Information
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Company Information', 105, yOffset, { align: 'center' });
    yOffset += 10;
    pdf.setFontSize(12);
    data.din_info.company_list.forEach((company, index) => {
      pdf.setFont('helvetica', 'bold'); // Set font to bold
      pdf.text(`CIN: ${company.cin}`, 20, yOffset);
      pdf.setFont('helvetica', 'normal'); // Set font back to normal
      pdf.text(`Company Name: ${company.company_name}`, 20, yOffset+8); // Adjust x position for Company Name
      yOffset += 20; // Increase yOffset to create space between each company
    });

    // Save the PDF
    pdf.save('aadhar_results.pdf');
  };

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
              margin-bottom: 10px; /* Added margin-bottom */
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
                  <a className="nav-link" href="/">Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="main-content">
          <div className="container">
            <h1>Aadhar Results</h1>

            <div className="info-section" id="ownerInfo">
              <h2>Owner Information</h2>
              <ul>
                <li><strong>PAN Number:</strong> {data.pan_number}</li>
                <li><strong>Full Name:</strong> {data.full_name}</li>
                <li><strong>Masked Aadhaar:</strong> {data.masked_aadhaar}</li>
                <li><strong>Email:</strong> {data.email}</li>
                <li><strong>Phone Number:</strong> {data.phone_number}</li>
                <li><strong>Gender:</strong> {data.gender}</li>
                <li><strong>Date of Birth:</strong> {data.dob}</li>
              </ul>
            </div>

            <div className="info-section" id="addressInfo">
              <h2>Address Information</h2>
              <ul>
                <li><strong>Address Line 1:</strong> {data.address.line_1}</li>
                <li><strong>Address Line 2:</strong> {data.address.line_2}</li>
                <li><strong>Street Name:</strong> {data.address.street_name}</li>
                <li><strong>City:</strong> {data.address.city}</li>
                <li><strong>State:</strong> {data.address.state}</li>
                <li><strong>Zip Code:</strong> {data.address.zip}</li>
                <li><strong>Country:</strong> {data.address.country}</li>
              </ul>
            </div>

            <div className="info-section" id="companyInfo">
              <h2>Company Information</h2>
              <ul>
                {data.din_info.company_list.map((company, index) => (
                  <li key={index}>
                    <strong>CIN:</strong> {company.cin} <br />
                    <strong>Company Name:</strong> {company.company_name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Graph and Download Buttons */}
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

export default AadharResults;
