import React, { useEffect, useState } from 'react';
import '../Header/header.css';
import {Link} from 'react-router-dom';
import {Navbar, Nav, Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [showMenu, setShowMenu] = useState('none');

    let handleClick = () => {
        if(showMenu === 'none') return setShowMenu('inherit')
        else return setShowMenu('none')
    }
    return(
        <div className="header">
            <Navbar bg="transparent" expand="lg">
                <div className="container">
                    <Navbar.Brand href="#home">Winzotel Properties</Navbar.Brand>
                    <FontAwesomeIcon className="hamburger" icon={faHamburger}  onClick={handleClick}/>
                    <Nav className="ml-auto desktop">
                        <Link to='/'>
                            Home
                        </Link>                        
                        <Link to='/about'>
                            About
                        </Link>
                        <Link>
                            Properties
                        </Link>
                        <Link to='/contact'>
                            Contact
                        </Link>
                        <Button variant="outline-success">Call Now</Button>
                    </Nav>
                    <Nav className="mobile" style={{display : `${showMenu}`}}>
                        <Link to='/'>
                            Home
                        </Link>                        
                        <Link to='/about'>
                            About
                        </Link>
                        <Link>
                            Properties
                        </Link>
                        <Link to='/contact'>
                            Contact
                        </Link>
                        <Button variant="outline-success">Call Now</Button>
                    </Nav>
                </div>  
            </Navbar>
        </div>
    )
}

export default Header;