import React, {useState} from 'react';
import Nav from './Nav';
import { NavLink } from 'react-router-dom';

function About(props){

    const [detail, setDetail]= useState({
        firstname:'',
        lastname:'',
        email:'',
        mobile:''
    });

    const [newdetail, newsetDetail]= useState({
        firstname:'',
        lastname:'',
        email:'',
        mobile:''
    });

    function InputEvent(event){
        const name = event.target.name;
        const value = event.target.value;


        newsetDetail((prevalue) => {
            return{
                ...prevalue,
                [name]:value,
            }
                
        });
    }

    function submit(event){
        event.preventDefault();

        setDetail(newdetail);
        alert("Personal Details Saved");
    }

    props.setpers(detail);

    return(
        <>
    <div className="conta">
    <div>
    <Nav />
    </div>
    <div style={{backgroundImage: 'url("./back.png")'}}>
    
        <div className="form container col-md-5 shadow-lg p-3 mb-5 bg-body rounded">

        <h3 className="black shadow-lg p-3 mb-5 bg-body rounded">Personal Details</h3>
        <form className = "shadow-lg p-3 mb-5 bg-body rounded">
            <div className="mb-3">
                <label className="form-label">Firstname</label>
                <input type="text" className="form-control" name="firstname" onChange={InputEvent}/>
               
            </div>
            <div className="mb-3">
                <label className="form-label">Lastname</label>
                <input type="text" className="form-control" name='lastname' onChange={InputEvent}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" name='email' onChange={InputEvent}/>
            </div>
            <div className="mb-3">
            
                <label className="form-label">Mobile</label>
                <input type="number" className="form-control" name='mobile' onChange={InputEvent}/>
            </div>
            <div className="cent">
            <button type="submit" onClick={submit} className="btn btn-success">Save</button>
            <NavLink to="/education"><button type="submit" className="btn btn-primary">Next</button></NavLink>
            </div>
        </form>
        </div>
    </div>
    </div>
    
    </>
    );
}

export default About;