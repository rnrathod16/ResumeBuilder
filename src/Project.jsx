import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';

import Nav from './Nav';

function Project(props){

    const [prodetail, prosetDetail]= useState({
        pname:'',
        from:'',
        to:'',
        mentor:'',
        disc:''
    });

    const [newprodetail, newprosetDetail]= useState({
        pname:'',
        from:'',
        to:'',
        mentor:'',
        disc:''
    });

    function change(event){
        const name = event.target.name;
        const value = event.target.value;


        newprosetDetail((prevalue) => {
            return{
                ...prevalue,
                [name]:value,
            }
                
        });
    }

    function submit(event){
        event.preventDefault();

        prosetDetail(newprodetail);
        alert("Project Details Saved");
    }

    props.setpro(prodetail);

    return(
    <div className="conta">
    <div>
    <Nav />
    </div>
    <div>
        <div className="form container col-md-5 shadow-lg p-3 mb-3 bg-body rounded">

        <h3 className="black shadow-lg p-3 mb-5 bg-body rounded">Project Details</h3>
        <form className = "shadow-lg p-3 mb-3 bg-body rounded">
            <div className="mb-3">
                <label className="form-label">Project Name</label>
                <input type="text" className="form-control" name="pname" onChange={change}/>
               
            </div>
            <div className="mb-2" style={{ display:"flex"}}>
                <label className="form-label">From</label>
                {/* <input type="date" className="form-control"/> */}
                <label className="form-label" style={{marginLeft:"242px"}}>To</label>
                {/* <input type="date" className="form-control"/> */}
            </div>
            <div className="mb-3" style={{ display:"flex"}}>
                {/* <label className="form-label">From</label> */}
                <input type="date" className="form-control" name="from" onChange={change}/>
                {/* <label className="form-label">To</label> */}
                <input type="date" className="form-control" name="to" onChange={change}/>
            </div>
            
                
            
            <div className="mb-3">
                <label className="form-label">Mentor</label>
                <input type="text" className="form-control" name="mentor" onChange={change}/>
            </div>
            <div class="mb-3">
            <label className="form-label">Description</label>

  <textarea class="form-control" placeholder="Leave a comment here" name="disc" onChange={change} style={{height: "100px"}}></textarea>
  {/* <label for="floatingTextarea2">Comments</label> */}
</div>
            <div className="cent">
            <button type="submit" onClick={submit} className="btn btn-success">Save</button>
            <NavLink activeClassName="high" to="/detail"><button type="submit" className="btn btn-primary">Next</button></NavLink>
            
            </div>
        </form>
        </div>
    </div>
    </div>
    );
}

export default Project;