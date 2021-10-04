import React from "react";
import { NavLink} from 'react-router-dom';
import "./Logout.css";

function Logout() {

    return (
<div style={{marginLeft:`144px`}}>

<NavLink to="/"><button className = "button">Logout</button></NavLink>
</div>

    );
}

export default Logout;