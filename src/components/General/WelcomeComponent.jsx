import React, { Component } from 'react'
import FooterComponent from '../HeaderAndFooter/FooterComponent';

class WelcomeComponent extends Component{
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({
            username: event.target.value,
            password: event.target.value
        })
    }

    handleSubmit(event) {
        if(this.state.username === "admin" && this.state.password === "admin") {
            console.log("username: " + this.state.username)
            console.log("password: " + this.state.password)
            this.props.history.push(`/home`)
        } else {
            alert('Wrong username and password!')
        }
        
    }

    render() {
        return(
            <div>
            <br />
            <div className="jumbotron" style={{backgroundColor: "Gray", borderStyle: "groove"}}>
                <h1 style={{textAlign: "center", fontSize:70, color:"Black"}}>Welcome to the Parts Inventory!</h1>
            </div>
            <br></br>
            <div className="container" style={{backgroundColor: "LightGray", borderStyle: "solid", textAlign: "center", width: 250}}>
                <br/>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username: <input type="text" placeholder="username" value={this.state.value} onChange={this.handleChange}></input><br></br><br></br>
                        Password: <input type="password" placeholder="password" value={this.state.value} onChange={this.handleChange}></input>
                    </label>
                    <br></br>
                    <button className="btn btn-success" type="submit">Submit</button>
                </form>
                <br/>
            </div>

            <div className="part-image">
                <br></br>
                <img src="https://www.warehousesplus.com/wp-content/uploads/2017/11/commercial-storage.jpg" alt="description"  style={{borderStyle: "solid"}} />
            </div>
                <FooterComponent />
            </div>
        )
    }
}

export default WelcomeComponent