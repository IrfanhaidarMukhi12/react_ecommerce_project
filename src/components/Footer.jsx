import React from "react";
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import "../styles/footer.css";

const Footer = () => {
  const buttonStyles = {
    fontSize: '16px',
    fontWeight: 'normal',
    borderRadius: '5px',
    padding: '10px 20px',
    margin: '0 5px',
    color: 'white',
    textDecoration: 'none',
    transition: 'color 0.3s ease-in-out',
  };
  const iconStyles = {
    marginRight: '5px',
  };

  return (
    <footer className="mb-0 text-center footer">
      <Container>
        <Row className="align-items-center justify-content-center pb-5">
          <div className="social-icons">
            <a href="#" target="_blank" rel="noreferrer">
              <FaGithub className="icon1" />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <FaTwitter className="icon1" />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <FaInstagram className="icon1" />
            </a>
          </div>
          <Col md={6} style={{display: "contents"}}>
            <NavLink
              className="navbar-brand fw-bold fs-1 px-4 d-flex align-items-center"
              to="/"
              style={{ ...buttonStyles, marginRight: '5px' }}
            >
              <img
                src={process.env.PUBLIC_URL + '/assets/logo1.png'}
                alt="Logo"
                height={60}
                style={iconStyles}
              />
              <span style={{ marginLeft: '0px' }}>𝓓𝑒𝑒𝑟</span>
            </NavLink>

          </Col>

          <p className="" style={{ marginTop: '10px', fontFamily: 'Arial, sans-serif' }}>
            Made by{" "}
            <a
              href="https://github.com/IrfanhaidarMukhi12"
              className="text-white fs-8"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: 'none', transition: 'color 0.3s', color: '#fff' }}
              onMouseEnter={(e) => e.target.style.color = '#007bff'}
              onMouseLeave={(e) => e.target.style.color = '#fff'}
            >
              Mukhi Irfan Haidar
            </a>
          </p>



        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
