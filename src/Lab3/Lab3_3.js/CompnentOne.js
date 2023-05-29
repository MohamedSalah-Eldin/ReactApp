import React,{ Component } from 'react'
import CompnentThree from "./CompnentThree";
import CompnentFive from "./CompnentFive";

class CompnentOne extends Component {
  render() {
    return (
        <div>      
             <CompnentThree/>
             <CompnentFive/>
        </div>

    )
  }
}

export default CompnentOne;

