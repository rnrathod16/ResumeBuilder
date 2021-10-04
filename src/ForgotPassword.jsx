import React,{useState} from 'react';
import back from './img/1.png';
import bg from './img/bg.svg';
import { useHistory} from 'react-router-dom';
import EnvelopeSVG from '../src/img/envelope.svg';
import LockSVG from '../src/img/lock.svg';
import ConfirmPassSVG from '../src/img/confirmPass.svg';
import './Form.css';
import Back from "./Back";

function ForgotPassword(props){

    
    const history=useHistory();
    const [user,setUser]= useState({
        email: '',
        otp: '',
        password: '',
        confirmPass: '',
    });
    const [verified, setVerified] = useState(false);
    const [emailSubmitted, setEmailSubmit] = useState(false);

    const eventIn = (event) => {
        const {name, value}= event.target;

        setUser((preValue) => ({
            ...preValue,
            [name]: value,
        }));
    };

    const submiteve = async (e, name) => {
        e.preventDefault();

        // TODO: call post api

        switch (name) {
            case 'email':
                setEmailSubmit(true);
                break;
            case 'otp':
                setVerified(true);
                break;
            case 'reset':
                history.push('/signin');
                break;
            default:
                break;
        }
    };

    const renderVerifyEmail = () => (
        <>
            <h2 style={{ color: `#3f3d56` }}>Verify Email</h2>
            <div className="input-div one">
                <div className="i">
                    <img src={EnvelopeSVG} alt="fullName" className="regisFormIcon" />
                </div>
                <div className="div" >
                    <input type="text" className="input" name="email" placeholder="Email" onChange={eventIn} value={user.email} />
                </div>
            </div>
            <input onClick={(e) => submiteve(e, 'email')} type="submit" className="bt" value="Verify" />
            <Back />
        </>
    );

    const renderVerifyOTP = () => (
        <>
            <h2 style={{ color: `#3f3d56` }}>Verify OTP From Email</h2>
            <div className="input-div one">
                <div className="i">
                    <img src={LockSVG} alt="otp" className="regisFormIcon" />
                </div>
                <div className="div" >
                    <input type="password" className="input" name="otp" placeholder="One time password" onChange={eventIn} value={user.otp} />
                </div>
            </div>
            <input onClick={(e) => submiteve(e, 'otp')} type="submit" className="bt" value="Verify" />
            <Back />

        </>
    );

    const renderResetPass = () => (
        <>
            <h2 style={{ color: `#3f3d56` }}>Reset password</h2>
            <div className="input-div one">
                <div className="i">
                    <img src={LockSVG} alt="password" className="regisFormIcon" />
                </div>
                <div className="div" >
                    <input type="password" className="input" name="password" placeholder="Password" onChange={eventIn} value={user.password} />
                </div>
            </div>
            <div className="input-div pass">
                <div className="i">
                    <img src={ConfirmPassSVG} alt="confirmPassword" className="regisFormIcon" />
                </div>
                <div className="div">
                    <input type="password" className="input" name="confirmPass" placeholder="Confirm password" onChange={eventIn} value={user.confirmPass} />
                </div>
            </div>
            <input onClick={(e) => submiteve(e, 'reset')} type="submit" className="bt" value="Verify" />
            <Back />

        </>
    );

    return(
        <>
            <body style={{ backgroundImage: `url(${back})` }} >
                <div className="m " style={{ height:`100vh`}} >
                    <div className="img" >
                        <img src={bg} alt="bg" />
                    </div>
                    <div className="login-content" >
                        <form method="POST" className="fo container-fluid col-md-9 shadow-lg p-3 mb-2 pt-2 bg-body rounded formContainer">
                            <div className="forgotPassImage">
                                <img src={LockSVG}  alt="Avatar"/>
                            </div>
                            {
                                emailSubmitted
                                    ? (
                                        verified ? renderResetPass() : renderVerifyOTP() 
                                    )
                                    : renderVerifyEmail()
                            }
                        </form>
                    </div>

                </ div>
            </body>
        </>
    );
}

export default ForgotPassword;

