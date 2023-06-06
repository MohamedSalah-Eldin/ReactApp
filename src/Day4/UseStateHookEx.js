import React, { useState } from 'react'

// class UseStateHookEx extends Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//             count : 0
//         }
//     }

//     handleCounter = () => {
//         this.setState({ count : this.state.count + 1}) 
//     }


//   render() {
//     return (
//       <div>
//             <h3>{this.state.count}</h3>
//             <button onClick={this.handleCounter}>Count : {this.state.count}</button>
//       </div>
//     )
//   }
// }

function UseStateHookEx () {

    const [count, setCount] = useState(10);

    const handleClick = () => {
        setCount(count + 1) ;
    }

    return (
        <div>
            Counter : {count}
            <br />
            <button onClick={handleClick}>Click {count} times</button>
        </div>
    )
}


export default UseStateHookEx;