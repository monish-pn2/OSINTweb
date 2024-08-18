import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import jsPDF from 'jspdf';
import graphButtonImg from './img/graph.png';
import downloadButtonImg from './img/down.png';

const UsernameResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const firstName = queryParams.get('firstname');
  const lastName = queryParams.get('lastname');

  const webmiiLink = `https://webmii.com/people?n=%22${firstName}%20${lastName}%22#gsc.tab=0&gsc.q=%22${firstName}%20${lastName}%22&gsc.sort=date`;
  const instantUsernameLink = lastName 
    ? `https://instantusername.com/?q=${firstName}${lastName}` 
    : `https://instantusername.com/?q=${firstName}`;



    const handleDownloadPDF = () => {
      const pdf = new jsPDF('p', 'mm', 'a4');
    
      // Define initial y offsets
      let yOffset = 15; // Starting y offset for content
    
      // Title
      pdf.setFontSize(18);
      pdf.setFont('helvetica', 'bold');
      pdf.text('USERNAME RESULTS', 105, yOffset, { align: 'center' });
      yOffset += 20;
    
      pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.text(`Username: ${firstName} ${lastName}`, 20, yOffset);
    yOffset += 20;
      // Function to add link text with wrapping and blue color
      const addLinkText = (text, x, y) => {
        const pageWidth = 190; // Width of the page minus margins
        const margin = 20;
        const maxWidth = pageWidth - 2 * margin;
        const splitText = pdf.splitTextToSize(text, maxWidth);
        
        pdf.setTextColor(0, 0, 255); // Set text color to blue
        splitText.forEach((line, index) => {
          if (y > 280) { // Check if y exceeds page height, add new page if needed
            pdf.addPage();
            y = 15; // Reset y offset for new page
          }
          pdf.text(line, x, y + (index * 10));
        });
        pdf.setTextColor(0, 0, 0); // Reset text color to black
        return y + (splitText.length * 10); // Return the new y offset after adding text
      };
    
      // Owner Information
      pdf.setFontSize(16);
      pdf.setFont('helvetica', 'bold');
      pdf.text('Webmii', 105, yOffset, { align: 'center' });
      yOffset += 10;
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'normal');
      yOffset = addLinkText(` ${webmiiLink}`, 20, yOffset);
      yOffset += 15; // Add extra space after section
    
      pdf.setFontSize(16);
      pdf.setFont('helvetica', 'bold');
      pdf.text('InstantUsername', 105, yOffset, { align: 'center' });
      yOffset += 10;
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'normal');
      yOffset = addLinkText(` ${instantUsernameLink}`, 20, yOffset);
      yOffset += 15; // Add extra space after section
    
      // Save the PDF
      pdf.save('username_results.pdf');
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
              color: #f8f9fa;
              font-weight: bold;
            }
            .info-section {
              background-color: #f0f0f0; /* Slightly grey background for the box */
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
              <Link className="nav-link active text-white" to="/search">
                Search New
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
                  <a className="nav-link" href="/">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Main content sections */}
        <div className="container ">
          <div className="info-section">
            <h2>Webmii</h2>
            <a href={webmiiLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary mb-3">
              View results on Webmii
            </a>
          </div>
          <div className="info-section">
            <h2>Instant Username</h2>
            <a href={instantUsernameLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              View results on Instant Username
            </a>
          </div>
        </div>

        <div style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: '1000',
      }}>
        
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
    </div>
  );
};

export default UsernameResults;
