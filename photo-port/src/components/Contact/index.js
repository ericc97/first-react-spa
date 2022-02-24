import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';


function ContactForm() {

    const [errorMessage, setErrorMessage] = useState('');
    
    const [formState, setFormState ] = useState({ name: '', email: '', message: '' });

    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if(!isValid){
                setErrorMessage('Your email is invalid');
            }else {
                setErrorMessage('');
            }
        }else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`)
            } else {
                setErrorMessage('')
            }
        }
        // console.log('errorMessage', errorMessage)
        if (!errorMessage){
            setFormState({...formState, [e.target.name]: e.target.value })
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
    // console.log(formState);
    // JSX
    return(
        <section>
            <h1>Contact Me</h1>
            <form id='contact-form' onSubmit={handleSubmit}>
                {/* name input */}
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' name='name' defaultValue={name} onBlur={handleChange} ></input>
                </div>
                {/* email input */}
                <div>
                    <label htmlFor='email'>Email address:</label>
                    <input type='text' name='email' defaultValue={email} onBlur={handleChange}></input>
                </div>
                {/* message area */}
                <div>
                    <label htmlFor='message'>Message:</label>
                    <textarea name='message' rows='5' defaultValue={message} onBlur={handleChange}></textarea>
                </div>
                {errorMessage && (
                    <div>
                        <p className='error-text'>{errorMessage}</p>
                    </div>
                )}
                <button type='submit'>Submit</button>
            </form>
        </section>
    );
}

export default ContactForm;