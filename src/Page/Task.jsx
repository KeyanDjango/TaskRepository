import React from 'react';
import '../App.css'
import {useNavigate} from 'react-router-dom';

export default function Task(){
    const navigate=useNavigate();
    return(
        <>
         <h2 style={{textAlign:'center'}}>TASK</h2>
         <hr/>
         <div className="task-parent">
             <div className="box1-task" onClick={() => navigate('/counter')}>
                 <h1>COUNTER</h1>
             </div>
             
             <div className="box2-task">
                 <h1>ADD TWO NUMBER</h1>
             </div>

             <div className="box3-task">
                 <h1>DOB Calculation</h1>
             </div>

             <div className="box4-task">
               <h1>Text Box Replicate</h1>
             </div>

             <div className="box4-task">
               <h1>Simple Calculator</h1>
             </div>

         </div>
        </>
    )
}