import React, { Component } from 'react'
import {Formik, Form, Field} from 'formik'
import CanonDataService from '../../service/CanonDataService'

class CanonAddComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: this.props.match.params.id,
            partName: '',
            partNumber: '',
            partPrice: ''
        }
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(values) {
        let newPart = {
            id: this.state.id,
            partName: values.partName,
            partNumber: values.partNumber,
            partPrice: values.partPrice
        }
        CanonDataService.addCanonPart(newPart)
        .then(()=>this.props.history.push(`/canon`))
    }

    render() {
        let {id, partName, partNumber, partPrice} = this.state
        return(
            <div><br/>
                <div className="jumbotron text-center p-3 my-3 bg-dark" style={{color: "white"}}>
                    <h1 className="font-weight-bold">Add New Part</h1>
                </div><br/>
                <div className="container p-3 my-3 bg-dark" style={{color: "white"}}>
                    <Formik
                        initialValues={{id, partName, partNumber, partPrice}}
                        onSubmit={this.onSubmit}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <fieldset className="form-group">
                                        <label>Part Name</label>
                                        <Field className="form-control" type="text" name="partName" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Part Number</label>
                                        <Field className="form-control" type="text" name="partNumber" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Part Price</label>
                                        <Field className="form-control" type="text" name="partPrice" />
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        )
    }
}

export default CanonAddComponent