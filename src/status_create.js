import React, { Component } from 'react'
import { Dropdown } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

class StatusCreation extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            trans: []
        }
    }

    createStatus(value, statusList){
        this.setState({
            name: value,
            trans: statusList
        })
    }

    render(){
        return(
            <div>
                <p>Status Name: <input id='createStatus' type='text' value='New Status Name' /></p>
            </div>
            // <Dropdown title="Select a status">
            //         <Dropdown.Item>A</Dropdown.Item>
            //         <Dropdown.Item>B</Dropdown.Item>
            //         <Dropdown.Item>C</Dropdown.Item>
            // </Dropdown>
        );
    }
}

export default StatusCreation;