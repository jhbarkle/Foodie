import Home from './components/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Results from './components/Results/Results';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </>
  );
}

export default App;
