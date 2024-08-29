import { useState } from "react";
import { Navbar, Container, Nav, Figure } from "react-bootstrap";
import { Link } from "react-router-dom";

import { HomeView } from "../home-view/home-view";
import { StaffView } from "../staff-view/staff-view";
import { FormsView } from "../forms-view/forms-view";
import { EduView } from "../edu-view/edu-view";
import { MassageView } from "../massage-view/massage-view";
import { ContactView } from "../contact-view/contact-view"
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
        <Navbar bg="light" expand="lg" expanded={expanded} onToggle={handleToggle}>
            <Container>
                <Navbar.Brand as={Link} to={HomeView} onClick={handleNav}>
                    <Figure>
                        <Figure.Image
                            src={logo}
                            alt="logo"
                        />
                    </Figure>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* Home Navigation Link */}
                        <Nav.Link as={Link} to={HomeView} onClick={handleNav}>
                            Home
                        </Nav.Link>

                        {/* Staff Navigation Link */}
                        <Nav.Link as={Link} to={StaffView} onClick={handleNav}>
                            Meet Our Staff
                        </Nav.Link>

                        {/* Patient Forms Navigation Link */}
                        <Nav.Link as={Link} to={FormsView} onClick={handleNav}>
                            New Patient Forms
                        </Nav.Link>

                        {/* Patient Education Navigation Link */}
                        <Nav.Link as={Link} to={EduView} onClick={handleNav}>
                            Patient Education
                        </Nav.Link>

                        {/* Massage Therapy Navigation Link */}
                        <Nav.Link as={Link} to={MassageView} onClick={handleNav}>
                            Massage Therapy
                        </Nav.Link>

                        {/* Contact Navigation Link */}
                        <Nav.Link as={Link} to={ContactView} onClick={handleNav}>
                            Contact Us
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};
