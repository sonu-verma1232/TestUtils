import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {

  const[mode, setMode] = useState("light"); // it shows whether dark mode is enabled or not

  const[alert,setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
        setAlert(null);
      },1000);
  }

  const toggleMode = () =>  {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor="#343a40";
      document.body.style.color="white";
      showAlert("Dark mode has been enabled.","success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
      showAlert("Light mode has been enabled.","success");
    }
  } 

  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}></Navbar>
      <Alert alert={alert}/>
      {/* <Navbar></Navbar> */}
      <div className="container my-3">
        {/* <About/> */}
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
      </div>
    </>
  );
}

export default App;
