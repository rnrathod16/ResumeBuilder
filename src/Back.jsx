import React from "react";
import { NavLink} from 'react-router-dom';
import "./Back.css"

function Logout() {

    return (
<>

<NavLink to="/"><button className = "button">Back</button></NavLink>
</>

    );
}

export default Logout;