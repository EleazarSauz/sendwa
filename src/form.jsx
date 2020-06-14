import React, { useState } from 'react';

const FormWa = () => {
    const [numbre, setNumbre] = useState('')
    const [message, setMessage] = useState('')


    const onSubmit = e => {
        e.preventDefault()
        console.log(numbre, message);
    };

  return (
    <div className="container-form">
        <form onSubmit={onSubmit} className="form">
            <input type="number" 
                className="input-numbre" 
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
    </div>
  );
};

export default FormWa;
