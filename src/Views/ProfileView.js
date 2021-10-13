import React, {Component} from 'react';
import '../CSS/HomePage.css'
import NavBar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Profile from '../Components/Profile/Profile';
class ProfileView extends Component 
{
	render() 
    {
		return (
			<div className="signin-container">
				<div className="blur-bg">
					<NavBar bg="custom"/>
					<Profile />
					<Footer />
				</div>
			</div>
		)
	}
}
export default ProfileView;