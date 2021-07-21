import React,{useState} from 'react';
import './App.css';
import back2 from './img/back2.png'
import th from './img/th.svg'
import avtar from './img/avtar.svg'
import {Link} from 'react-router-dom'



function New(){

    const [fullName, setFullName]= useState({
        fname:"",
        email:"",
        uname:""
    });

    const inputEvent=(event)=>{
        console.log(event.target.value);
        console.log(event.target.name); 

        const {name, value}= event.target;
        setFullName((preValue)=>{
            console.log(preValue);

            return {
                ...preValue,
                [name]: value,
            };
        });

    };

    const onSubmits = (event)=>{
        event.preventDefault();
    };

    return(
<>

        <body style={{ backgroundImage: `url(${back2})`}} >

       
<div className="m" style={{ height:`100vh`}}>
    <div className="img">
        <img src={th} alt="bg"/>
    </div>
    <div className="login-content">
        <form  action="/signin" className="container-fluid col-md-9 shadow-lg p-3 mb-2 pt-2 bg-body rounded">
            <img src={avtar} alt="avtar"/>
            <h2 style={{color:`#031bf1`}}>Registration</h2>
            <div className="input-div one">
                <div className="i">
                    <i className="fas fa-user"></i>
                </div>
                <div className="div">

                    <input id="name" type="text" className="input " placeholder="Full Name" name="fname" onChange={inputEvent} value={fullName.fname}  />
                </div>
            </div>
            <div className="input-div one">
                <div className="i">
                    <i className="fas fa-envelope"></i>
                </div>
                <div className="div">

                    <input type="email" className="input " placeholder="Email" name="email" onChange={inputEvent} value={fullName.email} />
                </div>
            </div>
            <div className="input-div one">
                <div className="i">
                    <i className="fas fa-coffee"></i>
                </div>
                <div className="div">

                    <input type="text" className="input" placeholder="Username" name="uname" onChange={inputEvent} value={fullName.uname} />
                </div>
            </div>
            <div className="input-div pass">
                <div className="i">
                    <i className="fas fa-lock"></i>
                </div>
                <div className="div">

                    <input type="password" className="input" placeholder="Password"/>
                </div>
            </div>
            <div className="input-div pass">
                <div className="i">
                    <i className="fas fa-check"></i>
                </div>
                <div className="div">

                    <input type="password" className="input b" placeholder="Conform Password"/>
                </div>
            </div>
            
            <input type="submit" className="bt" value="SIGN UP"/>
            <div style={{ color: `rgb(129, 129, 129)`}}>Already have an Account ? <Link to="/signin" className="cnt dw" style={{textDecoration:`none`}}>LOGIN</Link></div>
        </form>
    </div>
</div>
 </body>

 </>


    );
}

export default New;
