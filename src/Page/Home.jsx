import React,{useState} from 'react';
import './Home.css';
import Modal from './modal'
export default function Home() {
    const[isCheckModal,setModal] = useState(false)
    return (
        <>
            <center>
                <div className="txt-home">
                    <h1 style={{ textAlign: 'center', marginTop: 10, fontWeight: 'bold', fontSize: 340 }}>HOME</h1>
                </div>
            </center>

             
            <hr />
            <button onClick={() => setModal(!isCheckModal)}>CLICK ME</button>
            {isCheckModal &&
             <Modal/>
            }
            
        </>
    )
}

