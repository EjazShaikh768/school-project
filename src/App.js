import AOS from "aos";
import "aos/dist/aos.css";
import './App.css';
import Home from './Components/Home';
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
       <Home />



       
    </div>
  );
}

export default App;
