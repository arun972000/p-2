/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./sidebar.css";
import Accordian from "./accordian";

const Sidebar = ({ toggle }) => {


  return (<ul className={`nav sidebar flex-column ${toggle ? 'show' : ''}`}>
    <a className="navbar-brand text-center my-2 mt-3" href="www.google.com"><h1 style={{ fontSize: "18px", color: "white" }}><i className="fa-solid fa-face-smile-wink fa-2x" style={{ color: "#ffffff" }}></i>{"       "}SB ADMIN</h1></a>
    <hr className="my-2"></hr>
    <li className="nav-item">
      <a className="nav-link Active" href="www.google.com"><i className="fas fa-fw fa-tachometer-alt"></i><span style={{ marginLeft: 8 }}>Dashboard</span></a>
    </li>
    <hr className="my-2"></hr>
    <li className="nav-item">
      <span className="nav-link" href="www.google.com"><b>INTERFACE</b></span>
    </li>
    <Accordian title="Comp" icon={<i className="fa-solid fa-gear" style={{ color: "#ffffff" }}></i>} />
    <Accordian title="Utilities" icon={<i className="fa-solid fa-wrench" style={{ color: "#ffffff" }}></i>} />
    <hr className="my-2"></hr>
    <li className="nav-item">
      <span className="nav-link" href="www.google.com"><b>ADDONS</b></span>
    </li>
    <Accordian title="Pages" icon={<i className="fa-solid fa-folder" style={{ color: "#ffffff" }}></i>} />
    <li className="nav-item my-2">
      <a className="nav-link Active" href="www.google.com"><i className="fa-solid fa-chart-simple" style={{ color: "#ffffff" }}></i><span style={{ marginLeft: 8 }}>Charts</span></a>
    </li>
    <li className="nav-item my-2">
      <a className="nav-link Active" href="www.google.com"><i className="fa-solid fa-table" style={{ color: "#ffffff" }}></i><span style={{ marginLeft: 8 }}>Tables</span></a>
    </li>
    <hr className="my-2 mb-3"></hr>
    <div class="sidebar-card d-none d-lg-flex">
    <i class="fa-solid fa-rocket fa-2x mb-2" style={{color: "#ffffff"}}></i>
      <p class="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
      <a class="btn btn-success btn-sm" href="#">Upgrade to Pro!</a>
    </div>
  </ul>)
}

export default Sidebar;