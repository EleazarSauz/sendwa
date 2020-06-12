import React, { useState } from 'react';

const FormWa = () => {
    const [numbre, setNumbre] = useState('')
    const [message, setMessage] = useState('')


    const onSubmit = e => {
        e.preventDefault()
        console.log(numbre, message);
    };

  return (
    <>
        <form onSubmit={onSubmit} className="form">
            <input type="number" 
                className="input-nnumbre" 
                name="numbre" 
                value={numbre}
                onChange={(e) => setNumbre(e.target.value)}
            />
            <textarea 
                className="input-message" 
                name="message" 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />

            <button className="submit" type="submit">
                Send
            </button>
        </form>
    </>
  );
};

export default FormWa;
