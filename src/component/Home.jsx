import axios from 'axios';
import React, { Component } from 'react';



class Home extends Component {
    constructor(props){
        super(props);
        this.state ={
            user:'',
            list:[],
            products:[],
            cartItems:localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")):[],
           
        }
        this.addtocart = this.addtocart.bind(this);
        
    }
    componentDidMount() {
  
        axios.get("https://rentswag.herokuapp.com/users/getallproduct").then(
            res =>{
                this.setState({
                        products:res.data 
                });
            }
        );

      
      }; 
      addtocart = (p1) => {
        const cartItems=this.state.cartItems.slice();
        let alreadyIncart=false;
        cartItems.forEach((item)=> {
            if (item.code===p1.code) {
                item.count++;
                alreadyIncart=true;
            }
        });
        if (!alreadyIncart) {
            cartItems.push({...p1,count:1})
        }
        this.setState({cartItems});
        localStorage.setItem("cartItems",JSON.stringify(cartItems));

       // window.location.reload(true);
    window.location.replace(window.location.href)
  
    };
     
   
    render() {


           const list1=this.state.products.map(p1 => 
           <div className="product" key={p1.id}>
         <div className="product-image">
             <img src={p1.image} alt="not found"  width="200" height="200" />
         </div>
         <div className="product-details">
             <div className="product-name">
                 {p1.name}
             </div>
             <div className="product-details">
                 {p1.description}
             </div>
             <div className="product-price">
             ₹{p1.price}.00 /day
             </div>  
             {p1.status === "hot" ? <div className="hot">HOT</div> : ''}
             {p1.status === 'new' ? <div className="new">NEW</div> : ''}
            
         </div>
         
         
         <button className="  btn btn-lg btn-primary btn btn-success " onClick={()=>this.addtocart(p1)}>Add</button>
         </div>);
        return (
           

                
                              <div className="products"> {list1}</div>
      
                          
        
        );
    }
}


export default Home;
