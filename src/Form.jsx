import React,{useState} from 'react';
import back from './img/1.png';
import bg from './img/bg.svg';
import avtar from './img/avtar.svg';
import { NavLink, useHistory} from 'react-router-dom';
import UserSVG from '../src/img/user.svg';
import LockSVG from '../src/img/lock.svg';
import './Form.css';

function Form(props){

    
    const history=useHistory();
    const [user,setUser]= useState({
        username:"",
        password:""
    });

    const eventIn=(event)=>{
        
        const {name, value}= event.target;
        setUser((preValue)=>{
            console.log(preValue);

            return {
                ...preValue,
                [name]: value,
            };
        });

    };

    const submiteve = async (e)=>{

        
        e.preventDefault();

        const {username, password} = user;

        const res = await fetch("/sign",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                username:username, password:password
            })
        })

        const data = await res.json();

        if(res.status === 422){
            window.alert("Invalid Credentials"); 
        }else if(!username|| !password){

            window.alert("Please fill all the details");
            console.log("Please fill all the details");

        }else{ 
            // console.log(data.message);
            props.setcid(data.message);
            history.push('/about');

            // this.props.history.push({
            //     pathname: '/template',
            //     search: '?query=abc',
            //     state: { detail: response.data }
            //   })
        }

    }



    return(
        <>
        <body style={{ backgroundImage: `url(${back})` }} >

                    
          
        <div className="m " style={{ height:`100vh`}} >
                        <div className="img" >
                            <img src={bg} alt="bg" />
                        </div>
                        <div className="login-content" >
                            <form method="POST" className="fo container-fluid col-md-9 shadow-lg p-3 mb-2 pt-2 bg-body rounded formContainer">
                                <img src={avtar}  alt="Avatar"/>
                                <h2 style={{color:`#3f3d56`}}> Welcome </h2>
                                <div className="input-div one">
                                <div className="i">
                                    <img src={UserSVG} alt="fullName" className="regisFormIcon" />
                                </div>
                                    <div className="div" >

                                        <input type="text" className="input" name="username" placeholder="Username" onChange={eventIn} />
                                    </div>
                                </div>
                                <div className="input-div pass" >
                                <div className="i">
                                    <img src={LockSVG} alt="password" className="regisFormIcon" />
                                </div>
                                    <div className="div" >
                                        <input type="password" className="input mb-4" name="password" placeholder="Password" onChange={eventIn}/>
                                    </div>
                                </div>
                                <div className="mt-3 fg-pass">
                                    <NavLink to="/forgot_password" className="cnt dw" style={{textDecoration:`none`}}>Forgot password ?</NavLink>
                                </div>
                                <input onClick={submiteve} type="submit" className="bt" value="Login" />
                               <NavLink to="/" className="cnt" style={{textDecoration:`none`, marginBottom:`40px`}}>SIGNUP</NavLink>
                               
                            </form>
                        </div>

                    </ div>
                   
                    </body>
        </>
    );
}

export default Form;

