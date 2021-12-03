
import "./car_edit.css";
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';
import {ReactComponent as EditButtonIcon} from '../../icons/edit-button.svg'

function CarEdit(props){
    if(props.input === "")
    return null;

    return(
        <div className = "car-edit-car" >
            <Link to = {props.location}>
                <a> 
                    <span className = "edit-text">{props.input}</span>
                    <span className="edit-icon"> <EditButtonIcon /> </span>
                </a>
            </Link>
        </div>
    );
}

export default CarEdit;