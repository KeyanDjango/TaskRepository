import React, { useState, useRef } from 'react';


export default function Counter() {

    const [count, setCount] = useState(0);
    const [txt, setTxt] = useState('');
    const txtfocus = useRef();

    const handleClickFocus = () => {
        txtfocus.current.focus();
    }


    const counterparent = {
        marginTop: '20px'
    }
    const counterStyle = {
        color: count > 10 ? 'blue' : count > 20 ? 'lightgrey' : count > 30 ? 'black' : 'orange',
        fontWeight: 'bold',
        fontSize: 100
    }
    function handleDecrement() {
        if (count > 0) {
            setCount(count - 1);
        }
    }
    return (
        <>
            <div className="counter-parent" style={counterparent}>
                {/* COUNTER */}

                <center>
                    <h4>COUNTER <span style={{ color: 'green' }}> INCREMENT </span> <span style={{ color: 'red' }}> DECREMENT </span></h4>
                    <div style={{ marginTop: 30 }}>

                        <span style={counterStyle}> {count} </span><br />
                        <button onClick={() => setCount(count + 1)} style={{ marginRight: 40, padding: 20, borderRadius: 10, borderColor: 'green' }}>INCREMENT</button>
                        <button onClick={() => handleDecrement()} style={{ padding: 20, borderRadius: 10, borderColor: 'red' }}>DECREMENT</button><br /><br /><br />
                        <button onClick={() => setCount(0)} style={{ padding: 25, borderRadius: 10, borderColor: 'orange' }}>RESET</button>

                    </div>
                </center>


                <hr style={{ marginTop: 10 }} />

                {/* insert two inputs add and give result */}

                <div>
                    <center>
                        <br />
                        <h4>TextInput & Replicate Below</h4> <br />

                        <input ref={txtfocus} onChange={(e) => setTxt(e.target.value)} type="text" style={{ width: 400, height: 40, padding: 10, fontSize: 30 }} autoCapitalize='off' autoCorrect='off' /><br /> <br /><br />
                        <p> {txt.length > 0 ? txt : 'TYPE SOMETHING IN TEXT BOX'} </p><br />
                        {txt.length}<br /><br />

                        <button onClick={() => handleClickFocus()} style={{ width: 250, height: 40 }}>Focus</button>


                    </center>

                </div>

            </div>

        </>
    )
}