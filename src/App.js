
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/home/home.jsx'
import Navbar from './components/navbar.jsx';
import List from './pages/home/list/list.jsx';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />

      </Routes>
    </Router>
  );
}

export default App;
