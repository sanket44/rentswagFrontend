import React, { Component } from 'react';
import ApiService from '../Service/ApiService';

class updatedetails extends Component {
    constructor(props){
        super(props);
        this.state ={
            username: '',
            password: '',
            email:localStorage.getItem("userinfo") ? JSON.parse(localStorage.getItem("userinfo")).email: '',
            phone: '',
            cname: localStorage.getItem("userinfo") ? JSON.parse(localStorage.getItem("userinfo")).cname:'',
            address:localStorage.getItem("userinfo") ? JSON.parse(localStorage.getItem("userinfo")).address:'',
            id:localStorage.getItem("userinfo") ? JSON.parse(localStorage.getItem("userinfo")).id:'',
            msg:'',
            usr:localStorage.getItem("userinfo") ? JSON.parse(localStorage.getItem("userinfo")) : null
        }
        this.updateuser = this.updateuser.bind(this);
    }
    updateuser = (e) => {
        e.preventDefault();
         let user = {id: this.state.id,email: this.state.email,username: this.state.username, password: this.state.password,  cname: this.state.cname, phone: this.state.phone,  address:this.state.address};
        // let user={
        //     "id":8,
        //     "username": "ds",
        //     "email": "sanketdhande@gmail.com",
        //     "password": "123456",
        //     "cname": "Jane1",
        //     "phone": "123456",
        //     "address":"llll"
           
        // }
        ApiService.editUser(user)
            .then(res => {
                // this.setState({message : 'User added successfully.'});
                alert("update successfull");
                this.props.history.push('/');
               
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
                            <h1 className="h3 mb-3 fw-normal">Updation Form</h1>
                            {/* <input type="password"  className="form-control" name="id" placeholder="Id" value={this.state.id} onChange={this.onChange} required  /> */}
                            <input type="username"  className="form-control" name="username" placeholder="User Name" value={this.state.username}  onChange={this.onChange} required  />
                            <input type="password"  placeholder="password" name="password" className="form-control" value={this.state.password}   onChange={this.onChange} required />
                            <input type="email"placeholder="Email" name="email" className="form-control" value={this.state.email} onChange={this.onChange}/>
                            <input type="tel"placeholder="PhoneNo" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"   minlength="10" maxlength="10" className="form-control" value={this.state.phone}  onChange={this.onChange}/>
                            <input type="Name" placeholder="Name" name="cname" className="form-control" value={this.state.cname} onChange={this.onChange}/>
                            <input type="Name" placeholder="Address" name="address" value={this.state.address} className="form-control" onChange={this.onChange}/>
                            {/* <div className="checkbox mb-3"></div> */}
                            <button className=" w-100 btn btn-lg btn-primary btn btn-success " onClick={(e)=>this.updateuser(e)}>submit</button>
                           
                 </form>
            </div>
        );
    }
}

export default updatedetails;
