import React from 'react';


/* 
    THIS SHOULD BE ABLE TO BE USED IN ANY SECION TO DISPLAY A NEW SECTION (hence the name) IN ANY SECITON 
    MINUS THE CONTACT ME SECTION.
*/

const NewSection = (props) =>{

    return(
        <div>
            <h3>{props.title} </h3>
            <p>{props.description}</p>


        </div>


    );
};


export default NewSection;