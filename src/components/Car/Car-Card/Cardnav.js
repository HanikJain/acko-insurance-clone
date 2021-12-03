import {ReactComponent as ArrowIcon} from '../../../icons/arrow.svg'
import User from "../../../userDetails";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "./cardnav.css";
import React, {useState} from 'react'; 



function CardNav(props){
    const [msg, setMsg] = useState("");
    if(props.loc === "/car/pincode"){
        // let x = carInsuranceDetails["pincode"]
       
    }
   
    return (
        <div className="card-nav">
            <div>
                <Link to="/" > 
                    <button className="back-btn"><ArrowIcon /> </button> 
                </Link> 
            </div>


            <div className = "card-nav-details">
                {msg}
            </div>
           
        </div>
    );
}

export default CardNav;


