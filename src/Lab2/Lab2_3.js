import React, { Component } from 'react'

class IsloggedIn extends Component {

    constructor(props) {
        super(props)
        this.state={
          isloggedIn:false,
          subscription:"Guest"      
          }
        this.Subscribe = this.Subscribe.bind(this)
        this.LogOut = this.LogOut.bind(this)

    }

    Subscribe() {
        this.setState({
          isloggedIn:true,
          subscription:"You now have a subscription"  ,      
          })
        alert("You now have a subscription")
    }

    LogOut() {
        this.setState({
          isloggedIn:false,
          subscription:"Guest"  ,      
          })
        alert("You need to Subscribe")
    }


  render() {
    console.log(this.state)
    const { isloggedIn, subscription } = this.state
return (
    <div>
        <button onClick={this.Subscribe}>Subscribe</button><br></br>
        <button onClick={this.LogOut}>LogOut</button>
        <p>your state is {isloggedIn.toString()} {subscription}</p>
    </div>
  )
}

}

export default IsloggedIn;
