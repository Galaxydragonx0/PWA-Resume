import React from 'react';
import ReactDOM from 'react-dom'; 
import NewSection from './NewSection';

const Education = (props) => {

    return(
        <div className='education-section'>
            <h2>Education.py</h2>
            <h3>The Unversity of the West Indies</h3>
                <p>Bachelor of Science in Computer Science (Special)</p>
                <p>2017 to Present Day</p>

            <h3>Hillview College</h3>
                <p>September 2009 to June 2016</p>
                <p>
                Caribbean Advanced Profiency Examination (CAPE) - Passes in Pure Maths, Biology, Chemistry, Caribbean and Communication Studies
                Caribbean Secindary Education Certificate (CSEC) - Grade 1 in 8 subjects
                </p>
            <div id="new-section"><button  onClick={props.click}>+</button></div>

        </div>


    );


};

export default Education;