import { IoMdLogOut } from "react-icons/io";
import { MDBBtn } from 'mdb-react-ui-kit';

const Navigation = ({ onRouteChange, isLoggedIn }) => {

    if (isLoggedIn) {
        return (
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }} className="navBar">
                <MDBBtn color='black' className="f3 light-gray pointer br3 nav-Buttons" onClick={() => onRouteChange('signIn')}>
                    <span className="text">Sign Out</span>
                    <IoMdLogOut className="light-gray pl2 pb1 SignOutFont" />
                </MDBBtn>
            </nav>
        )

    } else {
        return (
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }} className="navBar" />
        )

    }

}

export default Navigation;

