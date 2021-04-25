import { useEffect, useState } from "react";
import ApiService from '../Service/ApiService';
function Orders() {
  const[orders,updateorders]=useState([]);
  useEffect(function effectFunction(){
    fetchorders();
  },[]);

  async  function  cancleorder(o){
    var id=o.id;
       await ApiService.updatestatus(id,2).then(
              alert("Order Cancled")
        )
        fetchorders();
   }
   async function fetchorders(){
    const response=await ApiService.GetallOrders();
    const orders=await response.data;
    updateorders(orders);
  }
   async  function delivered(o){
    var id=o.id;
     await ApiService.updatestatus(id,1).then(
            alert("status updated to delivered"),
          )
          fetchorders(); 
   }

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
                            
                            
                           {

                              orders.reverse().map(o=>
                                      o.status===0 ? 
                                      <tr className="alert alert-warning" >
                                      <th > {o.customerName}</th>
                                      <th> {o.customerAddress}</th>
                                      <th> {o.customerPhone}</th>
                                      <th>{o.productcode}</th>
                                      <th>{new Date(o.orderFrom).toISOString().slice(0, 10).replace('T', ' ')}</th>
                                      <th>{new Date(o.orderTo).toISOString().slice(0, 10).replace('T', ' ')}</th>
                                      <th><button className="btn btn-danger btn-sm" onClick={()=>cancleorder(o)}>X</button> <button className="btn btn-success btn-sm" onClick={()=>delivered(o)}>✔</button></th>
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
                           }
                        </tbody>
                  </table>
    
          </div>
        );
}
export default Orders;