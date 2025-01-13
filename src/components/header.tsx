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
    const resultRef: React.MutableRefObject<{ value: number; id: string; style: string }[][]> = useRef([[{
        value: 0,
        id: "",
        style: ""
    }]])


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
        if (!playRef) {
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


        if (playRef) {
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

                if (i === resultRef.current.length - 1) {
                    if (play) {
                        dispatch(startStop())
                    }
                    dispatch(ongoingChange())
                    lastIndexRef.current = 0

                }
                await sleep(1000 / speed)

            } else {
                lastIndexRef.current = i
                break;
            }
        }


    }


    const handlePause = () => {
        if (!play) {
            dispatch(startStop())
        }


    }

    const handleResume = () => {
        if (play) {
            dispatch(startStop())
        }

        runAnimation().then().catch(err => console.error(err));
    }

    const handleReset = () => {
        if (play) {
            dispatch(startStop())
        }


        dispatch(ongoingChange())
        resultRef.current = [[{value: 0, id: "", style: ""}]]

        generateArray()
        lastIndexRef.current = 0

    }


    return (
        <>
            <div className="header justify-center items-center">

                <div className='headerTitle'>Sorting</div>

                <div
                    className='h-[80px] border-r-white border-l-white text-white flex flex-col text-sm mr-2 justify-center items-center border-2 border-b-0 border-t-0 border-l-0 pr-6'>
                    Generate New Array
                    <button className="h-auto bg-white text-stone-950 mt-2 p-2.5 rounded-lg pl-0 pr-0 w-[100px]"
                            onClick={() => {
                                generateArray()
                            }}>Generate
                    </button>
                </div>

                <div
                    className='h-[80px] border-r-white border-l-white text-white flex flex-col text-sm mr-2 justify-center items-center border-2 border-b-0 border-t-0 border-l-0 pl-4 pr-6'>

                    Select Sorting Method

                    <div className="flex flex-row">
                        <form className="max-w-sm mt-2.5">
                            <select id="Sort"
                                    className="bg-white-10  text-sm rounded-lg  block w-full p-2 text-black">

                                <option value="Bubble" selected>Bubble Sort</option>
                                {/*<option value="Selection">Selection Sort</option>*/}

                            </select>
                        </form>


                        {!reset && <button
                            className="h-auto  text-stone-950 mt-2 p-2 bg-green-500 rounded-lg pl-0 pr-0 w-[100px] ml-3"
                            onClick={handleBubbleSort}>Sort</button>}
                        {reset && <button
                            className="h-auto  text-stone-950 mt-2 p-2 bg-red-500 rounded-lg pl-0 pr-0 w-[100px] ml-3"
                            onClick={handleReset}>Reset</button>}
                    </div>

                </div>

                <div
                    className='h-[80px] border-r-white border-l-white text-white flex flex-col text-sm mr-2 justify-center items-center border-2 border-b-0 border-t-0 border-l-0 pl-4 pr-6'>

                    Adjust size of array


                    <div className='flex flex-row justify-center items-center '>
                        <Box sx={{width: 150}} className='mt-2.5 ml-2'>
                            <Slider
                                defaultValue={length}
                                step={10}
                                value={length}
                                onChange={handleChange}
                                marks
                                min={10}
                                max={100}
                                disabled={reset}
                            />
                        </Box>
                        <div
                            className="ml-[35px] border-amber-50 border-2 p-1.5 mt-2.5 rounded-xl h-[35px] bg-white text-stone-950 ">{length}</div>
                    </div>


                </div>

                <div
                    className='h-[80px] border-r-white border-l-white text-white flex flex-col text-sm mr-2 justify-center items-center border-2 border-b-0 border-t-0 border-l-0 pl-4 pr-6'>

                    Adjust sorting speed
                    <div className='flex flex-row justify-center items-center '>

                        <Box sx={{width: 150}} className='mt-2.5 ml-2'>
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

                        <div
                            className="ml-[35px] border-amber-50 border-2 p-1.5 mt-2.5 rounded-xl h-[35px] bg-white text-stone-950 ">{speed}x
                        </div>

                    </div>


                </div>


                {
                    reset && (
                        <>
                            {!play &&
                                <div className='iconContainer' onClick={handlePause}><img src={pauseIcon}
                                                                                          alt="pauseicon"
                                                                                          className='pauseIcon'/></div>}
                            {play &&
                                <div className='iconContainer' onClick={handleResume}><img src={playIcon} alt="playicon"
                                                                                           className='pauseIcon'/>
                                </div>}
                        </>
                    )
                }

            </div>

        </>
    )
}

export default Header;