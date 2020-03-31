import React, { Component } from 'react'
import CanonDataService from '../../service/CanonDataService';

class CanonComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            parts: [],
            message: null,
        }
        this.refereshPartsRegistery = this.refereshPartsRegistery.bind(this)
        this.deletePartClicked = this.deletePartClicked.bind(this)
        this.updatePartClicked = this.updatePartClicked.bind(this)
        this.addPartClicked = this.addPartClicked.bind(this)
    }

    componentDidMount() {
        this.refereshPartsRegistery();
    }

    refereshPartsRegistery() {
        CanonDataService.retrieveAllCanonParts()
        .then(
            response => {
                this.setState({
                    parts: response.data,
                })
            }
        )
    }

    //deletePartsClicked
    deletePartClicked(id) {
        CanonDataService.deleteCanonPart(id)
        .then(
            response => {
                this.setState({message: `Part Deleted with ID: ${id}`})
                this.refereshPartsRegistery();
                alert(this.state.message)
            }
        )
    }

    //updatePartsClicked
    updatePartClicked(id, partName, partNumber, partPrice) {
        this.props.history.push(`/canonUpdatePart/${id}/${partName}/${partNumber}/${partPrice}`)
    }
    
    //addPartsClicked
    addPartClicked() {
        this.props.history.push(`/canonAddPart`)
    }
    

    render() {
        return(
            <div>
                <div className="container-xl">
                    <br/><h2 style={{textAlign: "center", fontSize: 50}}>Canon Parts Invenotry</h2><br/>
                    <div className="container p-3 my-3 bg-dark" style={{backgroundColor: "gray"}}>
                    <button type="button" className="btn btn-secondary pull-right btn-block" style={{fontSize: 30}} onClick={() => this.addPartClicked()}>Add New Part</button>   
                </div>             
                <table className="table table-dark table-hover" style={{textAlign: "center"}}>
                    <thead>
                        <tr style={{backgroundColor: "gray", fontSize: 25}}>
                            <th>Id</th>
                            <th>Part Name</th>
                            <th>Part Number</th>
                            <th>Part Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.parts.map (
                                parts => 
                                <tr style={{textAlign: "center", fontSize: 20}} key={parts.id}>
                                    <td>{parts.id}</td>
                                    <td>{parts.partName}</td>
                                    <td>{parts.partNumber}</td>
                                    <td>{parts.partPrice}</td>
                                    <td><button className="btn btn-success" onClick={() => this.updatePartClicked(parts.id, parts.partName, parts.partNumber, parts.partPrice)}>Update</button></td>
                                    <td><button className="btn btn-warning" onClick={() => this.deletePartClicked(parts.id)}>Delete</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            </div>
        )
    }
}

export default CanonComponent