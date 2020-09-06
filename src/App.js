import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Components/Header';
import Header from './Components/Header';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Skills from './Components/Skills';


function App() {
  return (
    <div className="App">
      <Header/>
      <Education/>
      <Experience/>
      <Skills/>
    </div>
  );
}

export default App;
