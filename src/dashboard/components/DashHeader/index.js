import React from "react";
import "../styles/index.css";
import {Link, NavLink} from "react-router-dom";

const DashHeader = ({isActive}) => {
    return (
        <>
            <div className="Header">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/dashboard/home">Veximo</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className={`nav-link ${isActive === 'dashboard' ? 'current' : ''}`} to="/dashboard/home">Dashboard</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={`nav-link ${isActive === 'trades' ? 'current' : ''}`} to="/dashboard/trades">Trades</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={`nav-link ${isActive === 'assets' ? 'current' : ''}`} to="/dashboard/assets">Assets</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink className={`nav-link ${isActive === 'ref_program' ? 'current' : ''}`} to="/dashboard/ref_program">Ref Program</NavLink>
                                </li>
                            </ul>

                            <div className="d-flex user-flex">
                                <ul>

                                <li className="nav-item dropdown">
                                    <NavLink className="nav-link dropdown-toggle" to="/" role="button"
                                       data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className='bx bx-user-circle'></i> josephlagbalu@gmail
                                    </NavLink>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <div className="transfer-id">
                                                <p>Your unique id for transfers</p>
                                                <h5>veximo-jos33y007 <button className="btn bt-sm btn-outline-secondary">
                                                    <i className='bx bx-copy'></i></button></h5>
                                            </div>
                                        </li>
                                        <li><NavLink className="dropdown-item" to="/dashboard/history/order">
                                            <i className='bx bx-file-blank'></i>Ordering history</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="/dashboard/settings">
                                            <i className='bx bx-cog'></i> Settings</NavLink></li>
                                        <li><NavLink className="dropdown-item log-out" to="/" >
                                            <i className='bx bx-log-out-circle'></i> Log Out</NavLink></li>
                                    </ul>
                                </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>

    )
}
export default DashHeader