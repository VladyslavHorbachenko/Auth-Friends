import React from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";

class AddFriend extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            friend:{
                name:'',
                age:'',
                email:''
            }
        }
    }

    handlerChange = (e) => {
        this.setState({friend: {...this.state.friend,[e.target.name] : [e.target.value]}})
        console.log(this.state);

    }
    submitHandler = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post("/api/friends",this.state.friend)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
}
    render() {
        return (
            <div className="AddFriends">
                    <h2>Add Friend</h2>
                <form onSubmit= {this.submitHandler}>
                    <input type="text" onChange={this.handlerChange} placeholder="name" name = "name"/>
                    <input type="text" onChange={this.handlerChange} placeholder="Age" name = "age"/>
                    <input type="text" onChange={this.handlerChange} placeholder="Email" name = "email"/>
                    <button>Add Friend</button>
                </form>
            </div>
        );
    }
}
export default AddFriend