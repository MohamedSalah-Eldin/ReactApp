import React, { Component } from 'react'

class FormHandling extends Component {

    constructor(props) {
        super(props)
        this.state={
            username: '',
            comments:'',
            courses:''
        }
    }


    handleUserNameChange= (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handeleCommentChange=(event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleCoursesChange=(event) => {
        this.setState({
            courses: event.target.value
        })
        console.log(event);
    }

    handleFormSubmit= (e) => {
        alert(`UserName is ${this.state.username}, Comments: ${this.state.comments} your Fav Course: ${this.state.courses}`)
        e.preventDefault()
    }


  render() {
    const { username, comments, courses} = this.state
    return (
        <form onSubmit={this.handleFormSubmit}>
            <div>
                <label>Username</label>
                <input type="text" required  value={username} onChange={this.handleUserNameChange} />
            </div>
            <div>
                <label>Comments</label>
                <textarea value={comments} onChange={this.handeleCommentChange}></textarea>
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

export default FormHandling;
