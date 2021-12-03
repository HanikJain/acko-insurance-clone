import {ReactComponent as CarIcon} from '../../icons/car.svg'
import {ReactComponent as MotorcycleIcon} from '../../icons/motorcycle.svg'
import {ReactComponent as HealthcareIcon} from '../../icons/health-care.svg'
import {ReactComponent as RightArrowIcon} from '../../icons/right-arrow.svg'

import "./main.css";


import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, {useState} from 'react'; 




function CardIcon(props){
    
    return (
        <li className = 'card-icon-item'> 
            <div>
                <a href="" >{props.children}</a>
            </div>
            <div>
                {props.name}
            </div>
        </li>
    );
} 


function InputField(props) {
    const [name, setName] = useState("");
    const user = props.user;

    function handleChange(event){
        setName(event.target.value); 
    }
    
    function handleClick(){
        if(name !== ""){
            user.updateUserCarNumber({value : name, location: "/"});
            console.log(user.getUserDetails());
            console.log(user.getUserDetailsArray());
        }
    }

    return(
        <div className = "card-input">
            <form action="/car/insurance">
            <div className = "input-field">
                <input type="text" name={props.type}   onChange={handleChange} id = "userInput"
                placeholder={props.type === "Car" || props.type === "Bike"? `Enter your ${props.type} number`: "Enter your age"}
                />
               <Link to = "/car/insurance"> <button type="submit" onClick = {handleClick} ><RightArrowIcon /></button></Link>
            </div>
            </form>
            <p className = "card-input-msg"></p>
            
        </div>
    );
}

function Main(props) {
   

    return (
        <div className="main">
            <div className="header">
                <h2>Insurance made easy</h2>
                <p>Zero commission. Zero paperwork</p>
            </div>
            <div className = "card">
                <ul className = "card-icons" >
                    <CardIcon name = "Car"  ><CarIcon/></CardIcon>
                    <CardIcon name = "Bike"  ><MotorcycleIcon /></CardIcon>
                    <CardIcon name = "Health"><HealthcareIcon /></CardIcon>
                </ul>
                            
                <InputField type = "Car" user = {props.user}>  </InputField>
                
            </div>

        </div>
    );
}

export  {Main};