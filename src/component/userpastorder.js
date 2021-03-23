import React, { Component } from 'react';

class userpastorder extends Component {
    constructor(props) {
        super(props);
        this.state={
            pastorders:localStorage.getItem("userinfo") ? JSON.parse(localStorage.getItem("userinfo")).order:[],
    }
    }
    

    
    render() {
        const userpastorder=this.state.pastorders.slice();
        const orders=userpastorder.map(o=>
            <div class="row">
                <div class="col-sm">
                   {o.customerName}
                </div>
                {/* <div class="col-sm">
                    {o.customerAddress}
                </div>
                <div class="col-sm">
                   {o.customerPhone}
                </div> */}
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
                {orders}
            </div>
        );
    }
}

export default userpastorder;