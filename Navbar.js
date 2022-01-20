import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from "react-router-dom";
import logo from "../Images/logo.png";
import ReactModal  from "react-modal";
import Signup from "./Signup";
import Login from "./Login";

class Navbar extends React.Component{
  constructor () {
    super();
    this.state = {
      showModal: false,
      showModal1:false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleOpenModal1 = this.handleOpenModal1.bind(this);
    this.handleCloseModal1 = this.handleCloseModal1.bind(this);
  }
  
  handleOpenModal1 () {
    this.setState({ showModal1: true });
  }
  
  handleCloseModal1 () {
    this.setState({ showModal1: false });
  }
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }
  
  render(){
    return (
        <div className="mynavbar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink className="navbar-brand" to="/">
  <img className="image" src={logo} alt="logo"></img>  
  </NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
    <li className="nav-item">
    <NavLink className="nav-link" to="/">Home</NavLink>
  </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
      </li>
      <li className="nav-item dropdown">
        <NavLink className="nav-link dropdown-toggle" to="/login" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Login
        </NavLink>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        <li className="nav-item">
        <NavLink className="nav-link" to="/login"> 
        <button className="btn1" onClick={this.handleOpenModal1}>User</button>
        <ReactModal 
           isOpen={this.state.showModal1}
           contentLabel="Minimal Modal Example"
        >
        <button onClick={this.handleCloseModal1}><i class="zmdi zmdi-close-circle"></i></button>
            <Login/>
          </ReactModal>
        </NavLink>
      </li>
          <NavLink className="dropdown-item" to="/adminLogin">Admin</NavLink>
         
        </div>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/signup"> 
        <button className="btn1" onClick={this.handleOpenModal}>Registration</button>
        <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example"
        >
        <button onClick={this.handleCloseModal}><i class="zmdi zmdi-close-circle"></i></button>
            <Signup/>
          </ReactModal>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
      </li>
    </ul>
    
  </div>
</nav>
        </div>
    )
}
}

export default Navbar;