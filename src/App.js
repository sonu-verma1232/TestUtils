import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';

function App() {

  const[mode, setMode] = useState("light"); // it shows whether dark mode is enabled or not

  const toggleMode = () =>  {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor="grey";
      document.body.style.color="white";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
    }
  } 

  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}></Navbar>
      {/* <Navbar></Navbar> */}
      <div className="container my-3">
        {/* <About/> */}
        <TextForm heading="Enter the text to analyze below"/>
      </div>
    </>
  );
}

export default App;
