import logo from './logo.svg';
import './App.css';
import Topnavbar from './components/Topnavbar/Topnavbar'
import Leftnavbar from './components/Leftnavbar/Leftnavbar'
import StarfleetPoster from './components/StarfleetPoster/StarfleetPoster';
import About from './components/About/About';
import Settings from './components/Settings/settings';
import { BrowserRouter as Router, Switch, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Topnavbar Home="/" About="/about" Settings="/settings"/>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<StarfleetPoster />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
