import React, { Component } from 'react';
import { Dropdown, ButtonToolbar } from 'rsuite';


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
            </div>
        );
    }

}
export default Manager;