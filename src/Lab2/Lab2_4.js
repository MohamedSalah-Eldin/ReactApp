import React, { Component } from 'react'

class AddCart extends Component {
    constructor(props) {
        super(props)
        this.state={
         counter:1,
          }
        this.plus = this.plus.bind(this)
        this.minus = this.minus.bind(this)
    }

    plus() {
      let x =this.state.counter
        this.setState(
          {counter:x + 1}
      );
      }

    minus() {
      let x =this.state.counter
      if(x >1){
        this.setState({
            counter:x - 1
          });}
    }




    render() {
        const {counter} = this.state;
        return (
            <div>
            <button onClick={this.minus} >-</button>              
             <span> {counter} </span> 
             <button onClick={this.plus}>+</button><br></br>            
             <button> Add to cart </button>

        </div>        
        )
    }
}

export default AddCart;



