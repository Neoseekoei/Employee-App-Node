import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import DisplayData from './Components/DisplayData';
import Add from './Components/Add';



function App() {




  return (
    <div className="App">
     <DisplayData/>
     <Add/>
    </div>
  );
}

export default App;
