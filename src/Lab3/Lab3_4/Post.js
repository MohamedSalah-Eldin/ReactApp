import axios from "axios";
import React, { Component } from "react";

class Post extends Component{
  constructor(props){
    super(props)
    this.state={
        userid:'',
        title:'',
        body:''
    }
  }
 HandlChange=(e)=>{
    this.setState({
        [e.target.name]: e.target.value
    })
 }

handlesubmit = (e) =>{
    e.preventDefault()

    axios.post("https://jsonplaceholder.typicode.com/posts",this.state)
    .then((Response)=>{
        console.log(Response);
    })
    .catch()
   
    }



    render(){
        return(
        <form onSubmit={this.handlesubmit}>
            <div >
                <label>userId</label>
                <input type="text" name="userid" value={this.state.userid} onChange={this.HandlChange}/>
            </div>
            <div >
                <label>title</label>
                <input type="text" name="title" value={this.state.title} onChange={this.HandlChange}/>
            </div>
            <div >
                <label>Body</label>
                <input type="text" name="body" value={this.state.body} onChange={this.HandlChange}/>
            </div>
            <button className="submit" type="submit">add to post</button>
        </form>

        )
    }
}

export default Post;