import "./style.css"

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Courses from './Components/Courses';
// import Carousel from './Components/Carousel';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="Carousel" element={<Carousel />} /> */}
        <Route path="Courses" element={<Courses/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
