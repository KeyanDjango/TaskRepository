import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { GiAtom } from "react-icons/gi";


export default function NavBar() {
    return (
        <div className="parent-nav">
            {/* Logo Text */}
            <div className="top-nav">
                <div style={{color:'white',fontWeight:'bold',fontSize:'55px'}}>
                    <Link to='/' style={{textDecoration:'none',color:'white'}}> <span>Logo</span> </Link>
                </div>
            {/* ICON */}
                <div  style={{marginTop:1,marginLeft:200}}>
                <GiAtom size={80} color='white'/>
                </div>
            {/* left nav */}
                <div class="nav-bar" style={{marginTop:15}}>
                    <nav>
                        <Link to="/" style={{textDecoration:'none',cursor:'pointer'}}> <button> HOME </button> </Link>
                        <Link to="/profile" style={{textDecoration:'none',cursor:'pointer'}}><button> Profile </button></Link>
                        <Link to="/task" style={{textDecoration:'none',cursor:'pointer'}}><button> Task </button></Link>
                    </nav>

                </div>

            </div>
        </div>
    )
}