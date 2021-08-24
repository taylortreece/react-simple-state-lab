import React from 'react'

export default class Cell extends React.Component {
    constructor(props) {
        super()
        this.state ={
            color: props.value
        }
    }

    render() {
        return (
            <div className="cell" onClick={() => this.setState({color: "#333"})} style={{backgroundColor: this.state.color}} >
                <h1>I am!</h1>
            </div>
        )
    }
}