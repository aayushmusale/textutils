// import logo from './logo.svg';
// import react, { useState } from 'react';
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {

  const [mode, SetMode] = useState('light');  //To set dark mode or light mode
  const [alert, SetAlert] = useState(null);   //To show alerts

  const showAlert = (message, type) => {
    SetAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      SetAlert(null);
    }, 1600);
  }

  const toggleDarkMode = () => {
    if (mode === 'light') {
      SetMode('dark');
      document.body.style.backgroundColor = '#03002b';
      showAlert("Dark mode has been enabled", 'success');
    }
    else {
      SetMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", 'success');
    }

    // To blink the title in the specific interval
    // setInterval(() => {
    //   document.title= "Textutils is amazing";
    // }, 2000);

    // setInterval(() => {
    //   document.title = "Install Textutils Now!";
    // }, 1300);
  }

  const toggleGreenMode = () => {
    if (mode === 'light') {
      SetMode('dark');
      document.body.style.backgroundColor = '#3b8b3b';
      showAlert("Green mode has been enabled", 'success');
    }
    else {
      SetMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Green mode has been enabled", 'success');
    }
  }


  return (
    <>
      {/* <Router> */}
        {/* <Navbar title="TextUtils" AboutText="About" mode={mode} toggleDarkMode={toggleDarkMode} toggleGreenMode={toggleGreenMode} /> */}
        <Navbar title="TextUtils" mode={mode} toggleDarkMode={toggleDarkMode} toggleGreenMode={toggleGreenMode} />
        <Alert Alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />}> */}
            {/* </Route> */}
            {/* <Route exact path="/" element={<TextForm heading="Enter the text here to analyze" showAlert={showAlert} mode={mode} />}> */}
            <TextForm heading="Enter the text here to analyze" showAlert={showAlert} mode={mode} />
            {/* </Route> */}
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
