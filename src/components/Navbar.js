import React, { Component } from "react";
import PropTypes from "prop-types";
import logoSvg from "../assets/logo-newsapp-light.svg";
import { useState } from "react";

export class Navbar extends Component {
    mystyle = {fontSize:"20px"};
    render() {
        return (
            <>
                <nav className="navbar navbar-expand bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/home">
                            <img src={logoSvg} alt="Logo" width="50" height="50" className="d-inline-block align-text-top" />
                        </a>
                        <span className="navbar-brand mb-0 h1" id="brand-name" style={{fontFamily:"Glass Antiqua, cursive", fontSize:"35px"}}>News with React</span>
                        <div className="collapse navbar-collapse " id="navbarSupportedContent">
                            <ul className="navbar-nav justify-content-center ms-auto mb-2 mb-lg-0 ">
                                <li className="nav-item ">
                                    <a className="nav-link active" aria-current="page" href="/home" style={this.mystyle}>Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/premium" style={this.mystyle}>Premium</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" style={this.mystyle} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Topics
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="/topics/technology">Technology</a></li>
                                        <li><a className="dropdown-item" href="/topics/sports">Sports</a></li>
                                        <li><a className="dropdown-item" href="/topics/politics">Politics</a></li>
                                        <li><a className="dropdown-item" href="/topics/health">Health</a></li>                                        <li><a className="dropdown-item" href="/Topics/Health">Health</a></li>
                                        <li><a className="dropdown-item" href="/topics/business">Business</a></li>

                                        <li><hr className="dropdown-divider" /></li>

                                        <li><a className="dropdown-item" href="/LIVE">LIVE</a></li>
                                    </ul>
                                </li>
                                
                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" id="navbarSearch" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-danger" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}