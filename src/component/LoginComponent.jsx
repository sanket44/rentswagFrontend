import React, { Component } from 'react';
import './Login.css';

import ApiService from "../Service/ApiService"
class LoginComponent extends Component {
    constructor(props){
        super(props);
        this.state ={
            username: '',
            password: '',
            msg:'',
        }
        this.saveUser = this.saveUser.bind(this);
    }



    saveUser = (e) => {
        
        e.preventDefault();
        let user = {username: this.state.username, password: this.state.password};
        localStorage.setItem('username',user.username)
        ApiService.loginUser(user)
            .then(res => {
                localStorage.setItem('token',res.data.token)
                localStorage.setItem('roles',res.data.roles)
                localStorage.setItem('userinfo',res.data.usr)
                
                this.props.history.push('/');
                window.location.reload();
               
            }
            ).catch(error=>{
                if(error.response.status === 401 ){
                    this.setState({
                    
                        msg:"Password is wrong OR Your not Verified"
                    })
                }
                if(error.response.status === 403 ){
                    this.setState({
                        msg:"Invalid username"
                    })
                }
                if(error.response.status === 404 ){
                    this.setState({
                        msg:"Invalid  password"
                    })
                }
                
            }
           
            );
    }


    onChange = (e) =>
    this.setState({ [e.target.name]: e.target.value });
    
    render() {
        return (
            <div>
                        <form>
                          
                            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                            <input type="username"  className="form-control" name="username" placeholder="User Name" value={this.state.username}  onChange={this.onChange} required autoFocus />
                            <input type="password"  placeholder="password" name="password" className="form-control" value={this.state.password} onChange={this.onChange} required />
                            <button className=" w-100 btn btn-lg btn-primary btn btn-success " onClick={this.saveUser}>LogIn</button>
                        </form>
                        {this.state.msg &&  window.alert(this.state.msg)}
            </div>
        );
    }
}

export default LoginComponent;