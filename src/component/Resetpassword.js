import React, { Component } from 'react';
import ApiService from "../Service/ApiService"

class Resetpassword extends Component {
    constructor(props){
        super(props);
        this.state ={
            password:'',
            token:''

        }
        this.resetpass=this.resetpass.bind(this);
    }

    resetpass=()=>{
        var token=this.state.token
        var password=this.state.password
        ApiService.resetpassword(token,password).then(
            alert("Password Reset Successful"),
            this.props.history.push('/login')
          
        )
    
    }
    onChange = (e) =>
    this.setState({ [e.target.name]: e.target.value });
    render() {
        return (
            <div>
                <div>
                        <form className="form-signin">
                          <h1 className="h3 mb-3 fw-normal">Enter Your token which has been send to your email</h1>
                          <input type="text"  className="form-control" name="token" placeholder="Token" value={this.state.token}  onChange={this.onChange} required autoFocus />
                          <h1>     </h1>
                          <input type="password"  className="form-control" name="password" placeholder="New Password" value={this.state.password}  onChange={this.onChange} required autoFocus />
                          <button className=" w-100 btn btn-lg btn-primary btn btn-success " onClick={this.resetpass}>Send</button>
                      </form>
            </div>
            </div>
        );
    }
}

export default Resetpassword;