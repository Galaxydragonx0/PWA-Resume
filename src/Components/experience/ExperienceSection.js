import React from 'react';


/*
    THIS WAS AN ATTEMPT TO SOLVE THE PROBLEM OF DISPLAYING A DESCRIPTION TO THE DOM DYNAMICALLY
    THAT IS I COULD PASS ENTERED TEXT FROM THE JSON FILE AND THEN USE JSX TO DO FORMAT HOW I WANTED     
    BUT IT PROVED TROUBLESOME TO GET AROUND TO THOUGH IT IS POSSIBLE
*/

const ExperienceSection = (props) =>{
    return(

        
        <div>
            <h3>{props.place} ({props.time})</h3>
            <p>{props.children}</p>


        </div>
    )

};


export default ExperienceSection;