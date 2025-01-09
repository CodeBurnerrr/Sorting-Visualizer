import Home from './pages/home.tsx'
import SortingPage from "./pages/sortingPage.tsx";
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
