import React, { Component } from 'react'
// import Status from './status_create'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

let checkedValues = []
class UpdateStatus extends Component {
    constructor(props){
        super(props);
        // this.props = props;
        this.state = {
            name: this.props.status.name,
            trans: this.props.status.checkedValues,
            isCurr: this.props.isCurr
        };
    }

    handleDelete(){
        if (!this.state.isCurr){
            this.setState({
                name: '',
                trans: []
            })
        }
        else{
            console,log("is current status, could not be deleted")
        }
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
                <p>Status Name: {this.state.name}</p>
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
