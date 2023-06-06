import React,{ Component } from 'react'
import { UserConsumer } from './MainContext';

 class CompnentFive extends Component {
    
  render() {


    return (
       
        <UserConsumer>{
            (username)=>{
                return(
                    <div>                    
                        <h1>Welcome From Component Five-----------{username}</h1>
                    </div>
                )
            }
            }
            </UserConsumer>
 
    )
  }
}

export default CompnentFive;