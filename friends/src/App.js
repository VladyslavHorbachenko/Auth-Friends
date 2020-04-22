import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Link,Switch} from "react-router-dom";
import Login from './components/Login'
import Friends from './components/Friends'
import PrivateRoute from "./components/ProtectedRoute";
import AddFriend from "./components/AddFriend";
import DeleteFriend from './components/DeleteFriends';
import './App.css'


function App() {
  return (
      <Router>
    <div className="App">

      <ul>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/add-friend'>Add Friend</Link>
        </li>
        <li>
          <Link to='/protected'>Protected Page</Link>
        </li>
        <Link to='/delete-friend'>Delete Friend</Link>
      </ul>
      <Switch>
        <PrivateRoute exact path = "/protected" component = {Friends}/>
        <PrivateRoute exact path = "/add-friend" component = {AddFriend}/>
        <PrivateRoute exact path='/delete-friend' component={DeleteFriend} />
        <Route  path = "/login" component = {Login}/>
        <Route component = {Login}/>
      </Switch>
    </div>
      </Router>
  );
}

export default App;
