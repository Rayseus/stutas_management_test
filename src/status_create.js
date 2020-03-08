import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

let checkedValues = [];
let statusName = '';

class Status extends Component{
    constructor(props){
        super(props);
        this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
        this.handleStatusNameChange = this.handleStatusNameChange.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
        this.state = {
            name: '',
            trans: []
        }
    }
 
    handleStatusNameChange(e){
        statusName = e.target.value
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

    handleCreate(){
        this.setState({
            name: statusName,
            trans: checkedValues
        })
        console.log(this.state)
    }

    render(){
        return(
            <div>
                <div>
                    <p>Status Name: <input id='createStatus' type='text' onChange={(e) => this.handleStatusNameChange(e)}/></p>
                </div>
                <div>
                    <p>Could be transfer to:</p>
                </div>
                <div>
                    <Form id='transTo'>
                        <input type='checkbox' value='self' onChange={(e) => this.handleCheckBoxChange(e)}/>Self<br />
                        <input type='checkbox' value='status_A' onChange={(e) => this.handleCheckBoxChange(e)}/>Status A<br />
                        <input type='checkbox' value='status_B' onChange={(e) => this.handleCheckBoxChange(e)}/>Status B<br />
                        <input type='checkbox' value='status_C' onChange={(e) => this.handleCheckBoxChange(e)}/>Status C<br />
                        <input type='checkbox' value='status_D' onChange={(e) => this.handleCheckBoxChange(e)}/>Status D<br />
                    </Form>
                </div>
                <br />
                <div>
                    <Button appearance="primary" onClick={this.handleCreate}>Create Status</Button>
                </div>
            </div>
        );
    }
}

export default Status;