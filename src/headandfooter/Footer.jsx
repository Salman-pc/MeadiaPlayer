import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaTwitter, FaInstagram, FaFacebook, FaPaperPlane, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div
      style={{
        borderTop: "2px solid rgba(255, 255, 255, 0.2)",
        backgroundColor: "rgb(176, 176, 176)",
      }}
      className="mt-2"
    >
      <footer className="py-4">
        <Container>
          <Row>
            <Col md={4} sm={12} className="my-3  text-md-start">
              <h5 className="fw-bold text-white">
                <i className="fa-solid fa-music"></i> Media Player
              </h5>
              <p className="text-white mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet tortor
                suscipit, gravida arcu quis, ultrices purus.
              </p>
            </Col>

            <Col md={8} sm={12} className="d-flex flex-wrap justify-content-between text-center text-md-start">
              <Col xs={6} sm={6} md={3} className="mb-3">
                <h5 className="fw-bold text-white">Links</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#!" className="text-white text-decoration-none fw-medium">
                      Home
                    </a>
                  </li>
                  <li className="my-1">
                    <a href="#!" className="text-white text-decoration-none fw-medium">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white text-decoration-none fw-medium">
                      History
                    </a>
                  </li>
                </ul>
              </Col>

              <Col xs={6} sm={6} md={3} className="mb-3">
                <h5 className="fw-bold text-white">Guide</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#!" className="text-white text-decoration-none fw-medium">
                      React
                    </a>
                  </li>
                  <li className="my-1">
                    <a href="#!" className="text-white text-decoration-none fw-medium">
                      React Bootstrap
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white text-decoration-none fw-medium">
                      React Redux
                    </a>
                  </li>
                </ul>
              </Col>

              <Col xs={12} sm={12} md={5} className="mb-3">
                <h5 className="fw-bold text-white">Contact Us</h5>
                <Form className="d-flex align-items-center justify-content-center justify-content-md-start">
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    className="me-2"
                    style={{ maxWidth: "70%" }}
                  />
                  <Button variant="info" className="bg-info border-info" type="submit">
                    <FaPaperPlane />
                  </Button>
                </Form>
                <div className="d-flex flex-wrap justify-content-center justify-content-md-start mt-3">
                  <a href="#!" className="text-white me-3 text-decoration-none">
                    <FaTwitter size={20} />
                  </a>
                  <a href="#!" className="text-white me-3 text-decoration-none">
                    <FaInstagram size={20} />
                  </a>
                  <a href="#!" className="text-white me-3 text-decoration-none">
                    <FaFacebook size={20} />
                  </a>
                  <a href="#!" className="text-white me-3 text-decoration-none">
                    <FaPhone size={20} />
                  </a>
                  <a href="#!" className="text-white me-3 text-decoration-none">
                    <FaGithub size={20} />
                  </a>
                  <a href="#!" className="text-white text-decoration-none">
                    <FaLinkedin size={20} />
                  </a>
                </div>
              </Col>
            </Col>
          </Row>

          {/* Copyright Footer */}
          <div className="text-center mt-4">
            <p className="mb-0 fw-semibold text-white">
              &copy; 2024 Media Player. All Rights Reserved.
            </p>
          </div>
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
