import { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';



function Navbar(){



    return(
       <>
       <nav className="navbar">
        <h1>Master class blog</h1>
        <div className='links'>
            {/* <a href='/'>home</a>
            <a href='create'>new blog</a> */}
            <Link to="/">Home</Link>
            <Link to="/create">New Blog Post</Link>
            <Link to="/about">about</Link>


        </div>

       </nav>

       </>
    
    )
    
}
export default Navbar;