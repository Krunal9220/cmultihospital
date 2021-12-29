import React, { useState } from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import Button, { ButtonType, buttonType } from '../components/common/button/Button';
import InputBox from '../components/common/InputBox/InputBox';

function Sign_in_up(props) {
    const [userType, setUserType] = useState("Signup");
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [reset, setReset] = useState(false);

    const handleSignup = () => {
        console.log(name)
        console.log(email)
        console.log(pass)
    }

    const handleSignin = () => {
        console.log(email)
        console.log(pass)
    }

    const handleReset = () => {
        console.log(email)
    }

    const handleGoogleLogin = () => {

    }

    return (
        <div className="container mt-5 pt-5">
            <div className="section-title pt-3">
                {
                    reset === true ? <h2>Forgotten password</h2> :
                        userType === 'Signup' ?
                            <h2>Sign Up</h2>
                        :
                            <h2>Sign In</h2>
                }
            </div>
            <div className="col-lg-12 mt-5 mt-lg-0">
                <div className="php-email-form">
                    {
                        reset === true ? null :
                            userType === 'Signup' ?
                                <div className="row justify-content-center">
                                    <div className="col-lg-4 form-group">
                                        <InputBox
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            id="name"
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Your Name"
                                            required
                                        />
                                    </div>
                                </div>
                            : null
                    }
                    <div className="row justify-content-center">
                        <div className="col-lg-4 form-group my-2">
                            <InputBox
                                type="email"
                                className="form-control"
                                name="email"
                                onChange={(e) => setEmail(e.target.value)}
                                id="email"
                                placeholder="Your Email"
                                required
                            />
                        </div>
                    </div>
                    {
                        reset === true ? null :
                            <div className="row justify-content-center">
                                <div className="col-lg-4 form-group">
                                    <InputBox
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        id="password"
                                        onChange={(e) => setPass(e.target.value)}
                                        placeholder="Your password"
                                        required
                                    />
                                </div>
                            </div>
                    }

                    {
                        reset === true ? null :
                        <div className='passwordbtn'>
                            <Button buttonType={ButtonType.LINK} onClick={() => setReset(true)}>Forgotten Password?</Button>
                        </div>
                    }
                    

        
                    
                    <div className="text-center mt-3">
                        {
                            reset === true ? 
                                <Button buttonType={ButtonType.PRIMARY} onClick={() => handleReset()}>Send OTP or verify account</Button> :
                                    userType === 'Signup' ?
                                        <Button buttonType={ButtonType.PRIMARY} onClick={() => handleSignup()}>Sign up</Button>
                                    :
                                        <Button buttonType={ButtonType.PRIMARY} onClick={() => handleSignin()}>Sign in</Button>
                        }
                    </div>

                    {
                        reset === true ? null :
                            userType === 'Signup' ?
                            <div className='text-center'>
                            <p className='mt-2 mb-1'>OR</p>
                            <Button social buttonType={ButtonType.PRIMARY} onClick={() => handleGoogleLogin()}>
                                <NavLink to={{pathname:"https://accounts.google.com/"}} target="_blank">
                                    Login With Google
                                </NavLink>
                            </Button>
                        </div>
                            : null
                    }

                    <div className='text-center'>
                        {
                            userType === 'Signup' ?
                                <div>
                                    <label className='mt-3'>Already have an account?</label>
                                    <Button buttonType={ButtonType.LINK} onClick={() => {setReset(); setUserType('Signin')}}>Signin</Button>
                                </div>
                            :
                                <div>
                                    <label className='mt-3'>Don't Have an account?</label>
                                    <Button buttonType={ButtonType.LINK} onClick={() => {setReset(); setUserType('Signup')}}>Signup</Button>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sign_in_up;