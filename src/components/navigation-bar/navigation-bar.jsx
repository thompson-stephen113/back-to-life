import { useState } from "react";
import { Navbar, Container, Nav, Figure } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./navigation-bar.scss";
import logo from "../../../files/back-to-life.png";


// NavigationBar Component
export const NavigationBar = () => {
    // Stores default state as false
    const [expanded, setExpanded] = useState(false);

    // Sets toggle for expanding behavior
    const handleToggle = () => {
        setExpanded(!expanded);
    };

    // Reverts expanding behavior
    const handleNav = () => {
        setExpanded(false);
    };

    return (
        <Navbar bg="light" expand="lg" expanded={expanded} fixed="top" onToggle={handleToggle}>
            <Container fluid>
                {/* Business Logo */}
                <Navbar.Brand as={Link} to="/" onClick={handleNav}>
                    <Figure className="d-flex align-items-center">
                        <Figure.Image
                            src={logo}
                            className="logo-img"
                            alt="logo"
                        />
                    </Figure>
                </Navbar.Brand>

                {/* Business Name */}
                <span className="business-name">Back to Life Chiropractic Center</span>

                {/* Toggles collapse behavior */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />

                {/* Collapsing navbar */}
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* Home Navigation Link */}
                        <Nav.Link as={Link} to="/" onClick={handleNav}>
                            HOME
                        </Nav.Link>

                        {/* Staff Navigation Link */}
                        <Nav.Link as={Link} to="/about" onClick={handleNav}>
                            ABOUT US
                        </Nav.Link>

                        {/* Patient Forms Navigation Link */}
                        <Nav.Link as={Link} to="/new-patient-forms" onClick={handleNav}>
                            NEW PATIENT FORMS
                        </Nav.Link>

                        {/* Patient Education Navigation Link */}
                        <Nav.Link as={Link} to="/patient-education" onClick={handleNav}>
                            PATIENT EDUCATION
                        </Nav.Link>

                        {/* Massage Therapy Navigation Link */}
                        <Nav.Link as={Link} to="/massage-therapy" onClick={handleNav}>
                            MASSAGE THERAPY
                        </Nav.Link>

                        {/* Contact Navigation Link */}
                        <Nav.Link as={Link} to="/contact-us" onClick={handleNav}>
                            CONTACT US
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};
