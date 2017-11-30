import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css'

const Sidebar = () => (
<div className="sidebar">
  <div className="logo">
    <i className="fa fa-signal" aria-hidden="true"/>
  </div>
  <Link to="/"> 
    <i className="fa fa-home" aria-hidden="true"/>
  </Link>   
</div>
)

export default Sidebar;
