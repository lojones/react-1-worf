import logo from './logo.svg';
import './App.css';
import Topnavbar from './components/Topnavbar/Topnavbar'
import Leftnavbar from './components/Leftnavbar/Leftnavbar'
import StarfleetPoster from './components/StarfleetPoster/StarfleetPoster';
import About from './components/About/About';
import Settings from './components/Settings/settings';
import { BrowserRouter as Router, Switch, Routes, Route } from 'react-router-dom';
import BasicConfig from './components/Basic/BasicConfig';
import basicConfigDataJson from "./basic-config.json"
import { useState } from 'react'

function App() {
  const [basicConfigData, setBasicConfigData] = useState(basicConfigDataJson);

  return (
    <Router>
      <div className="App">
        <Topnavbar Home="/" Basic="/basic" Advanced="/advanced" About="/about" Settings="/settings"/>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<StarfleetPoster />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/basic" element={ <BasicConfig configs={basicConfigData} updateConfigs={setBasicConfigData} /> } /> 
          
        </Routes>
        
        
      </div>
    </Router>
  );
}

export default App;
