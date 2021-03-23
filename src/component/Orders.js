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
        <tr>
        <th> {o.customerName}</th>
        <th> {o.customerAddress}</th>
        <th> {o.customerPhone}</th>
        <th>{o.productcode}</th>
        <th>{new Date(o.orderFrom).toISOString().slice(0, 10).replace('T', ' ')}</th>
        <th>{new Date(o.orderTo).toISOString().slice(0, 10).replace('T', ' ')}</th>
</tr>
        )      
    return (
      <div>
              <table class="styled-table">
                    <thead>
                           <tr>
                                  <th>Name</th>
                                  <th>Address</th>
                                  <th>MobileNO</th>
                                  <th>P.Code</th>
                                  <th>DateFrom</th>
                                  <th>DateTo</th>
                           </tr>
                    </thead>
                    <tbody>
                        
                        {orders}
                       
                    </tbody>
              </table>

      </div>
    );
  }
}

export default Orders;