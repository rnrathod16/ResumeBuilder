import React, {useState} from 'react';

import Nav from './Nav';
import { NavLink,useHistory } from 'react-router-dom';


function Education(props){

    const history = useHistory();
    if (!props.id) {
        history.push("/signin")
    }

    const [edudetail, edusetDetail]= useState({
        university:'',
        from:'',
        to:'',
        cgpa:'',
        city:'',
        id:`${props.id}`
    });

    // const [newedudetail, newedusetDetail]= useState({
    //     university:'',
    //     from:'',
    //     to:'',
    //     cgpa:'',
    //     city:'',
    //     id:`${props.id}`
    // });

    function inputEvent(event){
        const name = event.target.name;
        const value = event.target.value;


       edusetDetail((prevalue) => {
            return{
                ...prevalue,
                [name]:value,
            }
                
        });
    }

   

    const submiteve = async (e)=>{

        
e.preventDefault();
// edusetDetail(newedudetail);
        alert("Education Details Saved");

const {university,from ,to, cgpa, city, id} = edudetail;

const res = await fetch("/education",{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body: JSON.stringify({
        duniname:university,dfromuni:from,dtouni:to, dcgpa:cgpa, dcity:city, id:id
    })
})

const data = await res.json();



}

    props.setedu(edudetail);

    return(
    <div className="conta">
    <div>
    <Nav />
    </div>
    <div>
        <div className="form container col-md-5 shadow-lg p-3 mb-5 bg-body rounded">

        <h3 className="black shadow-lg p-3 mb-5 bg-body rounded">Education Details</h3>
        <form className = "shadow-lg p-3 mb-5 bg-body rounded" method="POST">
            <div className="mb-3">
                <label className="form-label">University Name</label>
                <input type="text" className="form-control" name="university" onChange={inputEvent}/>
               
            </div>
            <div className="mb-2" style={{ display:"flex"}}>
                <label className="form-label">From</label>
                {/* <input type="date" className="form-control"/> */}
                <label className="form-label" style={{marginLeft:"242px"}}>To</label>
                {/* <input type="date" className="form-control"/> */}
            </div>
            <div className="mb-3" style={{ display:"flex"}}>
                {/* <label className="form-label">From</label> */}
                <input type="date" className="form-control" name="from" onChange={inputEvent}/>
                {/* <label className="form-label">To</label> */}
                <input type="date" className="form-control" name="to" onChange={inputEvent}/>
            </div>
            
                
            
            <div className="mb-3">
                <label className="form-label">CGPA</label>
                <input type="number" className="form-control" name="cgpa" onChange={inputEvent}/>
            </div>
            <div className="mb-3">
                <label className="form-label">City</label>
                <input type="text" className="form-control" name="city" onChange={inputEvent}/>
            </div>
            <div className="cent">
            <button type="submit" onClick={submiteve} className="btn btn-success">Save</button>
            <NavLink to="/project"><button type="submit" className="btn btn-primary">Next</button></NavLink>
            </div>
        </form>
        </div>
    </div>
    </div>
    );
}

export default Education;