import React,{ useState } from 'react';
import ReactDOM from 'react-dom'; 
import {Provider} from 'react-redux';

import logo from './logo.svg';
import './App.css';
import './Components/Header';
import Header from './Components/Header';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Skills from './Components/Skills';
import NewSection from './Components/NewSection';
import ContactMe from './Components/ContactMe';
import Footer from './Components/Footer';
import {store} from './actions/store'; 


function App() {

const [expState, setExpState]  = useState({
  job:[
    {place:'Tucker Holdings Limited', time:'2 months'},
    {place: 'SEEC SEA Class', time:'3 months'}
  ]
});

const onClickHandler = () =>{
    ReactDOM.render( 
        // passing props from parent to child. 
        <div>
          <NewSection title='Primary School' description ='ASJA primary' />
          <button  onClick={onClickHandler}>+</button>
        </div>,

        document.getElementById("new-section") 
    ); 
}
  return (
    <div className="App">
      <Header/>
      <Education click={onClickHandler}/>
      <Experience/>
      <Skills/>
      <ContactMe/>
      <Footer/>
    </div>
  );
}

export default App;
