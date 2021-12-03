import { Link, useLocation } from 'react-router-dom';
import "./cartype.css"
import {useState} from "react";

import {ReactComponent as RightArrowIcon} from '../../../icons/right-arrow.svg'


function Cartype(props) {
    const user = props.user;
    const location = useLocation();

    function handleClick(e){
        user.updateUserInsuranceType({value : e.target.id, location: location.pathname});   
    }
  
    return (
        <div style = {{height: '50%', width: '100%'}}>
            <h1 style = {{color: 'black'}}>
                What type of insurance you want?
            </h1>
        <div className = "card-type">
            <form action="">
                <Link to="/car/pincode">
                <button id ="personal-insurance" className="btn-insurance" onClick={handleClick} >
                    personal-insurance
                </button>
                </Link>
            </form>
            <form action="">
                <Link to="/car/pincode">
                <button id ="private-insurance"className="btn-insurance" onClick={handleClick} >
                    private-insurance
                </button>
                </Link>
            </form>
        </div>    
        </div>
    );
}


function Pincode(props){
    const location = useLocation();
    const [pincode, setPincode] = useState("");
    const [pincodeLength, setPincodeLength] = useState(true);

    const user = props.user;

    function handleChange(event){
        setPincode(event.target.value); 
    }
    
    function handleClick(){
        if(pincode.length >= 6  ){
            user.updateUserPincode({value : pincode, location: location.pathname});
            console.log(user.getUserDetails());
            console.log(user.getUserDetailsArray());
        }
        else{
            setPincodeLength(false);
        }
    }

    return (
    <form action="/car/contact" id = "form-pincode">
        <div>
            <h1 style = {{color : "black", marginBottom:  0}}>
                Enter your Pincode.
            </h1>
            <p style = {{color : "red", marginTop: 0, visibility: !pincodeLength ? "visible" : "hidden"}} >
                Invalid Pincode
            </p>    

        </div>

        <div className = "input-field" style = {{margin : 0}} >
            <input type="text" onChange = {handleChange} id = "userInput" name = "pincode" />
            <Link to = "/car/contact">
             <button type="submit" onClick = {handleClick} ><RightArrowIcon /></button>
            </Link>
        </div>
    </form>
    );
           
}


function Contact(props){
    const location = useLocation();
    const [number, setNumber] = useState("");
    const [numberLength, setNumberLength] = useState(true);

    const user = props.user;

    function handleChange(event){
        setNumber(event.target.value); 
    }
    
    function handleClick(){
        if(number.length === 10  ){
            user.updateUserNumber({value : number, location: location.pathname});
            console.log(user.getUserDetails());
            console.log(user.getUserDetailsArray());
        }
        else{
            setNumberLength(false);
        }
    }

    return (
    <form action="/" id = "form-pincode">
        <div>
            <h1 style = {{color : "black", marginBottom:  0}}>
                Enter your Number.
            </h1>
            <p style = {{color : "red", marginTop: 0, visibility: !numberLength ? "visible" : "hidden"}} >
                Invalid Number
            </p>    

        </div>

        <div className = "input-field" style = {{margin : 0}} >
            <input type="text" onChange = {handleChange} id = "userInput" name = "pincode" />
            <Link to = "/">
             <button type="submit" onClick = {handleClick} ><RightArrowIcon /></button>
            </Link>
        </div>
    </form>
    );
           
}

export {Cartype, Pincode, Contact}