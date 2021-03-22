import React, { Component } from 'react';
import ApiService from '../Service/ApiService';

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
                this.setState({message : 'User added successfully.'});
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
                        <form>
                            <h1 className="h3 mb-3 fw-normal">Please Register</h1>
                            <input type="username"  className="form-control" name="username" placeholder="User Name" value={this.state.username}  onChange={this.onChange} required  />
                            <input type="password"  placeholder="password" name="password" className="form-control" value={this.state.password} onChange={this.onChange} required />
                            <input type="email"placeholder="Email" name="email" className="form-control" value={this.state.email} onChange={this.onChange}/>
                            <input type="number"placeholder="PhoneNo" name="phone" className="form-control" value={this.state.phone} onChange={this.onChange}/>
                            <input type="Name" placeholder="Name" name="cname" className="form-control" value={this.state.cname} onChange={this.onChange}/>
                            <input type="Name" placeholder="Address" name="address" className="form-control" value={this.state.address} onChange={this.onChange}/>
                            <div className="checkbox mb-3"></div>
                            <button className=" w-100 btn btn-lg btn-primary btn btn-success " onClick={(e)=>this.saveUser(e)}>submit</button>
                           
                        </form>
                        {this.state.msg &&  <div><strong className="alert alert-danger">UserName or email already been used</strong></div>}
            </div>
        );
    }
}

export default Register;