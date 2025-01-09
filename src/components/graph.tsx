import {useState, useEffect} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../redux/store.ts";
import { motion } from "motion/react"

const Graph = () => {


    const length = useSelector((state: RootState) => state.length.value)
    const array = useSelector((state: RootState) => state.array.value)

    const [width, setWidth] = useState<number>((window.innerWidth - 700) / 50);
    const [windowsWidth, setWindowsWidth] = useState<number>(0);

    const springAnimation = {
        type: "spring",
        damping: 20,
        stiffness: 300
    };

    window.addEventListener("resize", () => {
        setWindowsWidth(window.innerWidth);
        setWidth((windowsWidth - (length * 6)) / (length))

    });

    useEffect(() => {
        setWidth((windowsWidth - (700)) / (length));
    }, [length])

    useEffect(() => {
        setWindowsWidth(window.innerWidth);
        console.log(windowsWidth);
    }, []);


    return (
        <>
            <div className="graphContainer">
                <div className="Graph">
                    {array.arr.map((item) => (

                        <motion.div
                            key={item.id}
                            layout transition={springAnimation}
                            className= {`Bar ${item.style}`}
                            style={{height: `${item.value * 5}px`, width: `${width}px`}}
                            id={item.id}

                        ></motion.div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Graph;