import React, { useEffect, useState } from 'react';
import ApiService from '../Service/ApiService';
function Userpastorder() {
    
    const[ pastorders,updatepastorders]=useState([]);
        useEffect(function effectFunction(){
            var username=localStorage.getItem("username");
             async function fetchorders(){
                 const response=await ApiService.fetchUsers(username);
                 const orders=await response.data.order
                 updatepastorders(orders);
             }
            fetchorders();
        },[]);
      async  function  cancleorder(o){
            var id=o.id;
               await ApiService.updatestatus(id,2).then(
                      alert("Order Cancled")
                )
                var username=localStorage.getItem("username");
                async function fetchorders(){
                    const response=await ApiService.fetchUsers(username);
                    const orders=await response.data.order
                    updatepastorders(orders);
                }
                fetchorders();
           }
            
            return (
                            <div>
                               
                                <table class="styled-table">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>P.Code</th>
                                            <th>DateFrom</th>
                                            <th>DateTo</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                           pastorders.reverse().map(o=>
            
                                            o.status===0 ? 
                                            <tr className="alert alert-warning">
                                                            <th> {o.customerName}</th>
                                                            <th>{o.productcode}</th>
                                                            <th>{new Date(o.orderFrom).toISOString().slice(0, 10).replace('T', ' ')}</th>
                                                            <th>{new Date(o.orderTo).toISOString().slice(0, 10).replace('T', ' ')}</th>
                                                            <th><button className="btn btn-danger btn-sm" onClick={()=>cancleorder(o)}>X</button> </th>
                                             </tr>:
                                              o.status===1 ? 
                                              <tr className="alert alert-success">
                                              <th> {o.customerName}</th>
                                              <th>{o.productcode}</th>
                                              <th>{new Date(o.orderFrom).toISOString().slice(0, 10).replace('T', ' ')}</th>
                                              <th>{new Date(o.orderTo).toISOString().slice(0, 10).replace('T', ' ')}</th>
                                             </tr>:
                                              <tr className="alert alert-danger">
                                              <th> {o.customerName}</th>
                                              <th>{o.productcode}</th>
                                              <th>{new Date(o.orderFrom).toISOString().slice(0, 10).replace('T', ' ')}</th>
                                              <th>{new Date(o.orderTo).toISOString().slice(0, 10).replace('T', ' ')}</th>
                                             </tr>
                                
                                            ) 
                                            
                                        }
                                        
                                       
                                    </tbody>
                                </table>
                            </div>
                        );
    
}
export default Userpastorder;