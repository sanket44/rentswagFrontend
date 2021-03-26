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

  componentDidUpdate(){
    this.retriveorders();
  }

  retriveorders=()=>{
    ApiService.GetallOrders().then(
      res => this.setState({
        orders: res.data
      })
    )
  }
  cancleorder=(o)=>{
   var id=o.id;
   console.log(o.id)
    alert("are you sure")
          ApiService.updatestatus(id,2).then(
            alert("Order Cancled")
          )
  }

  delivered=(o)=>{
    var id=o.id;
    console.log(o.id)
    ApiService.updatestatus(id,1).then(
      alert("status updated to delivered")
    )
  }
  
  render() {    
  
      const orders=this.state.orders.reverse().map(o=>
        o.status===0 ? 
        <tr className="alert alert-warning" >
        <th > {o.customerName}</th>
        <th> {o.customerAddress}</th>
        <th> {o.customerPhone}</th>
        <th>{o.productcode}</th>
        <th>{new Date(o.orderFrom).toISOString().slice(0, 10).replace('T', ' ')}</th>
        <th>{new Date(o.orderTo).toISOString().slice(0, 10).replace('T', ' ')}</th>
        <th><button className="btn btn-danger btn-sm" onClick={()=>this.cancleorder(o)}>X</button> <button className="btn btn-success btn-sm" onClick={()=>this.delivered(o)}>✔</button></th>
        </tr> : 
        o.status===1 ? 
        <tr className="alert alert-success" >
        <th > {o.customerName}</th>
        <th> {o.customerAddress}</th>
        <th> {o.customerPhone}</th>
        <th>{o.productcode}</th>
        <th>{new Date(o.orderFrom).toISOString().slice(0, 10).replace('T', ' ')}</th>
        <th>{new Date(o.orderTo).toISOString().slice(0, 10).replace('T', ' ')}</th>
        <th></th>
        </tr> :
          <tr className="alert alert-danger" >
          <th > {o.customerName}</th>
          <th> {o.customerAddress}</th>
          <th> {o.customerPhone}</th>
          <th>{o.productcode}</th>
          <th>{new Date(o.orderFrom).toISOString().slice(0, 10).replace('T', ' ')}</th>
          <th>{new Date(o.orderTo).toISOString().slice(0, 10).replace('T', ' ')}</th>
          <th></th>
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
                                  <th>Status</th>
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