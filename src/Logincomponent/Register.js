import React from 'react';
class Register extends React.Component{
    constructor(props){
        super();
        this.state = {
             email:'',
             password:'',
             username:''
        }
    }
    registerUser = (e) =>{
           this.setState({
             [e.target.name] : e.target.value
           });
    }
    userInfo = (e) => {
        e.preventDefault();
        console.log(this.state);
        alert("Hello " + this.state.username + " you are registered");
    }
    render(){
        return(
            <div>
            <h3>Register Here</h3>
            <form>
            <div>
                <label>Email</label>
                <input type="email" onChange={this.registerUser} name="email" value={this.state.email} placeholder="Please enter your email"></input>
            </div>
            <div>
                <label>Password</label>
                <input type="password" onChange={this.registerUser} name="password" value={this.state.password} placeholder="Please enter your secret"></input>
            </div>

            <div>
                <label>username</label>
                <input type="text" onChange={this.registerUser} name="username" value={this.state.username} placeholder="Please enter your username"></input>
            </div>
            <button onClick={this.userInfo}>register</button>
            </form>
        </div>
        );
    }
}

export default Register;