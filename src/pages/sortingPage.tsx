import Header from '../components/header.tsx';
import Graph from "../components/graph.tsx";
import { useEffect, useState } from "react";
import {RingLoader} from 'react-spinners'
import '../Styles/sortingPage.css'

const SortingPage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadingTimer = setTimeout(() => {
            setLoading(false);
        }, 4500);

        return () => {
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
                <div className={`loader`}>
                    <RingLoader color="white" size={150} />
                </div>
            )}
        </>
    );
}

export default SortingPage;
