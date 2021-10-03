import React from 'react';
import {NavLink} from 'react-router-dom';
import Logout from './Logout';

function Nav(){
    return(

        <>
        <nav className="sidebar">
      <div className="menu">
        <h3>Form</h3>
        <ul>
          <li><NavLink exact to="/about" activeStyle={{fontWeight: "bold",color: "cyan"}}>Personal</NavLink></li>
          <li><NavLink exact to="/education" activeStyle={{fontWeight: "bold",color: "cyan"}}>Education</NavLink></li>
          <li><NavLink exact to="/project" activeStyle={{fontWeight: "bold",color: "cyan"}}>Project</NavLink></li>
          
        </ul>
      </div>
      <Logout/>
    </nav>
        </>
    );
}

export default Nav;