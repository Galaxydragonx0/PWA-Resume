import React from 'react';




const ExperienceSection = (props) =>{
    return(

        
        <div>
            <h3>{props.place} ({props.time})</h3>
            <p>{props.children}</p>


   



        </div>
    )

};


export default ExperienceSection;