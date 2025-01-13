import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/store.ts";
import {update as updateLength} from "../redux/slices/arrayLengthSlice.ts";
import {update as updateArray} from "../redux/slices/arraySlice.ts";
import {useEffect, useRef, useState} from "react";
import {BubbleSort} from "../sortingAlgos/bubbleSort.ts"
import {change as ongoingChange} from '../redux/slices/ongoingSlice.ts'
import {change as startStop} from "../redux/slices/startStopSlice.ts"
import pauseIcon from '../assets/images/icons8-pause.svg'
import playIcon from '../assets/images/icons8-play.svg'


const Header = () => {

    const length = useSelector((state: RootState) => state.length.value)
    const array = useSelector((state: RootState) => state.array.value)
    const play = useSelector((state: RootState) => state.startStop.value)
    const reset = useSelector((state: RootState) => state.ongoing.value)
    const lastIndexRef = useRef<number>(0)
    const playRef = useRef(play);
    const resultRef: React.MutableRefObject<{ value: number; id: string; style: string }[][]> = useRef([[{value:0, id:"", style: ""}]])


    useEffect(() => {
        playRef.current = play;
    }, [play]);


    const [speed, setSpeed] = useState(1);
    const dispatch = useDispatch();

    const handleSpeed = (_event: Event, newValue: number | number[]) => {
        if (typeof (newValue) === "number") {
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
            tempArray.push({value: getRandomNumber(5, 120), id: "id-" + i, style: ""});
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


    let result: { value: number; id: string; style: string }[][];

    const handleBubbleSort = () => {
        if(!playRef){
            dispatch(startStop());
        }
        result = BubbleSort(array.arr, length)
        resultRef.current = result
        dispatch(ongoingChange())
        runAnimation().then().catch(err => (console.log(err)))
    }


    function sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }


    const runAnimation = async () => {


        if(playRef){
            playRef.current = false
        }

        for (let i = lastIndexRef.current; i < resultRef.current.length; i++) {

            const temp = resultRef.current[i]

            if (!playRef.current) {
                dispatch(updateArray({
                    arr: temp, compare: {
                        i: null,
                        j: null,
                    },
                    sorted: [],
                }))

                await sleep(1000/speed)
            }else{
                lastIndexRef.current = i
                break;
            }
        }


    }


    const handlePause = () => {
        if(!play){
            dispatch(startStop())
        }


    }

    const handleResume = () => {
        if(play){
            dispatch(startStop())
        }

        runAnimation().then().catch(err => console.error(err));
    }

    const handleReset = ()=>{
        if(play){
            dispatch(startStop())
        }


        dispatch(ongoingChange())
        resultRef.current = [[{value:0, id:"", style: ""}]]

        generateArray()
        lastIndexRef.current = 0

    }


    return (
        <>
            <div className="header">
                <button className="button" onClick={() => {
                    generateArray()
                }}>Generate Array
                </button>


                {!reset && <button className="button" onClick={handleBubbleSort}>Bubble Sort</button>}
                {reset && <button className="button" onClick={handleReset}>Reset</button>}


                <Box sx={{width: 150}} className="slider">
                    <Slider
                        defaultValue={length}
                        step={10}
                        value={length}
                        onChange={handleChange}
                        marks
                        min={10}
                        max={120}
                        disabled={reset}
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
                        disabled={!play && reset}
                    />
                </Box>

                <div className="lengthBox">{speed}x</div>
                {
                    reset && (
                        <>
                            {!play &&
                                <div className='iconContainer' onClick={handlePause}><img src={pauseIcon} alt="pauseicon"
                                                                                          className='pauseIcon'/></div>}
                            {play &&
                                <div className='iconContainer' onClick={handleResume}><img src={playIcon} alt="playicon"
                                                                                           className='pauseIcon'/></div>}
                        </>
                    )
                }

            </div>

        </>
    )
}

export default Header;