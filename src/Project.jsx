import React,{useState} from 'react';
import { NavLink, useHistory } from 'react-router-dom';

import n from './Form';

import Nav from './Nav';

function Project(props){

    const history = useHistory();
    if (!props.id) {
        history.push("/signin")
    }

    const [prodetail, prosetDetail]= useState({
        pname:'',
        from:'',
        to:'',
        mentor:'',
        disc:'',
        id:`${props.id}`
    });

    // const [newprodetail, newprosetDetail]= useState({
    //     pname:'',
    //     from:'',
    //     to:'',
    //     mentor:'',
    //     disc:'',
    //     id:`${props.id}`
    // });

    function change(event){
        const name = event.target.name;
        const value = event.target.value;


       prosetDetail((prevalue) => {
            return{
                ...prevalue,
                [name]:value,
            }
                
        });
    }

 

    const submiteve = async (e)=>{

        
        e.preventDefault();

// prosetDetail(newprodetail);
alert("Project Details Saved");

        const {pname,from,to, mentor, disc, id} = prodetail;

        const res = await fetch("/project",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                dproject:pname,dprofrom:from,dproto:to ,dmentor:mentor, ddesc:disc, id:id
            })
        })

        // const data = await res.json();

        

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
        <form className = "shadow-lg p-3 mb-3 bg-body rounded" method="POST">
            <div className="mb-3">
                <label className="form-label">Project Name {n} </label>
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
            <button type="submit" onClick={submiteve} className="btn btn-success">Save</button>
            <NavLink activeClassName="high" to="#"><button type="submit" className="btn btn-primary">Generate Resume</button></NavLink>
            
            </div>
        </form>
        </div>
    </div>
    </div>
    );
}

export default Project;