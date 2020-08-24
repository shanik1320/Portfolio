import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./style.css";


function Navigation() {
    return (
        <div>

            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home">Shanik Hernandez</Navbar.Brand>
                <Nav className="mr-auto"  >
                    <Nav.Link href="#home">About</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    <Nav.Link href="#contact">Contact Me</Nav.Link>
                </Nav>
                {/* <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-primary">Search</Button>
                </Form> */}
            </Navbar>

        </div>
    )
}

export default Navigation;