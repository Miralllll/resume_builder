import './App.css';
import NavBar from './components/NavBar/NavBar';
import StartBoxWrapper from './components/StartBox/StartBoxWrapper';
import React, {useState} from "react";

function App() {
  const [sectionNumber, updateSectionNumber] = useState(-1);
  return (
    <div className="App">
      <NavBar updateSectionNumber={updateSectionNumber}/>
      <StartBoxWrapper sectionNumber={sectionNumber} updateSectionNumber={updateSectionNumber}></StartBoxWrapper>
    </div>
  );
}

export default App;
