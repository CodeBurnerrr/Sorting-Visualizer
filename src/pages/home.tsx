import '../Styles/home.css';
import icon from '../assets/images/right.svg';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import Particle from "../components/particles.tsx";
import githubIcon from '../assets/images/icons8-github-48.svg';
import linkedinIcon from '../assets/images/icons8-linkedin.svg';

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
        <>
            <div className={`heading ${isSliding ? 'slide-out' : ''}`}>
                <center>Algorithm <br/> Visualizer</center>
                <button className="next-button" onClick={handleRedirect}>
                    <img src={icon} alt="Right Icon" style={{width: '20px'}}/>
                </button>

                <Particle/>
            </div>
            <div className="logo-div">
                <div className="logo logo-1">
                    <a
                        href="https://github.com/CodeBurnerrr/Algorithm-Visualizer"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={githubIcon} alt="GitHub Icon"/>
                    </a>
                </div>

                <div className="logo">
                    <a
                        href="https://www.linkedin.com/in/dhruvmehta85/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={linkedinIcon} alt="LinkedIn Icon"/>
                    </a>
                </div>
            </div>


        </>
    );
}

export default Home;

