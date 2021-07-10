import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import '../CSS/NavBar.css';
import logo from '../images/logo.png';
import ProfileNavComp from './ProfileNavComp'

class NavBar extends Component 
{
	render() {
		return (
            <div className="navbar-parent">
                <Navbar expand='lg'>
                    <Navbar.Brand href="/"><img src={logo} height="" alt="logo" className="d-inline-block align-top logoc"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='mr-auto'>
                        </Nav>
                        <div className="topmenu">
                            <a href="" className="navbar-btn">Sales</a>

                            <a href="" className="navbar-btn">Why Us?</a>

                            <a href="" className="navbar-btn">Contact Us</a>

                            <a href="" className="navbar-btn">About</a>
                        </div>



 			            <ProfileNavComp />
                    </Navbar.Collapse>
                </Navbar>
            </div>
		)
	}
}
export default NavBar;