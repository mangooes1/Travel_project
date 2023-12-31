
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import About from './Routes/About';


function App() {
  return (

    <div className='App'>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>


    </div>
  );
}

export default App;
