import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import '../../CSS/Store.css';
class CategoryBar extends Component 
{
    constructor(props){
        super(props);
    }
	render() {
		return (
            <div className="category-nav-bar-container">
                <a href="/" className="category-nav-bar-link">Laptops and Computers</a>
                <a href="/" className="category-nav-bar-link">TV's and Home Theater</a>
                <a href="/" className="category-nav-bar-link">Mobile Phones</a>
                <a href="/" className="category-nav-bar-link">Portable Electronics</a>
                <a href="/" className="category-nav-bar-link">Home Appliances</a>
                <a href="/" className="category-nav-bar-link">Gaming</a>
                <a href="/" className="category-nav-bar-link">Home Networking and Security</a>
            </div>
		)
	}
}
export default CategoryBar;