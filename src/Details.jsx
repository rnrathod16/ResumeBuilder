import React from 'react';
import Nav from './Nav';

function Details(props){

    console.log(props.id);

    return(
        <>
    <div className="conta">
    <div>
    <Nav />
    </div>
    <div>
    
        <div className="form container col-md-5 shadow-lg p-3 mb-5 bg-body rounded">

        <h3 className="black shadow-lg p-3 mb-4 bg-body rounded">Generated Details</h3>
        <div className="shadow-lg p-3 mb-2 bg-body rounded">
        <h5>First Name :- {props.firstname}</h5>
        <h5>Last Name :- {props.lastname}</h5>

        <h5>Email :- {props.email}</h5>
        <h5>Mobile :- {props.mobile}</h5>
        </div>
        
        <div className="shadow-lg p-3 mb-2 bg-body rounded">
        <h5>University :- {props.university}</h5>
        <h5>From :- {props.from}  To :- {props.to}</h5>
        
        <h5>CGPA :- {props.cgpa}</h5>
        <h5>City :- {props.city}</h5>
        </div>
        
        <div className="shadow-lg p-3 mb-2 bg-body rounded">
        <h5>Project :- {props.pname}</h5>
        <h5>From :- {props.fromp}</h5>
        <h5>To :- {props.top}</h5>
        <h5>Mentor :- {props.mentor}</h5>
        <h5>Details :- {props.disc}</h5>
        </div>
        



            
        
        </div>
    </div>
    </div>
    
    </>
    );
}

export default Details;
