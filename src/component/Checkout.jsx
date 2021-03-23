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
    

        saveOrder =(e)=>{
            const config={
                headers:{
                    Authorization:'Bearer '+ localStorage.getItem('token')
                }
               }
               let ord1= JSON.parse(localStorage.getItem("cartItems"))
               axios.post(USER_API_BASE_URL+"/listOfOrder",ord1,config).then(
                res =>{
                   localStorage.removeItem("cartItems");
                   alert("order Placed")
                   this.props.history.push('/');
                }
            );
            

            
            }
    render() {
        //const orderdetail=JSON.parse(localStorage.getItem("order"))
        
        return (
            <div>
                 
                <button onClick={this.saveOrder}>Place order</button>
                    
            </div>
        );
    }
}

export default Checkout;
