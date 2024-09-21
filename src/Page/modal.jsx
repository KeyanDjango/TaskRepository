import React from 'react';
import './modal.css';

export default function Modal({ close }) {
    return (
        <>
            <div className="modal">
                <div className="modal_container">
                    <h1 style={{ textAlign: 'center' }}>ALERT</h1>
                    <hr />
                    <p style={{ textAlign: 'center', color: 'goldenrod', fontWeight: 'bold' }}>
                        Do you want to go that page?
                    </p>
                    <div className="modal-content-btn">
                        <button onClick={() => close()} style={{ width: 100, height: 30 }}>OK</button>
                        <button onClick={() => close()} style={{ width: 100, height: 30 }}>CANCEL</button>
                    </div>
                </div>
            </div>
        </>
    );
}
