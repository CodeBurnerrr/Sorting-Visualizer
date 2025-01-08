import '../Styles/home.css';
import icon from '../assets/right.svg';
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
import Particle from "../Components/particles.tsx";

const Home = () => {
    const [isSliding, setIsSliding] = useState(false);
    const navigate = useNavigate();

    function handleRedirect() {
        setIsSliding(true);
        setTimeout(() => {
            navigate('/sorting');
        }, 500);
    }

    return (
        <div className={`heading ${isSliding ? 'slide-out' : ''}`}>
            <center>Sorting <br/> Visualizer</center>
            <button className="next-button" onClick={handleRedirect}>
                <img src={icon} alt="Right Icon" style={{width:'20px'}} />
            </button>
            <Particle />
        </div>
    );
}

export default Home;

