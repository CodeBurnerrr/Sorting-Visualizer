import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/store.ts";
import {update as updateLength} from "../redux/slices/arrayLengthSlice.ts";
import {update as updateArray} from "../redux/slices/arraySlice.ts";
import {useEffect, useState} from "react";
import {BubbleSort} from "../sortingAlgos/bubbleSort.ts"


const Header = () => {

    const length = useSelector((state: RootState) => state.length.value)
    const array = useSelector((state: RootState) => state.array.value)
    const [speed, setSpeed] = useState(1);
    const dispatch = useDispatch();

    const handleSpeed = (_event: Event, newValue: number | number[])=>{
        if(typeof(newValue) === "number"){
            setSpeed(newValue);
        }

    }

    const handleChange = (_event: Event, newValue: number | number[]) => {
        if (typeof newValue === "number") {
            dispatch(updateLength(newValue))
        }
    };

    function getRandomNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function generateArray() {
        const tempArray: { value: number; id: string, style: "" }[] = [];

        for (let i = 0; i < length; i++) {
            tempArray.push({value: getRandomNumber(2, 120), id: "id-" + i, style: ""});
        }

        const pushObject = {
            arr: tempArray,
            compare: {
                i: null,
                j: null,
            },
            sorted: [],
        }

        dispatch(updateArray(pushObject));
    }


    useEffect(() => {
        generateArray();
    }, [length])

    const handleBubbleSort = () => {
        console.log(array.arr)
        const result = BubbleSort(array.arr, length)

        console.log(result)

        for (let i = 0; i < result.length; i++) {
            setTimeout(() => {
                const temp = result[i]
                // console.log("------->",temp)
                dispatch(updateArray({
                    arr: temp, compare: {
                        i: null,
                        j: null,
                    },
                    sorted: [],
                }))
            }, 500*i/speed)
        }

    }


    return (
        <>
            <div className="header">
                <button className="button" onClick={() => {
                    generateArray()
                }}>Generate Array
                </button>
                <button className="button" onClick={handleBubbleSort}>Bubble Sort</button>
                <Box sx={{width: 150}} className="slider">
                    <Slider
                        defaultValue={length}
                        step={10}
                        value={length}
                        onChange={handleChange}
                        marks
                        min={10}
                        max={120}
                    />
                </Box>
                <div className="lengthBox">{length}</div>

                <Box sx={{width: 150}} className="slider">
                    <Slider
                        defaultValue={speed}
                        step={1}
                        value={speed}
                        onChange={handleSpeed}
                        marks
                        min={1}
                        max={10}
                    />
                </Box>

                <div className="lengthBox">{speed}x</div>
            </div>

        </>
    )
}

export default Header;