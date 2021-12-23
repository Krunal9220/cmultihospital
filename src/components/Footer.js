import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

function Footer(props) {
    return (
        <>
            <div>
                <footer id="footer">
                    <div className="container d-md-flex py-4">
                        <div className="me-md-auto text-center text-md-start">
                            <div>
                                <h4>Address</h4>
                                <p>
                                    F-505, <br />
                                    Inovative Plazza<br />
                                    New Delhi, India<br /><br />
                                    <strong>Phone:</strong> +91 9988776655<br />
                                    <strong>Email:</strong> cityhospital@example.com<br />
                                </p>
                            </div>
                        </div>
                        <div className="social-links text-center text-md-right pt-3 pt-md-0">
                            <NavLink to={{pathname:"https://twitter.com/"}}  className="twitter" target="_blank">
                                <i className="bx bxl-twitter" />
                            </NavLink>
                            <NavLink to={{pathname:"https://www.facebook.com/"}}  className="facebook" target="_blank">
                                <i className="bx bxl-facebook" />
                            </NavLink>
                            <NavLink to={{pathname:"https://www.instagram.com/"}}  className="instagram" target="_blank">
                                <i className="bx bxl-instagram" />
                            </NavLink>
                            <NavLink to={{pathname:"https://www.skype.com/en/"}}  className="google-plus" target="_blank">
                                <i className="bx bxl-skype" />
                            </NavLink>
                            <NavLink to={{pathname:"https://www.linkedin.com/"}}  className="linkedin" target="_blank">
                                <i className="bx bxl-linkedin" />
                            </NavLink>
                        </div>
                    </div>
                </footer>
                <NavLink to="/" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></NavLink>
            </div>

        </>
    );
}

export default Footer;