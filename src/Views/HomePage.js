import React, {Component} from 'react';
import '../CSS/HomePage.css'
import NavBar from '../Components/Navbar';
import HomePage from '../Components/HomePage';
import SecondContainer from '../Components/Homepage/SecondContainer';
import Footer from '../Components/Footer';

class HomePageView extends Component 
{
	render() 
    {
		return (
			<div className="homepage-container">
				<div className="first-container">
					<NavBar/>
					<HomePage />
				</div>
				{SecondContainer()}
				{Footer()}
			</div>
		)
	}
}
export default HomePageView;