import Tilt from 'react-parallax-tilt';
import './Logo.css';


const Logo = () => {
    return (
        <div className="mh4 mt0 mb3 logoContainer">
            <Tilt tiltReverse={true} scale={1.3} className="br-pill shadow-2 logo">
                <img className="LogoImgInside" src='smartBrain.png' />
            </Tilt>
        </div>
    );
}

export default Logo;