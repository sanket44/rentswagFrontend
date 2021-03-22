import React, { Component } from 'react';
import ApiService from '../Service/ApiService';
class Orders extends Component {
  constructor(props) {
    super(props);
    this.state={
            orders:[]
    }
    this.retriveorders=this.retriveorders.bind(this);
  }

  componentDidMount(){
    this.retriveorders();
  }





  retriveorders=()=>{
    ApiService.GetallOrders().then(
      res => this.setState({
        orders: res.data
      })
    )
  }
  
  render() {
       const orders=this.state.orders.map(o=>
        <div class="row">
            <div class="col-sm">
               {o.customerName}
            </div>
            <div class="col-sm">
                {o.customerAddress}
            </div>
            <div class="col-sm">
               {o.customerPhone}
            </div>
            <div class="col-sm">
            {o.productcode}
            </div>
            <div class="col-sm">
            {new Date(o.orderFrom).toISOString().slice(0, 10).replace('T', ' ')}
            </div>
            <div class="col-sm">
            {new Date(o.orderTo).toISOString().slice(0, 10).replace('T', ' ')}
            </div>
         </div>
        
        )      
    return (
      <div>
        <div class="row">
          
        <div class="col"><strong>Name</strong></div>
        <div class="col"><strong>Address</strong></div>
        <div class="col"><strong>MobileNO</strong></div>
        <div class="col"><strong>P.Code</strong></div>  
        <div class="col"><strong>From</strong></div>
        <div class="col"><strong>TO</strong></div>
       </div>
          {orders}

      </div>
    );
  }
}

export default Orders;