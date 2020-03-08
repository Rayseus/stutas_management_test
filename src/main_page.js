import React, { Component } from 'react';
import { Dropdown, ButtonToolbar } from 'react-bootstrap';


class Manager extends Component {
    constructor(props){
        super(props);
        this.status = {
            status_A: '',
            status_B: '',
            status_C: '',
            status_D: ''        
        }
    }

    componentDidMount(){
        // this.setState({
        //     this.state.status_A: "AAA",
        //     this,state.status_B: "BBBB"
        // })
    }

    render(){
        return(
            <div>
                <p>Current status is</p>
                <Dropdown title="Select a status">
                        <Dropdown.Item>Self</Dropdown.Item>
                        <Dropdown.Item>Status A</Dropdown.Item>
                        <Dropdown.Item>Status B</Dropdown.Item>
                        <Dropdown.Item>Status C</Dropdown.Item>
                        <Dropdown.Item>Status D</Dropdown.Item>
                </Dropdown>
            </div>
        );
    }

}
export default Manager;