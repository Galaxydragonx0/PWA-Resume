import React,{ useState } from 'react';
import ReactDOM from 'react-dom'; 
import {Provider} from 'react-redux';

import logo from './logo.svg';
import './App.css';
import './Components/Header';
import Header from './Components/Header';
import Education from './Components/Education';
import Experience from './Components/experience/Experience';
import Skills from './Components/Skills';
import NewSection from './Components/NewSection';
import ContactMe from './Components/ContactMe';
import Footer from './Components/Footer';
import {store} from './actions/store'; 


function App() {

  /*
    FUNCTIONAL STATE -> useState() RETURNS TWO ARRAYS ONE OF WHICH IS THE CURRENT STATE (expState) AND THE
    THE OTHER BEING ONE WHICH CAN BE USED TO UPDATE THE STATE (setExpState)

  */
const [expState, setExpState]  = useState({
  jobs:[
    {
      business:'Tucker Holdings Limited', 
      time_spent:'2 months', 
      location: '1-5 Princess Margaret Street, San Fernando , Trinidad, W.I',
    },
    {
      business: 'SEEC SEA Class', 
      time_spent:'3 months',
      location: "My Home (No Address cause I don't want to get doxed)"
    }
  ]
});


/* SIDENOTE:   
    I DIDN'T UPDATE THE STATE AS I WANTED TO SHOW THE FUNCTIONALTITY OF STATE BUT IT CAN BE 
    DONE BY CREATING A FUNCTION WHERE YOU CLICK SOMEWHERE ON THE DOM 
    (A BUTTON FOR INSTANCE LIKE WHAT I DID FOR EDUCATION)AND THEN USE setExpState to UPDATE THE 
    STATE BY UPADTING ADDING OR UPDATING DATA TO THE ARRAY OBJECT

    Example:
    const onClickHandler = () => {
    setExpState( {
        persons: [
              {
                business:'Tucker Holdings Limited', 
                time_spent:'10 months', 
                location: '1-5 Princess Margaret Street, San Fernando , Trinidad, W.I',
              },
              {
                business: 'SEA Class', 
                time_spent:'1 year',
                location: "My Home (No Address cause I don't want to get doxed)"
              },
              {
                business: 'Intelligent Applications', 
                time_spent:'2 months',
                location: "Rodney Branch Rd, Endeavour"
              }
        ]
    });
  }; 
*/


/*THIS FUNCTION TAKE THE DIFFERENT ATTRIBUTES IN THE OBJECT IN THE STATE AND PASSES IT AS A PROP IN THE EXPERIENCE COMPONENT*/ 
function createNewExpLisitng(job){
  return(
    <Experience 
      business = {job.business}
      time_spent = {job.time_spent}
      location = {job.location}
    />
  )
}

/*THIS FUNCTION ALLOW US TO RENDER A NEW SECTION IN EDUCAITON GIVEN THAT A BUTTON IS CLICKED */ 
const educationClickHandler = () =>{
    ReactDOM.render( 
        // passing props from parent to child. 
        <div>
          <NewSection title='Primary School' description ='Charlieville ASJA Primary' />
        </div>,

        document.getElementById("new-edu-section") 
    ); 
}
  return (
    <div className="App">
      <Header/>
      <Education click={educationClickHandler}/>
     
      <div className = "exp-container">

        <h2>Experience.exe</h2>

        {/* WE MAP THE DIFFERENT OBJECTS IN THE OBJECT ARRAY (JOBS) IN STATE ONTO THE FUNCTION ABOVE */}
        {expState.jobs.map(createNewExpLisitng)}
      </div>
  
      <Skills/>
      <ContactMe/>
      <Footer/>
    </div>
  );
}

export default App;
