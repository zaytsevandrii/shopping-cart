import React from "react"
import { Button, Container, Navbar, Modal } from "react-bootstrap"

const NavbarComponent = () => {
    return (
        <Navbar>
            <Navbar.Brand href="/shopping-cart">Ecommerce store</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Button>Cart o Items</Button>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarComponent
