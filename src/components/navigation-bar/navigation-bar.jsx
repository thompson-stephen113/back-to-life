import { useState } from "react";
import { NavBar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom"

import "./navigation-bar.scss"

const NavigationBar = () => {
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded(!expanded);
    };

    const handleNav = () => {
        setExpanded(false);
    }

    return (
        <NavBar expand="lg" expanded={expanded} onToggle={handleToggle}>
            <Container>
                <NavBar.Brand as={Link} to="/" onClick={handleNav}>
                    
                </NavBar.Brand>
            </Container>
        </NavBar>
    )
}
