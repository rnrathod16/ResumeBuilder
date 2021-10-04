import React from "react";
import { NavLink} from 'react-router-dom';
// import "./Back.css"
import './Form.css';


function Logout() {

    return (
<>

{/* <NavLink to="/"><button className = "bt">Back</button></NavLink> */}
<NavLink to="/" className="cnt" style={{textDecoration:`none`, marginBottom:`40px`}}>Back</NavLink>
</>

    );
}

export default Logout;