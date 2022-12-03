import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Division from './pages/Division';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Division />} />
      </Routes>
    </Router>
  );
}
