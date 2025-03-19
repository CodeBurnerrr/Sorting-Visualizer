import Home from './pages/home.tsx'
import SortingPage from "./pages/sortingPage.tsx";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react"
import Particle from "./components/particles.tsx";

function App() {

    return (
        <>

            <div className={'animate-pulse'}>
                <Particle/>
            </div>
            <Analytics />
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

