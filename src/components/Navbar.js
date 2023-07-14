import React, { Component } from "react";
import PropTypes from "prop-types";
import logoSvg from "../assets/logo-newsapp-light.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
    
    const mystyle = { fontSize: "20px" };
    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg " data-bs-theme="dark" style={{backgroundColor: "#000000", color:"white"}}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                    <img src={logoSvg} alt="Logo" width="50" height="50" className="d-inline-block align-text-top" />

                    </a>
                    <span className="navbar-brand mb-0 h1" id="brand-name" style={{ fontFamily: "Glass Antiqua, cursive" ,
        fontSize: "35px" }}>News with React</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav justify-content-center ms-auto mb-2 mb-lg-0 ">
            <li className="nav-item ">
                <Link className="nav-link " aria-current="page" to="/" style={mystyle}>Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/premium" style={ mystyle}>Premium</Link>
            </li>
            <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" href="#" style={ mystyle} role="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    Topics
                </Link>
                <ul className="dropdown-menu">
                    <li>
                        <Link className="dropdown-item" to="/topics/technology">Technology</Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" to="/topics/sports">Sports</Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" to="/topics/politics">Politics</Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" to="/topics/health">Health</Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" to="/topics/business">Business</Link>
                    </li>
                    {/*<li><a className="dropdown-item" href="/LIVE">LIVE</a></li>*/}
                </ul>
            </li>
            <li className="nav-item">
                <Link className="nav-link mx-2" to="/LIVE" style={mystyle}>LIVE</Link>
            </li>

        </ul>
        <form className="d-flex" role="search">
            <input className="form-control me-2" id="navbarSearch" type="search" placeholder="Search"
                aria-label="Search" />
            <button className="btn btn-outline-danger" type="submit">Search</button>
        </form>
    </div>
                </div>
            </nav>
        </>
    )
}


