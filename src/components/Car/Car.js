import "./car.css";
import {ReactComponent as ArrowIcon} from '../../icons/arrow.svg'
// import {userDetails, carInsuranceDetails} from "../../userDetails";
import CardNav from './Car-Card/Cardnav';
import CardEdit from './Car_edit';
// import {Cartype} from './Cardetails'

import { Outlet, useLocation} from 'react-router-dom';

function editCard(text){
return <CardEdit key={text.location} input={text.value} location = {text.location}  />

}

function Car(props){
    const user = props.user;
    const userArray = user.getUserDetailsArray()
    const location = useLocation();
    console.log(location.pathname);

return (
    <div className="car-card">

        <div className="card-form">
            <CardNav cardNavDetails = "1/10" loc= {location.pathname} />
            <div className = "card-details"> 
           <Outlet />
            </div>
        </div>
        <div className = "card-edit">
        {userArray.map(editCard)}
        </div>
        

        
    
    </div>
);
}




export default Car;