import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/store.ts";
import {update as updateLength} from "../redux/slices/arrayLengthSlice.ts";
import {update as updateArray} from "../redux/slices/arraySlice.ts";
import {useEffect} from "react";


const Header = ()=>{

    const length = useSelector((state:RootState) => state.length.value )
    const dispatch = useDispatch();
    const handleChange = (_event: Event, newValue: number | number[]) => {
        if (typeof newValue === "number") {
            dispatch(updateLength(newValue))
        }
    };

    function getRandomNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function generateArray() {
        const tempArray: number[] = Array.from({length: length}, () => getRandomNumber(5, 130));
        dispatch(updateArray(tempArray));
    }

    useEffect(() => {
        generateArray();
    }, [length])



return(
    <>
        <div className="header">
            <button className="button" onClick={() => {
                generateArray()
            }}>Generate Array
            </button>
            <button className="button">Bubble Sort</button>
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
        </div>

    </>
)
}

export default Header;