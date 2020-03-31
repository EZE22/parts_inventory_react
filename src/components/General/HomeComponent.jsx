import React, { Component } from 'react'
import FooterComponent from '../HeaderAndFooter/FooterComponent';

class HomeComponent extends Component {
    constructor(props) {
        super(props) 
        this.nikonButtonClicked = this.nikonButtonClicked.bind(this)
        this.cannonButtonClicked = this.cannonButtonClicked.bind(this)
        this.sonyButtonClicked = this.sonyButtonClicked.bind(this)
    }

    nikonButtonClicked() {
        this.props.history.push(`/nikon`)
    }

    cannonButtonClicked() {
        this.props.history.push(`/canon`)
    }

    sonyButtonClicked() {
        this.props.history.push("/sony")
    }

    render() {
        return(
        <div>
            <br/>
            <div className="jumbotron text-center" style={{borderStyle: "solid", background: " #282c34", color: "white"}}>
                <h1>Parts Home Page</h1>
                <h2>Select which category you want below!</h2>
            </div>
            <div className="container">
                <br/><br/>
                <div className="row text-center">
                    <div className="col-sm-4">
                        <h2>NIKON</h2>
                        <p>This will take you to the Nikon parts inventory!</p>
                        <button className="btn btn-success" onClick={this.nikonButtonClicked}>Select</button>
                    </div>
                    <div className="col-sm-4">
                        <h2>CANON</h2>
                        <p>This will take you to the Canon parts inventory!</p>
                        <button className="btn btn-success" onClick={this.cannonButtonClicked}>Select</button>
                    </div>
                    <div className="col-sm-4">
                        <h2>Sony</h2>
                        <p>This will take you to the Sony parts page!</p>
                        <button className="btn btn-success" onClick={this.sonyButtonClicked}>Select</button>
                    </div>
                </div>
            </div>
            <FooterComponent />
        </div>       
        )
    }
}

export default HomeComponent