import React, { Component } from 'react';
import ApiService from '../Service/ApiService';

class userpastorder extends Component {
    constructor(props) {
        super(props);
        this.state={
            pastorders:[]                                 
            //localStorage.getItem("userinfo") ? JSON.parse(localStorage.getItem("userinfo")).order:[],
    }
    }
    componentDidMount(){
        this.fetchuser()
    }
    // componentDidUpdate(){
        
    //             this.fetchuser()
    //             }
                
                fetchuser=()=>{
                    var username=localStorage.getItem("username")
                    ApiService.fetchUsers(username).then(
                        res=>{
                            this.setState(
                                {
                                     pastorders:res.data.order
                                }
                            )
                        }
                    )
                   
                }
    
    cancleorder=(o)=>{
        var id=o.id;
        console.log(o.id)
         alert("are you sure")
               ApiService.updatestatus(id,2).then(
                 alert("Order Cancled"),
               )
              this.fetchuser()
              window.location.reload()
             
       }
    render() {
        const userpastorder=this.state.pastorders.slice();
   
        const orders=userpastorder.reverse().map(o=>
            
            o.status===0 ? 
            <tr className="alert alert-warning">
                            <th> {o.customerName}</th>
                            <th>{o.productcode}</th>
                            <th>{new Date(o.orderFrom).toISOString().slice(0, 10).replace('T', ' ')}</th>
                            <th>{new Date(o.orderTo).toISOString().slice(0, 10).replace('T', ' ')}</th>
                            <th><button className="btn btn-danger btn-sm" onClick={()=>this.cancleorder(o)}>X</button> </th>
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
                        
                        {orders}
                       
                    </tbody>
                </table>
            </div>
        );
    }
}

export default userpastorder;