import React from 'react'
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <div className="container">
                <div className="nav-columns">
                    <div className="nav-column">
                        <div className="nav-label">Menu</div>
                        <ul className="nav-links">
                            <li>
                               <NavLink to="/case-studies" exact>
                                    Case Studies
                               </NavLink>
                            </li>
                            <li>
                               <NavLink to="/approach" exact>
                                    Approach
                               </NavLink>
                            </li>
                            <li>
                               <NavLink to="/services">
                                    Services
                               </NavLink>
                            </li>
                            <li>
                               <NavLink to="/about">
                                    About
                               </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="nav-column">
                        <div className="nav-label">Contact</div>
                        <div className="nav-infos">
                            <ul className="nav-info">
                                <li className="nav-info-label">Email</li>
                                <li>
                                    <NavLink to="/contact" exact>
                                        Get in touch with us
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/audit" exact>
                                        Get a free audit
                                    </NavLink>
                                </li>
                            </ul>
                            <ul className="nav-info">
                                <li className="nav-info-label">Headquarters</li>
                                <li>Route de Jura 49</li>
                                <li>17000 Friburg</li>
                                <li>Switzerland</li>
                            </ul>
                            <ul className="nav-info">
                                <li className="nav-info-label">Phone</li>
                                <li>55 5232 55 55</li>
                            </ul>
                            <ul className="nav-info">
                                <li className="nav-info-label">Legal</li>
                                <li>Privacy and Cookies</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
