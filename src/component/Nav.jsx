
import React, { Component } from "react";
import {  Link } from "react-router-dom";



class Nav extends Component {

  componentDidUpdate(){

  }
     
    constructor(props) {
        super(props);
        this.state = {
          user: localStorage.getItem("userinfo") ? JSON.parse(localStorage.getItem("userinfo")).roles[0].id : 5,
          products: [],
          cartItems:[],
          isloggedin:localStorage.getItem("userinfo") ? true : false

          // isloggedin:localStorage.getItem("userinfo") ? true : false
          
        };
        this.routerRef = React.createRef();
        //  window.addEventListener('storage', (e) => this.storageChanged(e));
      
        
      };

    


      logout = (e) => {
        e.preventDefault();
        this.setState({ user: null });
        localStorage.removeItem("username");
        localStorage.removeItem("cartItems");
        localStorage.removeItem("userinfo");
        localStorage.removeItem("token");
        window.location.reload();
      };

  
      
    render() {
     
     let cartItems=localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")).length :[];
        return (
        
            <div>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
                        <div className="container-fluid">
                            <Link to="/" className="navbar-brand"><img src="https://see.fontimg.com/api/renderfont4/5Y58/eyJyIjoiZnMiLCJoIjo4MSwidyI6MTI1MCwiZnMiOjY1LCJmZ2MiOiIjRUFFQUVBIiwiYmdjIjoiIzQxNkU3MyIsInQiOjF9/UmVudC1BLVN3YWc/vegan-style-personal-use.png" alt="logo of compony" height="60"></img></Link>
                            <div>
                            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                             
                                <li className="nav-item">
                                    <Link to="/register" className="nav-link active">Register</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/cart" className="nav-link active" >Cart({cartItems})</Link>
                                </li>
                               {
                                 this.state.user ===4 ?  <li className="nav-item">
                                 <Link to="/addproduct" className="nav-link active">Addproduct</Link>
                             </li> : null
                               }
                               {
                                 this.state.user ===4 ?  <li className="nav-item">
                                 <Link to="/orders" className="nav-link active">Show Orders</Link>
                             </li> : null
                               }
                                {!this.state.isloggedin ? (
                                  <li className="nav-item">
                                  <Link to="login" className="nav-link active">Login</Link>
                              </li>) : (<li class="nav-item">
                                    <Link to="/" className="nav-link active" onClick={(e)=>this.logout(e)}>Logout</Link>
                                </li>
                                 )}
                            </ul>
                            </div>
                        </div>
                     </nav>
       

            </div>
        );
    }
}




export default Nav;