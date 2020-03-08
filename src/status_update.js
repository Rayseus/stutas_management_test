import React, { Component } from 'react'
// import Status from './status_create'
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

let checkedValues = [];
let currStatus = {};
class UpdateStatus extends Component {
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        currStatus = this.props.location.query;
        console.log(currStatus)
    }

    handleDelete(){
        let deleteStatus = {
            pathname: '/main',
            deleted: currStatus
        }
        this.props.history.push('/main')
    }

    handleCheckBoxChange(e){
        const { value } = e.target
        if (checkedValues.indexOf(value) === -1) {
            checkedValues.push(value)
        } 
        else {
            checkedValues.splice(checkedValues.indexOf(value),1)
        }
        
        console.log(checkedValues)
    }

    handleUpdate(){
        this.setState({
            trans: checkedValues
        })
    }

    render(){

        return(
            <div>
                <p>Status Name: </p>
                <Button appearance="secondary" onClick={this.handleDelete}>Delete</Button>
                <div>
                    <p>Could be transfer to:</p><br />
                    <div>
                    <Form id='transTo'>
                        <input type='checkbox' value='self' onChange={(e) => this.handleCheckBoxChange(e)}/>Self<br />
                        <input type='checkbox' value='status_A' onChange={(e) => this.handleCheckBoxChange(e)}/>Status A<br />
                        <input type='checkbox' value='status_B' onChange={(e) => this.handleCheckBoxChange(e)}/>Status B<br />
                        <input type='checkbox' value='status_C' onChange={(e) => this.handleCheckBoxChange(e)}/>Status C<br />
                        <input type='checkbox' value='status_D' onChange={(e) => this.handleCheckBoxChange(e)}/>Status D<br />
                    </Form>
                    <br />
                    <Button appearance="primary" onClick={this.handleUpdate}>Update</Button>
                </div>
                </div>
            </div>
        )
    }
}

export default UpdateStatus;