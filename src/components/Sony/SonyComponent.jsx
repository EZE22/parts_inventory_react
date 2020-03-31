import React, { Component } from 'react'

class SonyComponent extends Component {
    constructor(props) {
        super(props)
        this.state={
            parts: [],
            message: null,
        }
    }

    render() {
        return(
            <div><br />
                <h1 className="shadow p-4 mb-4 bg-white" style={{textAlign: "center"}}>Sony Component</h1>
            </div>
            
        )
    }
}

export default SonyComponent