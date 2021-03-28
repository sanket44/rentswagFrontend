import React, { Component } from 'react';
import ApiService from '../Service/ApiService';
import 'react-phone-number-input/style.css'

class Register extends Component {
    constructor(props){
        super(props);
        this.state ={
            username: '',
            password: '',
            email: '',
            phone: '',
            cname: '',
            address:'',
            msg:''
        }
        this.saveUser = this.saveUser.bind(this);
    }
    saveUser = (e) => {
        e.preventDefault();
        let user = {username: this.state.username, password: this.state.password, email: this.state.email, phone: this.state.phone, cname: this.state.cname, address:this.state.address};
        ApiService.addUser(user)
            .then(res => {
               
                alert("Registration Sucessfull Now verify email to activate");
                this.props.history.push('/login');
               
            }).catch(
                res=>{
                    this.setState({
                        msg:res.message
                    })
                }
            )
            ;
    }
    onChange = (e) =>
    this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <div>
                          {this.state.msg &&  <div className="alert alert-danger">UserName or email already been used Or You submitted Empty Boxes</div>}
                        <form>
                            <h1 className="h3 mb-3 fw-normal">Please Register</h1>
                            <input type="username"  className="form-control" name="username" placeholder="User Name" value={this.state.username}  onChange={this.onChange} required />
                            <h1>     </h1>
                            <input type="password"  placeholder="password" name="password" className="form-control" value={this.state.password} onChange={this.onChange} required />
                            <h1>     </h1>
                            <input type="email"placeholder="Email" name="email" className="form-control" value={this.state.email} onChange={this.onChange} required/>
                            <h1>     </h1>
                            <input type="tel"placeholder="PhoneNo" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"   minlength="10" maxlength="10" className="form-control" value={this.state.phone} onChange={this.onChange} required/>
                            <h1>     </h1>
                            <input type="Name" placeholder="Name" name="cname" className="form-control" value={this.state.cname} onChange={this.onChange} required/>
                            <h1>     </h1>
                            <input type="Name" placeholder="Address" name="address" className="form-control" value={this.state.address} onChange={this.onChange} required/>
                        
                            <button className=" w-100 btn btn-lg btn-primary btn btn-success " onClick={(e)=>this.saveUser(e)}>submit</button>
                           
                        </form>
                        
            </div>
        );
    }
}

export default Register;