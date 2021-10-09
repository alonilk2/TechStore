import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import '../../CSS/Store.css';
import CartImage from '../../images/cart.png';
import CategoryImage from '../../images/categories.png';

import {IoArrowForward} from 'react-icons/io5';

function SearchBar() {
    return (
    <div className="store-search-container">
        <div className="webflow-style-input-transparent-search">
            <input className="" type="password" placeholder="I Want to buy..." required ></input>
            <button type="submit">
                <IoArrowForward />
            </button>
            <div className="inner-grad"> </div>
        </div>
    </div>
    )
}
class CategoryBar extends Component 
{
    constructor(props){
        super(props);
    }
	render() {
		return (
            <div className="category-nav-bar-container">
                <SearchBar />
                <div className="categories-btn-col">
                    <img src={CategoryImage} className="category-menu-icon" />
                    <h5 className="categories-title"> Categories </h5>
                </div>
                <div className="categories-btn-col">
                    <img src={CartImage} className="category-cart-icon" />
                    <h5 className="categories-title"> 0 items </h5>
                </div>
            </div>
		)
	}
}
export default CategoryBar;