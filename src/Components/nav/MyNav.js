import React from "react";
import {Navbar, Container, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'


export default class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand><Link to='/'>PEPPEP</Link></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link><Link to='/home'>Forside</Link></Nav.Link>
                        <Nav.Link><Link to='/vl'>VL</Link></Nav.Link>
                        <Nav.Link><Link to='/biler'>Biler</Link></Nav.Link>
                        <Nav.Link><Link to='/drivers'>Chauffører</Link></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        )
    }
}