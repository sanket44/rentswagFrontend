import React, { Component } from 'react';

class userpastorder extends Component {
    constructor(props) {
        super(props);
        this.state={
            pastorders:localStorage.getItem("userinfo") ? JSON.parse(localStorage.getItem("userinfo")).order:[],
            //localStorage.getItem("userinfo") ? JSON.parse(localStorage.getItem("userinfo")).order:[],
    }
    }
    componentDidMount(){
                this.setState({
                    pastorders:localStorage.getItem("userinfo") ? JSON.parse(localStorage.getItem("userinfo")).order:[],
                })
    }
    
    render() {
        const userpastorder=this.state.pastorders.slice();
   
        const orders=userpastorder.map(o=>
            <tr>
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