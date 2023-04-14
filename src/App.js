import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import UpperCaseForm from './Components/UpperCaseForm';
import About from './Components/About';
import React,{ useState } from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";


function App() {
  const [mode,setmode]=useState('light');

  const togglemode=()=>{
    if(mode==='light'){
      setmode("dark")
     document.body.style.backgroundColor= '#07213a';
     showAlert("Dark Mode has been enable","success")
    }
    else{
      setmode('light');
      document.body.style.backgroundColor= 'white';
      showAlert("Dark Mode has been Unenable","success")
    }
  }

  const togglemode1=()=>{
    if(mode==='light'){
      setmode("dark")
     document.body.style.backgroundColor= '#054210';
     showAlert("green Mode has been enable","success")
    }
    else{
      setmode('light');
      document.body.style.backgroundColor= 'white';
      showAlert("green Mode has been Unenable","success")
    }
  }
  const togglemode2=()=>{
    if(mode==='light'){
      setmode("dark")
     document.body.style.backgroundColor= '#4d0606';
     showAlert("Red Mode has been enable","success")
    }
    else{
      setmode('light');
      document.body.style.backgroundColor= 'white';
      showAlert("Red Mode has been Unenable","success")
    }
  }

  const [alert, setalert] = useState(null);
  const showAlert=(message,type)=>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);

  }
  return (
    <> 
    <Router>
    <Navbar Navbar="TextplayGround" Home="Home"   mode={mode} togglemode={togglemode}  togglemode1={togglemode1} togglemode2={togglemode2} />
    <Alert alert={alert}/>
    <Routes>
          <Route exact path="/DarkMode" element={<About  mode={mode}/>}>
          
          </Route>
          <Route exact path="/" element={<UpperCaseForm showAlert={showAlert} UpperCaseForm="Play with Text"  mode={mode}/>}>
         
          </Route>
        </Routes>
   
    </Router>
    
    </>
  );
}

export default App;
