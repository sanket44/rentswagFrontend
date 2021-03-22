import React, { Component } from 'react';
import axios from 'axios';

const USER_API_BASE_URL = 'https://rentswag.herokuapp.com/users';
class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state={
            
        }
        this.saveOrder=this.saveOrder.bind(this);
    }
    
    componentDidMount() {
      
  
        }
        saveOrder =(e)=>{
            const config={
                headers:{
                    Authorization:'Bearer '+ localStorage.getItem('token')
                }
               }
               let ord1= JSON.parse(localStorage.getItem("cartItems"))
               axios.post(USER_API_BASE_URL+"/listOfOrder",ord1,config).then(
                res =>{
                   localStorage.setItem("order",res.data)
                   localStorage.removeItem("cartItems");
                   this.props.history.push('/');
                }
            );
            

            
            }
    render() {
        //const orderdetail=JSON.parse(localStorage.getItem("order"))
        
        return (
            <div>
                <button onClick={this.saveOrder}>Place order</button>
                    {/* {orderdetail} */}
            </div>
        );
    }
}

export default Checkout;
