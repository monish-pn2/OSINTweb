import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import coverImage from './img/cover.jpg'; // Import the image
import { Card, Container, Row, Col, ListGroup, ListGroupItem, Button } from 'react-bootstrap'; // Import necessary Bootstrap components

const Home = () => {
  // State to control the expansion of categories
  const [expandedCategories, setExpandedCategories] = useState({});

  const categories = [
    { name: 'Email ID', description: 'Detailed information about Email ID usage, security, and management.' },
    { name: 'Phone Number', description: 'Insights into phone number security and best practices.' },
    { name: 'Username', description: 'How to manage and secure usernames effectively.' },
    { name: 'Domain Name', description: 'Understanding domain name management and security tips.' },
    { name: 'IP Address', description: 'Learn about IP address security and management.' },
    { name: 'Aadhar Card', description: 'Important details about Aadhar Card security and usage.' },
    { name: 'PAN card', description: 'Best practices for managing PAN card information.' },
    { name: 'Vehicle Number', description: 'Information on vehicle number security and related concerns.' },
    { name: 'UPI ID', description: 'Securing and managing UPI IDs effectively.' },
  ];

  const Footer = () => {
    return (
      <footer className="footer">
        <Container>
          <Row>
            <Col md={6}>
              <h5>About Us</h5>
              <p>We provide comprehensive solutions for cybercrime investigations and training.</p>
            </Col>
            <Col md={6}>
              <h5>Contact</h5>
              <p>Email: info@osinttool.com</p>
              <p>Phone: +1 234 567 890</p>
            </Col>
            <Col md={6}>
              <h5>Follow Us</h5>
              <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <p>&copy; 2024 OSINT Tool. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  };

  const toggleCategory = (index) => {
    setExpandedCategories((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      />
      <style>
        {`
          body {
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f4f4f4;
          }

          .hero {
            background-image: url(${coverImage});
            color: white;
            padding: 120px 20px;
            text-align: center;
            background-size: cover;
            background-position: center;
            border-bottom: 5px solid #e74c3c;
          }

          .hero h1 {
            font-size: 4.5rem;
            margin: 0 0 20px 0;
            font-weight: bold;
          }

          .hero p {
            font-size: 1.5rem;
            margin-bottom: 40px;
          }

          .hero .get-started-btn {
            background-color: #e74c3c;
            color: white;
            border: none;
            padding: 15px 30px;
            font-size: 1.25rem;
            cursor: pointer;
            border-radius: 5px;
            text-decoration: none; /* Ensures no underline */
            display: inline-block;
            transition: background-color 0.3s ease;
          }

          .hero .get-started-btn:hover {
            background-color: #c0392b;
          }

          .content {
            padding: 50px 20px;
            background-color: white;
            color: #2c3e50;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            margin-top: -50px;
            margin-bottom: 50px;
            max-width: 1200px;
            margin-left: auto;
            margin-right: auto;
            text-align: left;
          }

          .features-section, .categories-section {
            margin-bottom: 60px;
          }

          .features-head {
            margin-top: 50px;
          }

          .cta {
            background-color: #34495e;
            color: white;
            text-align: center;
            padding: 50px 20px;
            margin-top: 50px;
            border-radius: 8px;
          }

          .list-group-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: background-color 0.3s ease;
            border: 1px solid #ddd;
            border-radius: 5px;
            margin-bottom: 10px;
            cursor: pointer;
          }

          .list-group-item:hover {
            background-color: #f8f9fa;
          }

          .category-box {
  position: relative;
  width: 100%;
  height: 150px; /* Fixed height */
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  transition: background-color 0.3s ease;
}

.category-box h3 {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  transition: color 0.3s ease, transform 0.3s ease, font-size 0.3s ease;
}

.category-box.expanded h3 {
  font-size: 1rem; /* Smaller font size */
  position: absolute;
  top: 10px; /* Adjust the top position */
  left: 20px; /* Adjust the left position */
  transform: translateY(0); /* Ensure it's properly positioned */
  color: #666; /* Optional: Adjust text color */
}

.category-info {
  opacity: 0;
  max-height: 0;
  transition: opacity 0.4s ease, max-height 0.4s ease;
  font-size: 0.9rem;
  color: #666;
  margin-top: 10px;
  position: absolute;
  top: 50%; /* Center it vertically */
  left: 50%;
  transform: translate(-50%, -50%);
}

.category-box.expanded .category-info {
  opacity: 1;
  max-height: 100px; /* Allow it to become visible */
}


          .footer {
            background-color: #34495e;
            color: white;
            padding: 20px 0;
            margin-top: 50px;
          }
        `}
      </style>

      <div className="hero">
        <h1>Welcome to OSINT Tool</h1>
        <p>Unlock the power of open-source intelligence with our comprehensive platform.</p>
        <Link to="/login" className="get-started-btn">
          Get Started
        </Link>
      </div>

      <div className="content">
        <div>
          <h2>Center for Cybercrime Investigation Training & Research (CCITR)</h2>
          <p>
            To put in place an institutionalized structure for an effective capacity building of cybercrime investigations, CID Karnataka in collaboration with Infosys Foundation and Data Security Council of India (DSCI) has set up the Centre for Cybercrime Investigation Training & Research (CCITR) at Criminal Investigation Department (CID) Headquarters, Bengaluru in the year 2019. Over 19,363 personnel from the police, judiciary, prosecution department, armed forces, IT industry, and other government departments have been already trained at CCITR.
          </p>
        </div>

        {/* Professional Features */}
        <div className="features-section">
          <h2 className="features-head">Our Professional Features</h2>
          <Container>
            <Row>
              <Col sm={4}>
                <Card>
                  <Card.Body>
                    <Card.Title>Email Security</Card.Title>
                    <Card.Text>
                      Protect your email from phishing, spam, and data breaches with our advanced tools.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={4}>
                <Card>
                  <Card.Body>
                    <Card.Title>Phone Number Protection</Card.Title>
                    <Card.Text>
                      Secure your phone number and avoid unwanted calls and scams.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={4}>
                <Card>
                  <Card.Body>
                    <Card.Title>Domain Name Security</Card.Title>
                    <Card.Text>
                      Keep your domain name safe from hackers and unauthorized transfers.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>

        {/* Categories */}
        <div className="categories-section">
          <h2>Our Categories</h2>
          <div className="categories-section">
        <Container>
          <Row>



          {categories.map((category, index) => (
  <Col md={4} key={index}> {/* Changed from md={6} to md={4} for 3 items per row */}
    <div
      className={`category-box ${expandedCategories[index] ? 'expanded' : ''}`}
      onClick={() => toggleCategory(index)}
    >
      <h3 className={`category-name ${expandedCategories[index] ? 'expanded' : ''}`}>
        {category.name}
      </h3>
      <div className="category-info">
        <p>{category.description}</p>
      </div>
    </div>
  </Col>
))}





          </Row>
        </Container>
      </div>
        </div>

        {/* Call to Action */}
        
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
