import React, {useState} from 'react';
import Nav from './Nav';
import { NavLink,useHistory} from 'react-router-dom';


function About(props){

    const history = useHistory();
    if(!props.id){
        history.push("/signin")
    }
    

    const [detail, setDetail]= useState({
        firstname:'',
        lastname:'',
        email:'',
        mobile:'',
        id:`${props.id}`
    });

    // const [newdetail, newsetDetail]= useState({
    //     firstname:'',
    //     lastname:'',
    //     email:'',
    //     mobile:'',
    //     id:`${props.id}`
    // });

    function InputEvent(event){
        const name = event.target.name;
        const value = event.target.value;


        // newsetDetail((prevalue) => {
        //     return{
        //         ...prevalue,
        //         [name]:value,
        //     }
                
        // });
        setDetail((prevalue) => {
                return{
                    ...prevalue,
                    [name]:value,
                }
                    
            });
    }

    // console.log(props.id);

    

    const submiteve = async (e)=>{

        
        e.preventDefault();
        // setDetail(newdetail);
        // console.log(detail);
        alert("Personal Details Saved");

        const {firstname, lastname, email, mobile, id} = detail;

        const res = await fetch("/about",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                dfname:firstname, dlname:lastname, dmail:email, dmobile:mobile, id:id
            })
            // body: JSON.stringify(
            //     detail
            // )
        })

        const data = await res.json();

        

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
        <form className = "shadow-lg p-3 mb-5 bg-body rounded" method="POST">
            <div className="mb-3">
                <label className="form-label">First Name</label>
                <input type="text" className="form-control" name="firstname" onChange={InputEvent}/>
               
            </div>
            <div className="mb-3">
                <label className="form-label">Last Name</label>
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
            <button type="submit" onClick={submiteve} className="btn btn-success">Save</button>
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
