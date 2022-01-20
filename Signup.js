import React from "react";
import { NavLink } from "react-router-dom";
import signupImg from "../Images/signp.jpg";
import ReactModal  from "react-modal";
import Login from "./Login";

class Signup extends React.Component{
    constructor () {
        super();
        this.state = {
          
          showModal1:false
        };
        
      
        this.handleOpenModal1 = this.handleOpenModal1.bind(this);
        this.handleCloseModal1 = this.handleCloseModal1.bind(this);
      }
      
      handleOpenModal1 () {
        this.setState({ showModal1: true });
      }
      
      handleCloseModal1 () {
        this.setState({ showModal1: false });
      }
      
      
    render(){
    return (
        <div>
        <section className="signup">       
        <div className="container mt-5">        
        <h3>Sign Up</h3>
        <div className="form-group">
        <label class="icon">
        <i class="zmdi zmdi-account "> </i> &nbsp;
        <input  type="text" name="name" class="input" autoComplete="off" placeholder="Your name"/>          
        </label>
        </div>
        <div className="form-group">
        <label class="icon">
        <i class="zmdi zmdi-email"></i> &nbsp;
        <input  type="text" name="name" class="input" autoComplete="off" placeholder="Your email"/>          
        </label></div>
        <div className="form-group">
        <label class="icon">
        <i class="zmdi zmdi-phone"></i> &nbsp;
        <input  type="text" name="name" class="input" autoComplete="off" placeholder="Your Mobile number"/>          
        </label></div>
        <div className="form-group">
        <label class="icon">
        <i class="zmdi zmdi-lock"></i>&nbsp;
        <input  type="text" name="name" class="input" autoComplete="off" placeholder="Your Password"/>          
        </label></div>
        <div className="form-group">
        <label class="icon">
        <i class="zmdi zmdi-lock-outline"></i>&nbsp;
        <input  type="text" name="name" class="input" autoComplete="off" placeholder="Confirm Password"/>          
        </label></div>
        <div className="form-group form-button">
        <input type="submit" name="signup" className="button"  value="register"/>
        </div>
        
        <NavLink className="nav-link" to="/login"> 
        <button className="btn1" onClick={this.handleOpenModal1}>Already have an account ?</button>
        <ReactModal 
           isOpen={this.state.showModal1}
           contentLabel="Minimal Modal Example"
        >
        <button onClick={this.handleCloseModal1}><i class="zmdi zmdi-close-circle"></i></button>
            <Login/>
          </ReactModal>
        </NavLink>
     
        <div >
        <figure className="signup-image">
        <img src={signupImg}  alt="pic" className="images"/>
        </figure>

        </div>
        </div>
        </section>
        </div>
    )
}
}

export default Signup;