import React, {useState} from 'react';
import { history } from '../../history';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import '../../CSS/HomePage.css';
import SecurityIcon from '../../images/SecurityIcon.jpg';
import DeliveryIcon from '../../images/DeliveryIcon.jpg';
import phones from '../../images/phones.jpg';
import laptops from '../../images/laptops.png';
import egames from '../../images/egames.jpg';
import appliances from '../../images/appliances.jpg';

const SalesImage = (image, paragraph, position) => {
    let pos = String(position);
    let paragraphTxt = String(paragraph);
    return (
        <div className="col sales-col">
            <img className="sales-img-1" src={image} />
            <div className={"sales-info "+pos}>
                <p className={"sales-paragraph"}> {paragraphTxt} </p>
                <a href="/Signin" className={"btn btn-primary btn-lg active signin-btn sales-btn"} role="button" aria-pressed="true">Shop Now...</a>
            </div>

        </div>
    )
}

function SecondContainer(props) 
{
    return (
        <div className="second-container">
            <div className="row security">
                <div className="col">
                    <img src={SecurityIcon} className="security-icon-left" />
                </div>
                <div className="col security-text">
                    <h2 className="security-title"> We keep your data safe </h2>
                    <p className="security-paragraph-right"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet eros et urna pulvinar sodales. Sed gravida erat vel arcu elementum elementum. Phasellus pretium urna lacus, elementum mattis ipsum varius ac. Aliquam id tincidunt dolor, malesuada euismod enim. Morbi vitae leo lobortis, lobortis elit a, tincidunt ex. Duis pharetra turpis in nunc mollis mattis vel vel mi. </p>
                </div>
            </div>
            <div className="row security">
                <div className="col security-text">
                    <h2 className="security-title-left"> We guarantee the fastest delivery </h2>
                    <p className="security-paragraph-left"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet eros et urna pulvinar sodales. Sed gravida erat vel arcu elementum elementum. Phasellus pretium urna lacus, elementum mattis ipsum varius ac. Aliquam id tincidunt dolor, malesuada euismod enim. Morbi vitae leo lobortis, lobortis elit a, tincidunt ex. Duis pharetra turpis in nunc mollis mattis vel vel mi. </p>
                </div>
                <div className="col">
                    <img src={DeliveryIcon} className="security-icon-right" />
                </div>
            </div>
            <div className="row sales">
                <div className="row">
                    {SalesImage(phones, "The best smartphones, from the best brands, in the best prices.", "top-left")}
                    {SalesImage(laptops, "Get yourself a new work station for your home and business, from the top global brands", "top-right")}
                </div>
                <div className="row">
                    {SalesImage(egames, "Games are life. Get yourself and your children a new way to pass the day !", "bottom-left")}
                    {SalesImage(appliances, "The richest variety of home appliances in the world ! Best prices and longest warranty periods. period !", "bottom-right")}
                </div>
            </div>
           
        </div>
    )
}
export default SecondContainer;