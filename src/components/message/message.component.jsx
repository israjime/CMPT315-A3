import React from "react";
import "./message.styles.css";
export const Message = ({emails}) => {
    const{from, subject, address, time, read, message} = emails;
    return(
        // <div className='message-container'>
        //     <h1>From: {from}</h1>
        //     <h2>Subject: {subject}</h2>
        //     <h2>Address: {address}</h2>
        //     <h2>Time: {time}</h2>
        //     <p>Message:</p>
        //     <p>{message}</p>
        // </div>
            <div className='message-container'>
            <h1>From: Sample User</h1>
            <h2>Subject: Omnipresent Interview</h2>
            <h2>Address: chen@omnipresent.com</h2>
            <h2>Time: 2021-10-07 15:35:14</h2>
            <p>Message:</p>
            <p>Duis cursus, diam at pretium aliquet, metus urna convallis erat, eget tincidunt dui augue eu tellus. Phasellus elit pede, malesuada vel, venenatis vel, faucibus id, libero. Donec consectetuer mauris id sapien. Cras</p>
        </div>
    );
}