import React from 'react';
import './modal.css';

export default function Modal(){
    return(
        <>
         <div className="modal">
             <div className="modal_container">
                {/* Modal Content */}
                <h1 style={{textAlign:'center'}}>ALERT</h1>
                <hr/>
                <p style={{textAlign:'center',color:'goldenrod',fontWeight:'bold'}}>Do you want to go that page?</p>
                <div className="modal-content-btn">
                <button style={{width:100,height:30}}>OK</button>
                <button style={{width:100,height:30}}>CANCEL</button>
                </div>
                
             </div>
         </div>
        </>
    )
}