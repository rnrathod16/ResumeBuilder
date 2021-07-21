import React from 'react';
import back from './img/1.png'
import bg from './img/bg.svg'
import avtar from './img/avtar.svg'
import { Link} from 'react-router-dom';
import './Form.css';

function Form(){

    

    return(
        <>
        <body style={{ backgroundImage: `url(${back})` }} >

                    
          
        <div className="m " style={{ height:`100vh`}} >
                        <div className="img" >
                            <img src={bg} alt="bg" />
                        </div>
                        <div className="login-content" >
                            <form className="fo container-fluid col-md-9 shadow-lg p-3 mb-2 pt-2 bg-body rounded" action="/about">
                                <img src={avtar} alt="Avatar" style={{marginTop:`45px`}}/>
                                <h2 style={{color:`#031bf1`}}> Welcome </h2>
                                <div className="input-div one">
                                    <div className="i" >
                                        <i className="fas fa-user" > </i>
                                    </div> <div className="div" >

                                        <input type="text" className="input" placeholder="Username" />
                                    </div>
                                </div>
                                <div className="input-div pass" >
                                    <div className="i" >
                                        <i className="fas fa-lock" > </i>
                                    </div> <div className="div" >

                                        <input type="password" className="input mb-4" placeholder="Password" />
                                    </div>
                                </div>
                                <a href="/" className="mt-3" style={{textDecoration:`none`}}> Forgot Password ? </a>
                                <input type="submit" className="bt" value="Login" />
                               <Link to="/" className="cnt" style={{textDecoration:`none`, marginBottom:`40px`}}>SIGNUP</Link>
                               
                            </form>
                        </div>

                    </ div>
                   
                    </body>
        </>
    );
}

export default Form;