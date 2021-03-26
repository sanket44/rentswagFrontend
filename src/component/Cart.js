import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Cart extends Component {
constructor(props) {
  super(props);
  this.state={
    products:localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")):[],
    cartItems:localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")):[],
    total:''

  }
  this.removeFromCart=this.removeFromCart.bind(this);
}



removeFromCart=(p)=>{
          
    const cartItems=this.state.cartItems.slice();
    this.setState({
        cartItems:cartItems.filter((x)=>x.code !== p.code),
    });
    localStorage.setItem("cartItems",JSON.stringify(cartItems.filter((x)=>x.code !== p.code)));
    window.location.reload()
};

async getuserinfo(){

    let username=localStorage.getItem("username")

    axios.get("https://rentswag.herokuapp.com/users/fetchbyusername/"+username).then(
        res =>{
            localStorage.setItem("userinfo",JSON.stringify(res.data))
        }
        
    );
}

 adddates=async(p,e)=>{
        await this.getuserinfo();
    this.setState({ [e.target.name]: e.target.value });
    const cusinfo=JSON.parse(localStorage.getItem("userinfo"))
    const cartItems=this.state.cartItems.slice();
        var from1=e.target.value;
        console.log(from1);
     cartItems.forEach((item)=> {
         if(item===p){
            p.orderFrom=from1 
            p.quanity=item.count
            p.productcode=item.code
            p.customerName=cusinfo.cname
            p.customerAddress=cusinfo.address
            p.customerEmail=cusinfo.email
            p.customerPhone=cusinfo.phone
            p.user=cusinfo.id
            p.user=cusinfo
        }           
        
    });

    this.setState({cartItems});
    localStorage.setItem("cartItems",JSON.stringify(cartItems));
   
};
adddates2=(p,e)=>{

   
    this.setState({ [e.target.name]: e.target.value });
       const cartItems=this.state.cartItems.slice();
       var to1=e.target.value;
        cartItems.forEach((item)=> {

           if(item===p){
            p.orderTo=to1
           }
               
       });

       this.setState({cartItems});
       localStorage.setItem("cartItems",JSON.stringify(cartItems));
      
   };
 onChange = (p,e) =>{
    this.setState({ [e.target.name]: e.target.value });
            this.adddates(p,e)
}
onChangeto = (p,e) =>{this.setState({ [e.target.name]: e.target.value });
            this.adddates2(p,e)
}

 getDifferenceInDays(date1, date2) {
    const diffInMs = Math.abs(date2 - date1);
    return diffInMs / (1000 * 60 * 60 * 24);
  }


  render() {

      const cartItemslist=this.state.cartItems.map(p=>
        <tr>
        <td> </td>
        <td>{p.name}</td>
        <td>In stock</td>
        <td><input type="date" name="from" min={new Date().toISOString().split("T")[0]} onChange={(e)=>(this.onChange(p,e))  } ></input></td>
        <td><input type="date" name="to" min={new Date().toISOString().split("T")[0]} onChange={(e)=>this.onChangeto(p,e) }></input></td>
        <td>{p.count}</td>
        <td className="text-right">₹{p.price} X {this.getDifferenceInDays(new Date(p.orderFrom),new Date(p.orderTo))} =</td>
        <td className="text-right">{p.price*this.getDifferenceInDays(new Date(p.orderFrom),new Date(p.orderTo))}</td>
        <td className="text-right"><button class="btn btn-sm btn-danger" onClick={()=>this.removeFromCart(p)} ><i class="fa fa-trash"></i> </button> </td>
    </tr>       
        );
        // const count= JSON.parse(localStorage.getItem('cartItems'))
        const count= this.state.cartItems.slice();
        //const count1=count.reduce((a,c)=>(a+c.price*c.count),0)
        const days=count.reduce((a,c)=>(a+c.price*c.count*( this.getDifferenceInDays(new Date(c.orderFrom),new Date(c.orderTo)))),0)

        // const days=count.reduce((a,c)=>{a+c.price*c.count*( this.getDifferenceInDays(new Date(c.orderFrom),new Date(c.orderTo))); return count},0)

        
     return (
      <div>
          <div className="container mb-4">
    <div className="row">
        <div className="col-12">
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col"> </th>
                            <th scope="col">Product</th>
                            <th scope="col">Available</th>
                            <th scope="col">From</th>
                            <th scope="col">To</th>
                            <th scope="col" class="text-center">Quantity</th>
                            <th scope="col" class="text-right">(Baseprice X Days)</th>
                            <th scope="col" class="text-right">Total</th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItemslist}
                        {/* <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Sub-Total</td> 
                             <td class="text-right">255,90 </td>
                            <td></td>
                        </tr> */}
                        <tr>
                           
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><strong>Total</strong></td>
                            <td class="text-right"><strong></strong>₹{days}</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className="col mb-2">
            <div className="row">
                <div className="col-sm-12  col-md-6">
                <Link to="/" className="btn btn-lg btn-block btn-success">Continue Shopping</Link>
                    
                </div>
                <div className="col-sm-12 col-md-6 text-right">
                <Link to="/checkout" className="btn btn-lg btn-block btn-success">Checkout</Link>
                   
                </div>
            </div>
        </div>
    </div>
</div>

      </div>
    );
  }
}


export default Cart;