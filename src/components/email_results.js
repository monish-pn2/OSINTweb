import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import emailData from "./email.json"; // Adjust the path as necessary
import "bootstrap/dist/css/bootstrap.min.css";
import graphButtonImg from "./img/graph.png";
import downloadButtonImg from "./img/down.png";

const EmailResults = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(emailData);
    localStorage.setItem("emailData", JSON.stringify(emailData));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const handleDownloadPDF = () => {
    const pdf = new jsPDF("p", "mm", "a4");
    const margin = 15; // Margin from the edges
    let yOffset = margin; // Initial y offset
    const lineHeight = 10; // Space between lines
    const pageHeight = pdf.internal.pageSize.height; // Total page height
  
    const addText = (text) => {
      const splitText = pdf.splitTextToSize(text, 180); // Split text if it’s too long
      splitText.forEach((line) => {
        if (yOffset + lineHeight > pageHeight - margin) {
          pdf.addPage();
          yOffset = margin;
        }
        pdf.text(line, margin, yOffset);
        yOffset += lineHeight;
      });
    };
  
    // Title
    pdf.setFontSize(18);
    pdf.setFont("helvetica", "bold");
    addText("Email Data Results");
    yOffset += lineHeight;
  
    // Details Information
    pdf.setFontSize(16);
    pdf.setFont("helvetica", "bold");
    addText("Details Information");
    yOffset += lineHeight/2;
    pdf.setFontSize(12);
    pdf.setFont("helvetica", "normal");
    addText(`Deliverable: ${data.json_data.data.deliverable || "False"}`);
    addText(`Disposable: ${data.json_data.data.disposable || "False"}`);
    addText(`Domain: ${data.json_data.data.domain || "False"}`);
    addText(`Catch-All: ${data.json_data.data.catch_all || "False"}`);
    addText(`Gibberish: ${data.json_data.data.gibberish || "False"}`);
    addText(`Spam: ${data.json_data.data.spam || "False"}`);
    addText(`Valid Syntax: ${data.json_data.data.valid_syntax || "False"}`);
    addText(`Webmail: ${data.json_data.data.webmail || "False"}`);
    yOffset += lineHeight;
  
    // Social Media Information
    pdf.setFontSize(16);
    pdf.setFont("helvetica", "bold");
    addText("Social Media Information");
    yOffset += lineHeight;
    pdf.setFontSize(12);
    if (data.social_media.data.account_details) {
      Object.entries(data.social_media.data.account_details)
        .filter(([platform, details]) => details.registered === true)
        .forEach(([platform]) => addText(platform));
    } else {
      addText("No social media accounts registered");
    }
    yOffset += lineHeight;
  
    // Breaches Information
    pdf.setFontSize(16);
    pdf.setFont("helvetica", "bold");
    addText("Breaches Information");
    yOffset += lineHeight/2;
    pdf.setFontSize(12);
  
    if (data.social_media.data.breach_details) {
      data.social_media.data.breach_details.breaches.forEach((breach) => {
        addText(`Name: ${breach.name || "N/A"}`);
        addText(`Domain: ${breach.domain || "N/A"}`);
        addText(`Date: ${breach.date || "N/A"}`);
        yOffset += lineHeight;
      });
    } else {
      addText("No breach information available");
    }
    yOffset += lineHeight;
  
    // Additional Breaches Information
    pdf.setFontSize(16);
    pdf.setFont("helvetica", "bold");
    addText("Additional Breaches Information");
    yOffset += lineHeight/2;
    pdf.setFontSize(12);
  
    if (data.breaches) {
      data.breaches.result.forEach((breach) => {
        addText(`Source: ${breach.sources || "N/A"}`);
        addText(`Password: ${breach.password || "N/A"}`);
        addText(`SHA1: ${breach.sha1 || "N/A"}`);
        addText(`Hash: ${breach.hash || "N/A"}`);
        yOffset += lineHeight;
      });
    } else {
      addText("No additional breach information available");
    }
  
    // Save the PDF
    pdf.save("email_results.pdf");
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

            .info-section.social-media ul {
              display: flex;
              flex-wrap: wrap;
              gap: 10px;
              list-style-type: none;
              padding-left: 0;
            }

            .info-section.social-media li {
              border: 1px solid #ced4da; /* Border color */
              border-radius: 5px; /* Rounded corners */
              padding: 10px; /* Space inside the border */
              background-color: #f8f9fa; /* Background color */
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

  
            


            .info-section .breach-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Adjust size as needed */
  gap: 20px; /* Adjust spacing between items as needed */
  list-style-type: none;
  padding: 0;
}

.info-section .breach-item {
  border: 1px solid #ced4da; /* Border color */
  border-radius: 5px; /* Rounded corners */
  padding: 10px; /* Space inside the border */
  background-color: #f8f9fa; /* Background color */
}

.info-section .breach-item div {
  margin-bottom: 5px;
}







.info-section .breach-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Adjust size as needed */
  gap: 20px; /* Adjust spacing between items as needed */
  list-style-type: none;
  padding: 0;
}

.info-section .breach-item {
  border: 1px solid #ced4da; /* Border color */
  border-radius: 5px; /* Rounded corners */
  padding: 10px; /* Space inside the border */
  background-color: #f8f9fa; /* Background color */
}

.info-section .breach-item div {
  margin-bottom: 5px;
  overflow-wrap: break-word; /* Handle long text within the box */
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
                  <a className="nav-link" href="/">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container mt-4">
          <h1>Email Results</h1>
          <div className="info-section">
            <h2>Details Information</h2>
            <p>
              Deliverable:{" "}
              <b>{data.json_data.data.deliverable ? "True" : "False"}</b>
            </p>
            <p>
              Disposable:{" "}
              <b>{data.json_data.data.disposable ? "True" : "False"}</b>
            </p>
            <p>
              Domain: <b>{data.json_data.data.domain ? "True" : "False"}</b>
            </p>
            <p>
              Catch-All:{" "}
              <b>{data.json_data.data.catch_all ? "True" : "False"}</b>
            </p>
            <p>
              Gibberish:{" "}
              <b>{data.json_data.data.gibberish ? "True" : "False"}</b>
            </p>
            <p>
              Spam: <b>{data.json_data.data.spam ? "True" : "False"}</b>
            </p>
            <p>
              Valid Syntax:
              <b> {data.json_data.data.valid_syntax ? "True" : "False"}</b>
            </p>
            <p>
              Webmail: <b>{data.json_data.data.webmail ? "True" : "False"}</b>
            </p>
          </div>

          <div className="info-section social-media">
            <h2>Social Media Information</h2>
            <ul>
              {data.social_media.data.account_details ? (
                Object.entries(data.social_media.data.account_details)
                  .filter(([platform, details]) => details.registered === true)
                  .map(([platform]) => <li key={platform}>{platform}</li>)
              ) : (
                <li>No social media accounts registered</li>
              )}
            </ul>
          </div>

          {/*breaches*/}
          <div className="info-section">
            <h2>Breaches Information</h2>
            <ul className="breach-list">
              {data.social_media.data.breach_details ? (
                data.social_media.data.breach_details.breaches.map(
                  (breach, index) => (
                    <li key={index} className="breach-item">
                      <div>
                        <strong>Name:</strong> {breach.name || "N/A"}
                      </div>
                      <div>
                        <strong>Domain:</strong> {breach.domain || "N/A"}
                      </div>
                      <div>
                        <strong>Date:</strong> {breach.date || "N/A"}
                      </div>
                    </li>
                  )
                )
              ) : (
                <li>No breach information available</li>
              )}
            </ul>
          </div>

          {/*add*/}
          <div className="info-section">
            <h2>Additional Breaches Information</h2>
            <ul className="breach-list">
              {data.breaches ? (
                data.breaches.result.map((breach, index) => (
                  <li key={index} className="breach-item">
                    <div>
                      <strong>Source:</strong> {breach.sources || "N/A"}
                    </div>

                    <div>
                      <strong>Password:</strong> {breach.password || "N/A"}
                    </div>

                    <div>
                      <strong>SHA1:</strong> {breach.sha1 || "N/A"}
                    </div>

                    <div>
                      <strong>Hash:</strong> {breach.hash || "N/A"}
                    </div>
                  </li>
                ))
              ) : (
                <li>No breach information available</li>
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Fixed buttons */}
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: "1000",
        }}
      >
        <Link
          to="/email_graph"
          style={{
            textDecoration: "none",
            color: "inherit",
            marginBottom: "10px",
          }}
        >
          <div
            style={{
              backgroundColor: "#007bff", // Blue background color
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              marginBottom: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              cursor: "pointer",
            }}
          >
            <img
              src={graphButtonImg}
              alt="Graph"
              style={{
                width: "70%",
                height: "70%",
              }}
            />
          </div>
        </Link>
        <button
          onClick={handleDownloadPDF}
          style={{
            textDecoration: "none",
            color: "inherit",
            background: "none",
            border: "none",
            padding: "0",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              backgroundColor: "#007bff", // Blue background color
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              cursor: "pointer",
            }}
          >
            <img
              src={downloadButtonImg}
              alt="Download"
              style={{
                width: "70%",
                height: "70%",
              }}
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default EmailResults;
