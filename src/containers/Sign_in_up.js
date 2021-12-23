import React, { useState } from 'react';

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

    return (
        <div className="container mt-5 pt-5">
            <div className="section-title">
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
                                    <input
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
                        :
                            null
                    }
                    <div className="row justify-content-center">
                        <div className="col-lg-4 form-group my-2">
                            <input
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
                            <input
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
                    
                    <div className="text-center mt-3">
                        {
                            reset === true ? 
                                <button type="submit" onClick={() => handleReset()} className='px-5 py-1 fs-5 border-0 btn-danger'>Send OTP or verify account</button> :
                                    userType === 'Signup' ?
                                        <button type="submit" onClick={() => handleSignup()} className='px-5 py-1 fs-5 border-0 btn-danger'>Sign up</button>
                                    :
                                        <button type="submit" onClick={() => handleSignin()} className='px-5 py-1 fs-5 border-0 btn-danger'>Sign in</button>
                        }
                    </div>
                    <div>
                        {
                            userType === 'Signup' ?
                                <div><label>Already have an account?</label><button className='border-0 btn-white text-primary' onClick={() => {setReset(); setUserType('Signin')}}>Signin</button></div>
                            :
                                <div><label>Don't Have an account?</label><button className='border-0 btn-white text-primary' onClick={() => {setReset(); setUserType('Signup')}}>Signup</button></div>
                        }

                        Forgotten Password?<button className='border-0 btn-white text-primary' onClick={() => setReset(true)}>Click</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sign_in_up;