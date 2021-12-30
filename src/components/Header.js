import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

function Header(props) {
    return (
        <div>
            div class="main-header"&gt;
            <div id="topbar" className="d-flex align-items-center fixed-top">
                <div className="container d-flex justify-content-between">
                    <div className="contact-info d-flex align-items-center">
                        <i className="bi bi-envelope" /><NavLink to={{pathname:"mailto:contact@example.com"}} target="_blank">cityhospital@example.com</NavLink>
                        <i className="bi bi-phone" /> +91 9988776655
                    </div>
                    <div className="d-none d-lg-flex social-links align-items-center">
                            <NavLink to={{pathname:"https://twitter.com/"}}  className="twitter" target="_blank">
                                <i className="bi bi-twitter" />
                            </NavLink>
                            <NavLink to={{pathname:"https://www.facebook.com/"}}  className="facebook" target="_blank">
                                <i className="bi bi-facebook" />
                            </NavLink>
                            <NavLink to={{pathname:"https://www.instagram.com/"}}  className="instagram" target="_blank">
                                <i className="bi bi-instagram" />
                            </NavLink>
                            <NavLink to={{pathname:"https://www.linkedin.com/"}}  className="linkedin" target="_blank">
                                <i className="bi bi-linkedin" />
                            </NavLink>
                    </div>
                </div>
            </div>
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center justify-content-between">
                    <div className="logo">
                        <a href="index.html">
                            <h1 className="logo me-auto">City</h1><br />
                            <h2 className="logo-tiny-text me-auto">Multispeciality Hospital</h2>
                        </a>
                    </div>
                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li>
                                <NavLink exact to="/" className="nav-link scrollto">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/departments" className="nav-link scrollto">Departments</NavLink>
                            </li>
                            <li>
                                <NavLink to="/doctors" className="nav-link scrollto">Doctors</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className="nav-link scrollto">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className="nav-link scrollto">Contact</NavLink>
                            </li>
                            <li>
                                <NavLink to="/medicine " className="nav-link scrollto">Medicine</NavLink>
                            </li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle" />
                    </nav>
                    <div>
                        <NavLink to="/appoinment" className="appointment-btn scrollto">
                            <span className="d-none d-md-inline">Make an</span> Appointment
                        </NavLink>
                        <NavLink to="/login" className="appointment-btn scrollto">
                            <span className="d-none d-md-inline">Login</span>
                        </NavLink>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;