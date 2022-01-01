import React, {useState} from "react";
import "./Contact.css"

export default function Contact(props) {
    const [isSubmitted, setSubmit] = useState(false);
    
    const renderForm = () => {
        return (
            <div className={`devContact ${props.props.isContact ? 'contactDisplay' : 'contactHide'}`} id="devContact">
                <form id="contactForm" action="https://formspree.io/f/xoqpgaoa" method="POST" onSubmit={() => setSubmit(true)}>
                    <div id="contactCloseDiv">
                        <p></p>
                        <button id="contactClose" type="button" onClick={() => props.props.setContact(false)}>&times;</button>
                    </div>
                    <h2 id="contactH2">Get in touch!</h2>
                    <p>Leave a message here and I will typically get back to you within a day.</p>
                    <label htmlFor="user-name">Name:</label><br/>
                    <input id="user-name" type="text" name="name" required /><br/>

                    <label htmlFor="user-email">Email:</label><br/>
                    <input id="user-email" type="text" name="email" required /><br/>

                    <label htmlFor="user-message">Message:</label><br/>
                    <textarea id="user-message" name="message" required /><br/>
                    <button id="contactSubmit" type="submit">Submit</button>
                </form>
            </div>
        )
    }
    const renderThanks = () => {
        return (
            <div className={`devContact ${props.props.isContact ? 'contactDisplay' : 'contactHide'}`} id="devContact">
                <form>
                    <div id="contactCloseDiv">
                        <p></p>
                        <button id="contactClose" type="button" onClick={() => props.props.setContact(false)}>&times;</button>
                    </div>
                    <h2>Thank you! I'll be in touch soon.</h2>
                </form>
            </div>
        )
    }
    return (isSubmitted ? renderThanks() : renderForm());
}