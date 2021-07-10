import React, {Component} from 'react';
import '../CSS/HomePage.css'
import NavBar from '../Components/Navbar';
import HomePage from '../Components/HomePage';

class HomePageView extends Component 
{
	render() 
    {
		return (
			<div>
				<NavBar />
				<HomePage />
			</div>
		)
	}
}
export default HomePageView;