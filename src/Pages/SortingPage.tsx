import Header from '../components/header.tsx';
import Graph from "../components/graph.tsx";
import { useEffect, useState } from "react";
import { PacmanLoader } from 'react-spinners';
import '../Styles/sortingPage.css'

const SortingPage = () => {
    const [isSliding, setIsSliding] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsSliding(true);
        }, 3500);

        const loadingTimer = setTimeout(() => {
            setLoading(false);
        }, 4500);


        return () => {
            clearTimeout(timer);
            clearTimeout(loadingTimer);
        };
    }, []);

    return (
        <>
            {!loading ? (
                <>
                    <Header />
                    <Graph />
                </>
            ) : (
                <div className={`loader ${isSliding ? 'slide-out' : ''}`}>
                    <PacmanLoader color="#3ac7ff" size={45} />
                </div>
            )}
        </>
    );
}

export default SortingPage;
