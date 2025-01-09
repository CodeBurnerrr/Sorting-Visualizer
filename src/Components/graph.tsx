// import {useEffect, useState} from "react";
// import Box from '@mui/material/Box';
// import Slider from '@mui/material/Slider';
// import '../Styles/sortingPage.css'
//
// const Graph = ()=> {
//
//     function getRandomNumber(min: number, max: number): number {
//         return Math.floor(Math.random() * (max - min + 1)) + min;
//     }
//
//     const [array, setArray] = useState<number[]>([]);
//     const [length, setLength] = useState<number>(50);
//     const [width, setWidth] = useState<number>((window.innerWidth - 700) / 50);
//     const [windowsWidth, setWindowsWidth] = useState<number>(0);
//
//
//     window.addEventListener("resize", () => {
//         setWindowsWidth(window.innerWidth);
//         setWidth((windowsWidth - (length * 6)) / (length))
//
//     });
//
//
//     function generateArray() {
//         const tempArray: number[] = Array.from({length: length}, () => getRandomNumber(5, 130));
//         setArray(tempArray);
//     }
//
//
//     const handleChange = (_event: Event, newValue: number | number[]) => {
//         if (typeof newValue === "number") {
//             setLength(newValue);
//             setWidth((windowsWidth - (700)) / (newValue));
//         }
//     };
//
//
//     useEffect(() => {
//         setWindowsWidth(window.innerWidth);
//         console.log(windowsWidth);
//     }, []);
//
//
//     useEffect(() => {
//         generateArray();
//     }, [length]);
//
//
//     function bubbleSort() {
//         for (let i = 0; i < array.length; i++) {
//             for (let j = 0; j < array.length; j++) {
//                 if (array[j + 1] < array[j]) {
//                     const temp = array[j]
//                     array[j] = array[j + 1];
//                     array[j + 1] = temp;
//                 }
//             }
//         }
//         console.log(array)
//
//     }
//
//
//     return (
//         <>
//             <div className="header">
//                 <button className="button" onClick={() => {
//                     generateArray()
//                 }}>Generate Array
//                 </button>
//                 <button className="button" onClick={bubbleSort}>Bubble Sort</button>
//                 <Box sx={{width: 150}} className="slider">
//                     <Slider
//                         defaultValue={length}
//                         step={10}
//                         value={length}
//                         onChange={handleChange}
//                         marks
//                         min={10}
//                         max={120}
//                     />
//                 </Box>
//                 <div className="lengthBox">{length}</div>
//             </div>
//             <div className="graphContainer">
//                 <div className="Graph">
//                     {array.map((item: number, index: number) => (
//                         <div key={index} className="Bar" style={{height: `${item * 5}px`, width: `${width}px`}}>
//
//                         </div>
//                     ))}
//                 </div>
//             </div>
//
//         </>
//     )
// }
//
// export default Graph;


import {useState, useEffect} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../redux/store.ts";

const Graph = () => {


    const length = useSelector((state: RootState) => state.length.value)
    const array = useSelector((state: RootState) => state.array.value)

    const [width, setWidth] = useState<number>((window.innerWidth - 700) / 50);
    const [windowsWidth, setWindowsWidth] = useState<number>(0);

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
                    {array.map((item: number, index: number) => (
                        <div key={index} className="Bar" style={{height: `${item * 5}px`, width: `${width}px`}}></div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Graph;