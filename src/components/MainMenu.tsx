import React from 'react';
import {NavLink} from "react-router-dom";
import {Container, Nav, Navbar} from 'react-bootstrap';

export const MainMenu = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/"><h1>Книга контактов</h1></Navbar.Brand>
                <Nav className="me-auto">
                    <NavLink to="/groups" className="me-4">Группы</NavLink>
                    <NavLink to="/favorite">Избранное</NavLink>
                </Nav>
            </Container>
        </Navbar>
    );
}
