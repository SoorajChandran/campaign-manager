import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './sidebar.css'

const Sidebar = () => (
<div className="sidebar">
  <div className="logo">
    <i className="fa fa-signal" aria-hidden="true"></i>
  </div>
  <Link to="/"> 
    <i className="fa fa-home" aria-hidden="true"></i>  
  </Link>   
</div>
)

export default Sidebar;
