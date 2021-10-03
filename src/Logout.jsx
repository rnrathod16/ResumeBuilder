import React from "react";
import { NavLink} from 'react-router-dom';
import "./Logout.css";


function Logout() {

    return (
<>

<NavLink to="/"><button className = "button">Logout</button></NavLink>
</>

    );
}

export default Logout;