import Home from './components/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Results from './components/Results/Results';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
