import React from 'react';
import {store} from '../actions/store';
import {Provider} from 'react-redux';
import Client from './Client';
import { Container } from "@material-ui/core";
import { ToastProvider } from "react-toast-notifications";


const ContactMe = () =>{

    return(
        <div>
            <h2>Get In Touch</h2>
            <h3>Lorem ipsum dolor sit amet, non elit.</h3>
            <p>Lorem ipsum dolor sit amet, in quis, aenean amet. Phasellus sodales, tellus donec dui, ornare erat.</p>
            <a className="btn" href="mailto:name@email.com">CONTACT ME</a>
            
            <Provider store= {store}>
                <ToastProvider autoDismiss={true}>  
                    <Container maxWidth='sm' ></Container>
                    <Client/>
                </ToastProvider>
            </Provider>

        </div>


    );



}; 


export default ContactMe;