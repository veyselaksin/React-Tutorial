import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect } from 'react'

function CustomNavbar() {
    const [activeLink, setActiveLink] = useState('home')
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', onScroll)

        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [])

    return (
        <Navbar expand='lg' className={scrolled ? 'scrolled' : ''}>
            <Container>
                <Navbar.Brand href='#home'>
                    <img alt='Logo' src='' width='45' height='45' className='d-inline-block align-top' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'>
                    <span className='navbar-toggle-icon'></span>
                </Navbar.Toggle>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto'>
                        <Nav.Link href='#home' className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>
                            Home
                        </Nav.Link>
                        <Nav.Link href='#skills' className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}>
                            Skills
                        </Nav.Link>
                        <Nav.Link href='#projects' className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}>
                            Projects
                        </Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                        <div className='social-links'>
                            <a href='https://www.linkedin.com/in/brandon-lee-1b1b1b1b1/' target='_blank' rel='noopener noreferrer'>
                                <FontAwesomeIcon icon='fa-brands fa-linkedin' />
                            </a>
                            <a href='https://www.facebook.com/'>
                                <FontAwesomeIcon icon='fa-brands fa-facebook' />
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
