import React from 'react';
import { Link } from 'react-router-dom';
import coverImage from './img/cover.jpg'; // Import the image

const Home = () => {
  return (
    <div>
      <style>
        {`
          body {
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f4f4f4;
          }

          .hero {
            background-image: url(${coverImage}); /* Correct usage of imported image */
            color: white;
            padding: 100px 20px;
            text-align: center;
            background-size: cover;
            background-position: center;
          }

          .hero h1 {
            font-size: 4rem;
            margin: 0 0 20px 0;
            font-weight: bold;
          }

          .hero p {
            font-size: 1.5rem;
            margin-bottom: 40px;
          }

          .hero button {
            background-color: #e74c3c;
            color: white;
            border: none;
            padding: 15px 30px;
            font-size: 1rem;
            cursor: pointer;
            border-radius: 5px;
            transition: background-color 0.3s ease;
          }

          .hero button:hover {
            background-color: #c0392b;
          }

          .content {
            padding: 50px 20px;
            background-color: white;
            color: #2c3e50;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            margin: -50px 20px 50px 20px;
            max-width: 1200px;
            margin-left: auto;
            margin-right: auto;
            text-align: left;
          }

          .content h2 {
            font-size: 2.5rem;
            margin-bottom: 20px;
            color: #34495e;
          }

          .content p {
            font-size: 1.2rem;
            margin-bottom: 30px;
            line-height: 1.6;
            color: #7f8c8d;
          }

          .content h3 {
            font-size: 2rem;
            margin-bottom: 20px;
            color: #34495e;
          }

          .content ul {
            list-style-type: disc;
            padding-left: 20px;
            margin-bottom: 30px;
          }

          .content ul li {
            margin-bottom: 15px;
            font-size: 1.2rem;
            color: #7f8c8d;
          }

          .cta {
            background-color: #34495e;
            color: white;
            text-align: center;
            padding: 50px 20px;
            margin-top: 50px;
            border-radius: 8px;
          }

          .cta h2 {
            font-size: 2.5rem;
            margin-bottom: 20px;
          }

          .cta button {
            background-color: #e74c3c;
            color: white;
            border: none;
            padding: 15px 30px;
            font-size: 1rem;
            cursor: pointer;
            border-radius: 5px;
            transition: background-color 0.3s ease;
          }

          .cta button:hover {
            background-color: #c0392b;
          }
        `}
      </style>

      <div className="hero">
        <h1>Welcome to OSINT Tool</h1>
        <p>Unlock the power of open-source intelligence with our comprehensive platform.</p>
      </div>

      <div className="content">
        <h2>Center for Cybercrime Investigation Training & Research (CCITR)</h2>
        <p>
          The Centre for Cybercrime Investigation Training & Research (CCITR) was established in 2019 by the Criminal Investigation Department (CID) Karnataka, in collaboration with Infosys Foundation and Data Security Council of India (DSCI). It is dedicated to building effective capacity for cybercrime investigations.
        </p>
        <p>
          Since its inception, over 19,363 personnel from various sectors including police, judiciary, prosecution department, armed forces, IT industry, and other government departments have been trained at CCITR.
        </p>
        <h3>Objectives</h3>
        <ul>
          <li>Enhancing the capacity of police, prosecution, and judiciary in handling cybercrime investigations.</li>
          <li>Capturing a share of the global $2 trillion cybersecurity market through Standard Operating Procedures (SOPs) in cybercrime investigations.</li>
          <li>Conducting research on the legal, technical, and procedural aspects of cybercrime investigation.</li>
          <li>Improving the investigation and prosecution of cybercrime cases in Karnataka.</li>
        </ul>
      </div>

      <div className="cta">
        <h2>Ready to Dive In?</h2>
        <Link to="/login">
          <button>Log IN</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
