import React, { Component } from "react";
import Login from "./Lab3_2(Login)";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      isSignedUp: false,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    const { name, email, password, confirmPassword } = this.state;
    console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
    this.setState({ isSignedUp: true });
    event.preventDefault();
  };

  render() {
    const { name, email, password, confirmPassword, isSignedUp } = this.state;
    return (
      <div>
        {isSignedUp ? (
          <Login/>
        ) : (
          <form onSubmit={this.handleSubmit}>
            <h2>Sign Up</h2>
            <div><label>
              Name:
              </label>
              <input type="text" name="name" value={name} onChange={this.handleInputChange} /></div>
            
            <div><label>
              Email:
              </label>
              <input type="email" name="email" value={email} onChange={this.handleInputChange} /></div>
            
            <div> <label>
              Password:            
              </label>
              <input type="password" name="password" value={password} onChange={this.handleInputChange} /></div>
           
        
            <button type="submit">Sign Up</button>
          </form>
        )}
      </div>
    );
  }
}

export default Signup;
