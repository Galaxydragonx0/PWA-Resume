import React from 'react';
import {store} from '../actions/store';
import {Provider} from 'react-redux';
import Client from './Client';
import { Container } from "@material-ui/core";
import { ToastProvider } from "react-toast-notifications";
import ReactDOM from 'react-dom'; 

const  renderForm = () => {

ReactDOM.render( 
            // passing props from parent to child. 
        <div>
        <Provider store= {store}>
            <ToastProvider autoDismiss={true}>  
                <Container maxWidth='sm' ></Container>
                <Client/>
            </ToastProvider>
        </Provider>
        </div>,
    
            document.getElementById("form-section") 
        ); 
    }

const ContactMe = () =>{

    return(
        <div className='contact-me'>
            <h2>Get In Touch</h2>
            <h3>Follow the InterWebs and they Shall Guide you </h3>   
            <div id = "form-section"><a className="btn" onClick={renderForm}>CONTACT ME</a></div>
        </div>


    );



}; 


export default ContactMe;