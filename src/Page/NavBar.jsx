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
                    <span>Logo</span>
                </div>
            {/* ICON */}
                <div  style={{marginTop:1}}>
                <GiAtom size={80} color='white'/>
                </div>
            {/* left nav */}
                <div class="nav-bar" style={{marginTop:15}}>
                    <nav>
                        <Link to="/" style={{textDecoration:'none'}}> <button> HOME </button> </Link>
                        <Link to="/profile"><button> Profile </button></Link>
                        <Link to="/task"><button> Task </button></Link>
                    </nav>

                </div>

            </div>
        </div>
    )
}