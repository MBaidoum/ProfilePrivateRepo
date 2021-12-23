import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const NavbarProfile = () => {

    return (
        <Navbar expand="lg" variant="light">
            <Container>
                <Navbar.Brand href="#home">                <img src={process.env.PUBLIC_URL + '/img/MiniMintLogo.png'} width="60" height="60" alt="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="d-flex align-items-center justify-content-center ms-auto">
                        <NavDropdown title={
                            <div className="profile-header">
                                <img src={process.env.PUBLIC_URL + '/img/profile.jpg'} width="20" height="20" alt="profile" />
                            </div>} id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#">Your Profile</NavDropdown.Item> 
                            <NavDropdown.Item href="#">Settings</NavDropdown.Item>                           
                            <NavDropdown.Item href="#">Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarProfile;