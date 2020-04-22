import React from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";

class Friends extends React.Component{
    state = {
        friends:[],isLoading: true
    }
    componentDidMount() {
        this.getData()
    }

    getData = () => {
        //reuqest data with the token
        //set the data to state
        axiosWithAuth()
            .get("/api/friends")
            .then(res => {
                this.setState({friends:res.data})
                this.setState({ ...this.state, isLoading: false });
            })
            .catch(err => console.log({ err } ))
    }
    render() {
        return (
            <div>
                {this.state.isLoading && <p> ЖДИ БЛЯТЬ ОНО ДУМАЕТ.  </p>}
                {this.state.friends.map(item => (
                    <li key = {item.id}>Name: {item.name} Age: {item.age} email: {item.email}</li>
                ))}
            </div>
        );
    }
}

export default Friends