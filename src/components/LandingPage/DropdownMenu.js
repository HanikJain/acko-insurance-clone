import {ReactComponent as CaretIcon} from '../../icons/caret.svg'
import {ReactComponent as LoginIcon} from '../../icons/login.svg'
import {ReactComponent as PlusIcon} from '../../icons/plus.svg'
import {ReactComponent as CogIcon} from '../../icons/cog.svg'
import {ReactComponent as ChevronIcon} from '../../icons/chevron.svg'
import {ReactComponent as ArrowIcon} from '../../icons/arrow.svg'
import {ReactComponent as CarIcon} from '../../icons/car.svg'
import {ReactComponent as MotorcycleIcon} from '../../icons/motorcycle.svg'
import {ReactComponent as HealthcareIcon} from '../../icons/health-care.svg'
import {ReactComponent as InsuranceIcon} from '../../icons/insurance.svg'
import {ReactComponent as UserIcon} from '../../icons/man-user.svg'
import {ReactComponent as PaymentIcon} from '../../icons/payment.svg'


import React, {useState} from 'react'; 
import {CSSTransition} from 'react-transition-group';




function DropdownMenu() {

    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }  

    function DropdownItem(props) {
     
        return(
            <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className="icon-button">{props.leftIcon} </span>
                {props.children}
                <span className="icon-right">{props.rightIcon} </span>
            </a>
        );
    }

    return(
        <div className="dropdown" style={{height: menuHeight}}>
            <CSSTransition
             in = {activeMenu === 'main'}
             unmountOnExit
             timeout = {400}
             classNames="menu-primary"
             onEnter = {calcHeight}
             >
                <div className="menu">
                {/* <DropdownItem > Menu</DropdownItem> */}
                    <DropdownItem leftIcon = {<UserIcon />} > My profile</DropdownItem>
                    <DropdownItem  leftIcon = {<CogIcon />}  rightIcon = {<ChevronIcon />} goToMenu = 'settings' >
                       Settings
                    </DropdownItem>
                    <DropdownItem goToMenu = 'insurance' leftIcon = {<InsuranceIcon />} rightIcon = {<ChevronIcon />}> Insurance</DropdownItem>

                </div>
            </CSSTransition>

            <CSSTransition
             in = {activeMenu === 'settings'}
             unmountOnExit
             timeout = {400}
             classNames="menu-secondary"
             onEnter = {calcHeight}
             >
                <div className="menu">
                    <DropdownItem leftIcon = {<ArrowIcon />}  goToMenu = 'main' >Back</DropdownItem>
                    <DropdownItem leftIcon = {<UserIcon />} > Account </DropdownItem>
                    <DropdownItem leftIcon = {<PaymentIcon />} > Payment </DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition
             in = {activeMenu === 'insurance'|| activeMenu === 'insurance-back'}
             unmountOnExit
             timeout = {400}
             classNames={activeMenu === 'insurance-back'? "menu-secondary-back" : "menu-secondary"}
             onEnter = {calcHeight}
             >
                <div className="menu">
                    <DropdownItem leftIcon = {<ArrowIcon />}  goToMenu = 'main' >Back</DropdownItem>
                    <DropdownItem leftIcon = {<CarIcon />} rightIcon = {<ChevronIcon />} goToMenu = 'car' > Car </DropdownItem>
                    <DropdownItem leftIcon = {<MotorcycleIcon />} rightIcon = {<ChevronIcon />} goToMenu = 'bike' > Bike </DropdownItem>
                    <DropdownItem leftIcon = {<HealthcareIcon />} rightIcon = {<ChevronIcon />} goToMenu = 'settings' > Health </DropdownItem>
                </div>
            </CSSTransition>


            <CSSTransition
             in = {activeMenu === 'car'}
             unmountOnExit
             timeout = {400}
             classNames="menu-tertiary"
             onEnter = {calcHeight}
             >
                <div className="menu">
                    <DropdownItem leftIcon = {<ArrowIcon />}  goToMenu = 'insurance-back' >Back</DropdownItem>
                    <DropdownItem leftIcon = {<CarIcon />}  > Comprehensive Car Insurance </DropdownItem>
                    <DropdownItem leftIcon = {<MotorcycleIcon />} > Third Party Car Insurance </DropdownItem>
                    <DropdownItem leftIcon = {<HealthcareIcon />}  > Third Party Car Insurance  </DropdownItem>
                    
                </div>
            </CSSTransition>

        </div>    
    );
}


export default DropdownMenu;