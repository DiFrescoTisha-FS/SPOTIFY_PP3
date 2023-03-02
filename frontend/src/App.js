import { Routes, Route } from 'react-router-dom'
import './App.css';
import { Login, Home } from './components';

function App() {
  return (
    <div className="w-screen h-screen text-3xl font-bold text-gray-200 flex items-center justify-center bg-[#010606]">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
