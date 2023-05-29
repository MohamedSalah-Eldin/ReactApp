import React, { Component } from 'react'



class ClassProps extends Component {
    render() {
        const {Course1, Course2} = this.props;
        return (
            <h1>Hi, I'm Mohamed, I study {Course1} and {Course2}</h1>
        )
    }
}

export default ClassProps;
