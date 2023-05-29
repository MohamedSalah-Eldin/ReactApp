import React,{ Component } from 'react'
import { UserConsumer } from './MainContext';

 class CompnentThree extends Component {
    
  render() {
    return (
        <UserConsumer>{
            (username)=>{
                return(
                <div>                    
                        <h1>Welcome From Component Three-----------{username}</h1>
                    </div>             
                     )
            }
            }
    </UserConsumer>
    )
  }
}

export default CompnentThree;