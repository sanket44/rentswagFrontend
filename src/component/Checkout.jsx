// import React, { Component } from 'react';
// import axios from 'axios';

// const USER_API_BASE_URL = 'https://rentswag.herokuapp.com/users';
// class Checkout extends Component {
//     constructor(props) {
//         super(props);
//         this.state={
//         }
//         this.saveOrder=this.saveOrder.bind(this);
//     }
    

//         saveOrder =(e)=>{
//             const config={
//                 headers:{
//                     Authorization:'Bearer '+ localStorage.getItem('token')
//                 }
//                }
//                let ord1= JSON.parse(localStorage.getItem("cartItems"))
//                axios.post(USER_API_BASE_URL+"/listOfOrder",ord1,config).then(
//                 res =>{
//                    localStorage.removeItem("cartItems");
//                    alert("order Placed")
//                    this.props.history.push('/');
//                    window.location.reload();
                   
//                 }
//             );
            

            
//             }
//     render() {
//         //const orderdetail=JSON.parse(localStorage.getItem("order"))
        
//         return (
//             <div>
                 
//                 <button onClick={this.saveOrder}>Place order</button>
                    
//             </div>
//         );
//     }
// }

// export default Checkout;
import React, { Component } from 'react';
import StripeCheckout from "react-stripe-checkout"
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
                   window.location.reload();
                }
            );
            

            
            }
    render() {
        //const orderdetail=JSON.parse(localStorage.getItem("order"))
        
        return (
            <div>

           
            <div className="stripe-section">
              <StripeCheckout 
              stripeKey="pk_test_51IW07MKaMkSi6NMvd24OdSj72KhanHecTQ1akzxrQXsbI0WzN7z6HzOsUnFAyLpAGCAVuLxgw6kN94vUeEDAG4Mf00Vu1aOH90"
            
              billingAddress
              shippingAddress
             
              name="All products"
              >
             

              </StripeCheckout>

              <button onClick={this.saveOrder}>Cash on Delivery</button>
          </div>
          </div>
        );
    }
}

export default Checkout;
