import {ReactComponent as CaretIcon} from './icons/caret.svg'
import {ReactComponent as LoginIcon} from './icons/login.svg'
import {ReactComponent as PlusIcon} from './icons/plus.svg'

import React, {useState} from 'react'; 
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';


import {CSSTransition} from 'react-transition-group';
import DropdownMenu from './components/LandingPage/DropdownMenu'
import Car from './components/Car/Car'
import {Cartype, Pincode, Contact} from './components/Car/Car-Card/Cardetails'
// import CardNav from './components/Cardnav'
import {Main} from './components/LandingPage/Main'
import User from "./userDetails";


function App (){
    const user = new User();

    return (
        <div>
        <Navbar> 
            <NavItem icon = {<CaretIcon />} >
                <DropdownMenu />
            </ NavItem>   
            <NavItem icon = {<PlusIcon />}  />
            <NavItem icon =  {<LoginIcon />}  />
           
         
        </Navbar> 
        <Router>
            <Routes>
                <Route path = "/" element = {<Main user = {user} />} />
                <Route path = "/car" element = {<Car user = {user}/>} >
                    <Route path = "insurance" element = {<Cartype user = {user} /> } />
                    <Route path = "pincode" element = {<Pincode user = {user} />}  />
                    <Route path = "contact" element = {<Contact user = {user} />}  />
                </Route>
            </Routes>
        </Router> 
        </div>
    );
}


function Navbar(props){
    return(
        <nav className="navbar">
            <ul className="navbar-nav">
                {props.children}

            </ul>
        </nav>    
    );
}

function NavItem(props){

    const [open, setOpen] = useState(false);

    return(
        <li className = "nav-item">
            
            <a href="#" className="icon-button" onClick={() => {setOpen(!open)}}>
                {props.icon}
            </a>

            {open && props.children}
        </li>    
    );
}

export default App;