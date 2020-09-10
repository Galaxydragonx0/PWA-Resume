import React from 'react';
import NewSection from '../NewSection';
import ExperienceSection from './ExperienceSection';



const Experience = (props) => {

    return(

        // props.map(renderExperienceSection)
        <div className='exp-section'>

            <h3>{props.business}</h3> 
            <h3>{props.time_spent}</h3>
            <p>{props.location}</p>
            {/* 
            
                HERE I WANTED TO ADD A DESCRIPTION LIKE I HAD IN PAST VERSION HOWEVER I WANTED TO 
                DEMONSTRATE PROPS BUT IT CAN BE DONE BY USING A DATA FILE FOR THE DESCRIPTION THEN 
                CALLING A NEXT COMPONENT TO RENDER THE DESCRIPTION IN THE WAY YOU WANTED FOR INSTANCE 
                IF YOU WANTED A CERTAIN PART TO BE A HEADER TAG OR PARAGRAPH TAAG
        
            */}

        </div>
        
    )
};


export default Experience;