import React, { useState, useEffect } from 'react';

const FormWa = () => {
    const [phone, setPhone] = useState({
        code: '52',
        number: ''
    })
    const [message, setMessage] = useState('Hi :)')
    const [numberLines, setNumberLines] = useState(1)
    const [contyCode, setContyCode] = useState([])

    useEffect(() => {
       fetch('https://gist.githubusercontent.com/EleazarSauz/8d247297a3a10d84aa35581ebbdddd06/raw/country-code.json')
       .then(res=>res.json())
       .then(ok=>setContyCode(ok))
       .catch(err=>console.log(err))
    }, [])


    const { code, number } = phone
    const onSubmit = e => {
        e.preventDefault()
        // console.log(numbre, message);
        var type =  isMobile() ? 'api' : 'web'
        var data = `https://${type}.whatsapp.com/send?phone=${code + number}&text=${message}`
        console.log(' data ',  data )

        window.open(data, '_blank')
    };

    const isMobile = () => {
        const toMatch = [
            /Android/i,
            /webOS/i,
            /iPhone/i,
            /iPad/i,
            /iPod/i,
            /BlackBerry/i,
            /Windows Phone/i
        ];
      
        return toMatch.some((toMatchItem) => {
            return navigator.userAgent.match(toMatchItem);
        });
    }



  return (
    <div className="container-form">
        
        <form onSubmit={onSubmit} className="form">             
            <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" style={{alignSelf: 'center',}}>
                <defs>
                <style>{`.cls-1{fill:url(#linear-gradient);}.cls-2{fill:#fff;}`}</style>
                <linearGradient gradientUnits="userSpaceOnUse" id="linear-gradient" x1="32" x2="32" y1="4" y2="64.81">
                <stop offset="0" stop-color="#1df47c"/><stop offset="0.31" stop-color="#12df63"/><stop offset="0.75" stop-color="#05c443"/><stop offset="1" stop-color="#00ba37"/>
                </linearGradient>
                </defs><title/>
                <g data-name="23-whatsapp" id="_23-whatsapp"><rect className="cls-1" height="64" rx="11.2" ry="11.2" width="64"/>
                <path className="cls-2" d="M27.42,21.38l2,5.43a.76.76,0,0,1-.1.74,10.32,10.32,0,0,1-1.48,1.71.8.8,0,0,0-.16,1.09C28.91,32,32.1,36,36.25,37.43a.79.79,0,0,0,.89-.29l1.66-2.21a.8.8,0,0,1,1-.23L45,37.3a.79.79,0,0,1,.4,1c-.57,1.62-2.36,5.57-6.19,4.93A20.79,20.79,0,0,1,26.4,36c-3.14-3.92-9.34-14,.19-15.14A.8.8,0,0,1,27.42,21.38Z"/>
                <path className="cls-2" d="M33.6,54.8a24.21,24.21,0,0,1-11.94-3.13l-12,3.08,4.41-9.91A22,22,0,0,1,10,32C10,19.43,20.59,9.2,33.6,9.2S57.2,19.43,57.2,32,46.61,54.8,33.6,54.8ZM22.29,47.37l.73.45a20.13,20.13,0,0,0,10.58,3c10.81,0,19.6-8.43,19.6-18.8S44.41,13.2,33.6,13.2,14,21.63,14,32a18.13,18.13,0,0,0,4,11.34l.75.95-3.61,6.12Z"/>
                </g>
            </svg>
            <div className="phone-format-container">
                <select className="input-code-phone" role="img" onChange={(e)=>setPhone({
                        ...phone, 
                        code: e.target.value
                    })} value={code}>
                    {
                        contyCode.map((i,index)=>(
                            <option key={index} value={i.phone_code}> +{i.phone_code}</option>
                        ))
                    }
                </select>
                <input type="number" 
                    className="input-numbre-phone" 
                    name="numbre"
                    value={phone.number}
                    onChange={(e) => setPhone({...phone, number: e.target.value})}
                />
            </div>
            <textarea 
                className="input-message" 
                name="message"
                placeholder={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={numberLines}
                onKeyPress={(e) => {
                    if (e.key==="Enter") {
                        setNumberLines(numberLines + 1)
                    }
                    console.log(e.key)
                }}
            />

            <button className="submit" type="submit">
                Send
            </button>
        </form>
    </div>
  );
};

export default FormWa;
