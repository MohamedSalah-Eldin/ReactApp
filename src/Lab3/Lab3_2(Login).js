import React, { Component } from "react";

class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
        usrname: "",
        password: "",
      };
    }
  
    handleInputChange = (event) => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
    };
  
    handleSubmit = (event) => {
      const { usrname, password } = this.state;
      console.log(`Name: ${usrname}, Password: ${password}`);
      event.preventDefault();
  
    };
  
    render() {
      const { usrname, password } = this.state;
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <h2>Login</h2>
            <div><label>
              Name:
             <input type="text" name="usrname" value={usrname} onChange={this.handleInputChange} />
            </label></div>
            
            <div><label>
              Password:
              <input type="password" name="password" value={password} onChange={this.handleInputChange} />
            </label></div>
            
            <button type="submit">Login</button>
          </form>
        </div>
      );
    }
  }

  export default Login;
