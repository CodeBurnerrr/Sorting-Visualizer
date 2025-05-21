import '../Styles/home.css';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
// import Particle from "../components/particles.tsx";
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
            {/*<div className={'animate-pulse'}>*/}
            {/*    <Particle/>*/}
            {/*</div>*/}


            <div className={`heading ${isSliding ? 'slide-out' : ''} flex flex-col h-screen w-full items-center justify-center`}>
                <div className="">
                    <span
                        className="text-7xl absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-2xl from-blue-500 via-teal-500 to-pink-500 bg-clip-text box-content font-extrabold text-transparent text-center select-none ">
                    Sorting <br/> Visualizer
                  </span>
                    <h1 className="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text font-extrabold text-transparent text-center select-auto text-7xl ">
                        Sorting <br/> Visualizer
                    </h1>
                </div>
                <button className="absolute text-7xl text-white p-1 brounded-2xl mt-15 hover:mt-4 bg-gradient-to-r blur-2xl from-blue-500 via-teal-500 to-pink-500 bg-clip-text box-content font-extrabold text-transparent text-center select-none " onClick={handleRedirect}>
                    ➩
                </button>
                <button className=" relative top-0 text-7xl text-white p-1 mt-1.5 brounded-2xl bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text font-extrabold text-transparent text-center select-auto animate-pulse " onClick={handleRedirect}>
                    ➩
                </button>

                <div className="absolute bottom-5 flex flex-row">
                    <div className="mr-8">
                        <a
                            href="https://github.com/CodeBurnerrr/Algorithm-Visualizer"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={githubIcon} alt="GitHub Icon"/>
                        </a>
                    </div>

                    <div className="ml-8">
                        <a
                            href="https://www.linkedin.com/in/dhruvmehta85/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={linkedinIcon} alt="LinkedIn Icon"/>
                        </a>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Home;

