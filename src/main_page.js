import React, { Component } from 'react';
import { Form, Dropdown, DropdownButton, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'


let statuses = [];
let currStatus = {};
let isReady = false;

class Status extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            trans: [],
            visiable: false
        }
    }
    
    componentDidMount(){
        if (isReady){
            this.setState({
                name: currStatus.name,
                trans: currStatus.trans,
                visiable: true
            })
            isReady = false;
        }
    }

    render(){
        console.log(this.state)
        const list = this.state.trans
        return(
            
            <div>
            {this.state.visiable && (
                <div>
                <div>{this.state.name}</div>
                <div>Could be transferred to
                    <DropdownButton title="Select a status">
                        {statuses.map((item => (<Dropdown.Item key={item.id} onClick={this.handleCompare}>{item.name}</Dropdown.Item>)))}
                    </DropdownButton>
                </div>
                </div>
            )}
            </div>
        )
    }
}

class Manager extends Component{    
    constructor(props){
        super(props);
        this.handleCreate = this.handleCreate.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.state = {
            status: []
        }
        // currStatus = this.props.location.query;      
        // statuses.push(currStatus)
    }

    componentWillMount(){
        currStatus = this.props.location.query;      
        statuses.push(currStatus)
        console.log(statuses.length)
        if (statuses.length !== 0)
            this.setState({
                status: statuses
            })
        let deleteStatus = this.props.location.deleteStatus;
        if (deleteStatus !== undefined){
            console.log(deleteStatus)
            //statuses.splice(statuses.indexOf(deleteStatus),1)
        }
        console.log(deleteStatus)
    }

    handleCreate(){
        isReady = true
        this.props.history.push('/create')
    }

    handleUpdate(e){
        console.log(e.target.value)
    }

    render(){
        console.log(this.state)
        if(statuses[0] === undefined)
            statuses.shift();
        
        return(
            <div>
                <div>Current status is <Status /></div>
                <br />
                <Button appearance="primary" onClick={this.handleCreate}>Create Status</Button>
                <div><br />
                    <DropdownButton title="Select a status">
                        {statuses.map((item => (<Dropdown.Item key={item.id} onClick={()=>this.props.history.push({pathname: '/update', query: item})}>{item.name}</Dropdown.Item>)))}
                    </DropdownButton>
                </div>
            </div>
        );
    }

}



export default Manager;
