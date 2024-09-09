// src/Home.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Container, Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const Home = () => {
    return (
        <>
            {/* Navbar */}

            {/* Carousel Section */}
            <Carousel interval={5000} className="mb-5">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://via.placeholder.com/1200x500?text=First+Slide"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Innovative Solutions</h3>
                        <p>Leading the way with cutting-edge technology.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://via.placeholder.com/1200x500?text=Second+Slide"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Expert Team</h3>
                        <p>Our team of professionals is here to help you succeed.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* Add more Carousel.Items as needed */}
            </Carousel>

            {/* Features Section */}
            <Container className="my-5">
                <h2 className="text-center mb-4">Our Professional Features</h2>
                <Row>
                    <Col md={3}>
                        <Card className="border-0 shadow-sm">
                            <Card.Body>
                                <Card.Title>Feature 1</Card.Title>
                                <Card.Text>Comprehensive solutions tailored to your needs.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="border-0 shadow-sm">
                            <Card.Body>
                                <Card.Title>Feature 2</Card.Title>
                                <Card.Text>High-quality services with a focus on excellence.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="border-0 shadow-sm">
                            <Card.Body>
                                <Card.Title>Feature 3</Card.Title>
                                <Card.Text>Innovative approaches to modern challenges.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="border-0 shadow-sm">
                            <Card.Body>
                                <Card.Title>Feature 4</Card.Title>
                                <Card.Text>Reliable support and guidance throughout.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            {/* Ladder-like Structure */}
            <Container className="my-5">
                <h2 className="text-center mb-4">Explore Our Categories</h2>
                <Row>
                    <Col md={6}>
                        <ListGroup variant="flush">
                            {[...Array(6)].map((_, index) => (
                                <ListGroupItem key={index}>Category {index + 1}</ListGroupItem>
                            ))}
                        </ListGroup>
                    </Col>
                    <Col md={6}>
                        <ListGroup variant="flush">
                            {[...Array(6)].map((_, index) => (
                                <ListGroupItem key={index + 6}>Category {index + 7}</ListGroupItem>
                            ))}
                        </ListGroup>
                    </Col>
                </Row>
            </Container>

            {/* Footer */}
            <footer className="bg-dark text-white text-center py-4">
                <Container>
                    <Row>
                        <Col>
                            <p className="mb-1">&copy; 2024 Your Company. All rights reserved.</p>
                            <p className="mb-3">Developed by Your Name</p>
                            <div>
                                <a href="https://twitter.com/yourprofile" className="text-white me-2" target="_blank" rel="noopener noreferrer">Twitter</a>
                                <a href="https://linkedin.com/in/yourprofile" className="text-white me-2" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                <a href="https://github.com/yourprofile" className="text-white" target="_blank" rel="noopener noreferrer">GitHub</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
};

export default Home;