import React, { useState, useRef } from 'react';
import '../TaskPage/Task.css'

export default function Counter() {

    const [count, setCount] = useState(0);
    const [txt, setTxt] = useState('');
    const txtfocus = useRef();
    const [no1,setNo1] = useState(''); 
    const [no2,setNo2] = useState('');
    const [res,setRes] = useState(0);

    const handleClickRes = () =>{
        setRes(parseInt(no1) + parseInt(no2));
        setNo1('');
        setNo2('');
        
    }

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

                        <input value={txt} ref={txtfocus} onChange={(e) => setTxt(e.target.value)} type="text" style={{ width: 400, height: 35, padding: 15, fontSize: 30, borderRadius: 30 }} autoCapitalize='off' autoCorrect='off' /><br /> <br /><br />
                        <p> {txt.length > 0 ? txt : 'TYPE SOMETHING IN TEXT BOX'} </p><br />
                        {txt.length}<br /><br />

                        <button onClick={() => handleClickFocus()} style={{ color: 'black', width: 250, height: 40, fontWeight: 'bold' }}>Focus</button><br /> <br />

                        <button  onClick={() => setTxt('')}  style={{width:300,height:40,borderRadius:10,border:'0.5px solid black'}}>CLEAR</button>

                    </center>

                    <br /> <br /> <hr /><br /> <br /> 


                    
                        <div className="task-addtwo">

                         <center>
                          <input  value={no1} placeholder="Enter Number1" onChange={(v) => setNo1(v.target.value)}  type="txt" style={{ width: 400, height: 35, padding: 15, fontSize: 30, borderRadius: 30 }} /><br/> <br/>
                          <input value={no2} onChange={(e) => setNo2(e.target.value)} placeholder="Enter Number2" type="txt" style={{ width: 400, height: 35, padding: 15, fontSize: 30, borderRadius: 30 }}/> <br/>  <br/>
                          <button  onClick={() => handleClickRes()}  style={{width:300,height:40,borderRadius:10,border:'0.5px solid black'}}>ADD</button><br /> <br />
                          <p>RESULT {res}</p>
                          <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> 
                          
                         </center>
                           
                        </div>
                    



                </div>

            </div>

        </>
    )
}