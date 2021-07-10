import React, { useEffect, useState ,useReducer } from 'react';
import history from '../history';
import {useDispatch, useSelector} from 'react-redux';
import '../CSS/HomePage.css'
import Axios from 'axios';
const reducer = (state, action) => {
  switch(action.type) {
    case "increment":
      return state + 1;
    default:
      return state;
  }
}
function HomePage(props) 
{
    const [phones, setPhones] = useReducer(reducer, 0);
    const [laptops, setlaptops] = useReducer(reducer, 0);
    const [appliances, setappliances] = useReducer(reducer, 0);
    const [egames, setegames] = useReducer(reducer, 0);
    const [progress, setProgress] = useReducer(reducer, 0);
    useEffect(() => {
        let interval, interval1, interval2, interval3;
        interval = setInterval(() => {
            if(phones < 300) setPhones({type: "increment"});
            if(laptops < 1284) setlaptops({type: "increment"});
            if(appliances < 2049) setappliances({type: "increment"});
            if(egames < 421) setegames({type: "increment"});
        }, progress/2000);
        return () => {
            clearInterval(interval);
        }
    })
    return (
        <div className="HomePage-Container">
            <div className="main-title">
                <h1 className="main-title-h1"> All The Technology You Need </h1>
                <h2 className="main-title-h2"> In one single place. </h2>
                <div className="row main-title-quantity-row">
                    <div className="col main-title-quantity-column">
                        <h5 className="main-title-quantity"> {phones} </h5> 
                        <h7 className="main-title-quantity"> Phones </h7> 
                    </div>
                    <div className="col main-title-quantity-column">
                        <h5 className="main-title-quantity"> {laptops} </h5> 
                        <h7 className="main-title-quantity"> Laptops </h7> 
                    </div>
                    <div className="col main-title-quantity-column">
                        <h5 className="main-title-quantity"> {appliances} </h5> 
                        <h7 className="main-title-quantity"> Home Appliances</h7> 
                    </div>
                    <div className="col main-title-quantity-column">
                        <h5 className="main-title-quantity"> {egames} </h5> 
                        <h7 className="main-title-quantity"> E-Games </h7> 
                    </div>
                </div>
                <div className="sign-home-btn home-shopnow-btn">
                    <a href="/Signin" className="btn btn-primary btn-lg active home-btn" role="button" aria-pressed="true">Shop Now ></a>
                </div>
            </div>
        </div>
    );
}
export default HomePage;