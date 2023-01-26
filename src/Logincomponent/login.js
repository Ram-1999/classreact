import React from 'react';
import {Link} from "react-router-dom";

class Login extends React.Component{
    constructor(props){
        super();
        this.state = {
            username : '',
            password :''
        }
    }
    changeUser = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        });
       
    }
    userDetail = (e) =>{
        e.preventDefault();
        console.log(this.state);
    }

 render() {
    return(
        <div>
            <h3>Login Here</h3>
            <form>
            <div>
                <label>Username</label>
                <input type="email" name='username' value={this.state.username} placeholder="Enter your mail" onChange={this.changeUser}></input>
            </div>
            <div>
                <label>Password</label>
                <input type="password" name='password' value={this.state.password} placeholder="Please enter your secret" onChange={this.changeUser}></input>
            </div>
            <button onClick={this.userDetail} >Login</button>
            <Link to="/register" variant = "body2">
                Not have an account ? Sign up here </Link>
            </form>
        </div>
    );
 }
}

export default Login;