import React, { Component } from 'react';
import ApiService from "../Service/ApiService"



class Forgetpassword extends Component {
    constructor(props){
        super(props);
        this.state ={
            email: ''
           
        }
       this.forgetpass=this.forgetpass.bind(this);
    }

    // forgetpass=()=>{
    //     var email=this.state.email
    //     ApiService.forgetpassword(email).then(res =>
    //             {
    //                 alert("Token is been Sent to Your Email");
    //                 <Redirect to="/resetpassword"></Redirect>
    //             }
    //     )
    
    // }
    forgetpass=()=>{
        var email=this.state.email
        ApiService.forgetpassword(email).then
        (
                
                    alert("Token is been Sent to Your Email"),
                    this.props.history.push('/resetpassword')
                
        )
    
    }
    
    onChange = (e) =>
    this.setState({ [e.target.name]: e.target.value});
    render() {
        return (
            <div>
                        <form className="form-signin">
                          <h1 className="h3 mb-3 fw-normal">Enter Your Email We Sent you the reset token</h1>
                          <input type="text"  className="form-control" name="email" placeholder="Email" value={this.state.email}  onChange={this.onChange} required autoFocus />
                          <h1>     </h1>
                          <button className=" w-100 btn btn-lg btn-primary btn btn-success " onClick={this.forgetpass}>Send</button>
                      </form>
            </div>
        );
    }
}

export default Forgetpassword;