import './App.css';
import NavBar from './components/NavBar/NavBar';
import WorkSheet from './components/WorkSheet/WorkSheet';
// var Latex = require("react-latex")

function App() {
  return (
    <div className="App">
      <NavBar/>
      <WorkSheet/>
    </div>
  );
}

export default App;
