import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik'
import CanonDataService from '../../service/CanonDataService'

class CanonUpdateComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            partName: this.props.match.params.partName,
            partNumber: this.props.match.params.partNumber,
            partPrice: this.props.match.params.partPrice
        }
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(values) {
        let part = {
            id: this.state.id, 
            partName: values.partName,
            partNumber: values.partNumber,
            partPrice: values.partPrice
        }
        CanonDataService.updateCanonPart(part)
        .then(()=> this.props.history.push('/canon'))
    }

    render() {
        let {id, partName, partNumber, partPrice} = this.state
        return(
            <div>
                <br/>
                <h1 className="jumbotron" style={{textAlign: "center", backgroundColor: "gray", color: "white"}}>Add or Update Part</h1>
                <div className="container">
                    <Formik
                        initialValues={{id, partName, partNumber, partPrice}}
                        onSubmit={this.onSubmit}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form className="jumbotron" style={{backgroundColor: "gray", color: "white"}}>
                                    <fieldset className="form-group">
                                        <label>Id</label>
                                        <Field className="form-control" type="text" name="id" disabled />
                                    </fieldset>
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

export default CanonUpdateComponent