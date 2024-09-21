import React from 'react';
import profile from  '../images.jpg';

const Profile = () =>{
    return(
        <>
         <h3 style={{textAlign:'center',fontSize:40}}>Profile</h3>
         <hr/>

         <div>
           <center>
             <div>
                <img src={profile}  style={{border:"1px solid black",marginTop:10,borderRadius:100}} width={400} height={400}/>
             </div>
             <h1>Karthick G</h1><br/>
             <h1>React JS Developer</h1>
           </center>
           
        </div>

        </>
    )
}

export default Profile;