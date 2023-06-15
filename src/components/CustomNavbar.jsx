import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function CustomNavbar() {
    return (
        <Navbar expand='lg'>
            <Container>
                <Navbar.Brand href='#home'>
                    <img alt='Logo' src='' width='45' height='45' className='d-inline-block align-top' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'>
                    <span className='navbar-toggle-icon'></span>
                </Navbar.Toggle>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto'>
                        <Nav.Link href='#home'>Home</Nav.Link>
                        <Nav.Link href='#skills'>Skills</Nav.Link>
                        <Nav.Link href='#projects'>Projects</Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                        <div className='social-links'>
                            <a href='https://www.linkedin.com/in/brandon-lee-1b1b1b1b1/' target='_blank' rel='noopener noreferrer'>
                                <FontAwesomeIcon icon='fa-brands fa-linkedin' />
                            </a>
                        </div>
                        <button className='vvd' onClick={() => console.log('Hi')}></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default CustomNavbar
