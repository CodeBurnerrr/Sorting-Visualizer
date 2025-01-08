import Home from './Pages/Home.tsx'
import SortingPage from "./Pages/SortingPage.tsx";
import {BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {


    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path='/sorting' element={<SortingPage/>}></Route>
                    <Route path="*" element={<Home/>}/>
                </Routes>
            </BrowserRouter>


        </>
    )
}

export default App
