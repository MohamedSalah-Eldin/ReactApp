import React, { Component } from 'react'

class Signup extends Component {

    constructor(props) {
        super(props)
        this.state={
            username: '',
            Email:'',
            courses:'',
            Password:''
        }
    }


    handleUserNameChange= (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handeleEmailChange=(event) => {
        this.setState({
            Email: event.target.value
        })
    }

    handelePasswordChange=(event) => {
        this.setState({
            Password: event.target.value
        })
    }

    handleCoursesChange=(event) => {
        this.setState({
            courses: event.target.value
        })
        console.log(event);
    }

    handleFormSubmit= (e) => {
        alert(`UserName is ${this.state.username}, Email: ${this.state.Email} your Fav Course: ${this.state.courses}`)
        e.preventDefault()
    }


  render() {
    const { username, Email, courses,Password} = this.state
    return (
        <form onSubmit={this.handleFormSubmit}>
            <div>
                <label>Username</label>
                <input type="text" required  value={username} onChange={this.handleUserNameChange} />
            </div>
            <div>
                <label>Email</label>
                <input type="email" value={Email} onChange={this.handeleEmailChange}></input>
            </div>
            <div>
                <label>Password</label>
                <input value={Password} onChange={this.handelePasswordChange}></input>
            </div>
            <div>
                <label>Courses</label>
                <select value={courses} onChange={this.handleCoursesChange}>
                    <option value='react'>React</option>
                    <option value='node'>Node</option>
                    <option value='javascript'>Javascript</option>
                </select>
            </div>
            <button type='submit'>Submit</button>
        </form>
    )
  }
}

export default Signup;
