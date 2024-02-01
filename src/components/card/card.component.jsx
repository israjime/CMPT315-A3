import React from "react";
import "./card.styles.css";
import { Message } from "../message/message.component";

export const Card = ({email}) => {
    const{from, subject, address, time, read, message} = email;


    return(
        <button className='card-container' style={{backgroundColor: email.read==='false' ? 'lightcoral' : 'white'}} >
            <h1>From: {from}</h1>
            <h2>Subject: {subject}</h2>
            <h2>Address: {address}</h2>
            <p>Time: {time}</p>
        </button>
    );
}