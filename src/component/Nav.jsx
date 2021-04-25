

// import React, { Component } from "react";
// import { Dropdown } from "react-bootstrap";
// import DropdownItem from "react-bootstrap/esm/DropdownItem";
// import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
// import DropdownToggle from "react-bootstrap/esm/DropdownToggle";

// import {  Link } from "react-router-dom";

// class Nav extends Component {


     
//     constructor(props) {
//         super(props);
//         this.state = {
//           user: localStorage.getItem("roles") ? JSON.parse(localStorage.getItem("roles")) : 0,
//           products: [],
//           cartItems:[],
//           isloggedin:localStorage.getItem("token") ? true : false
          
//         };
//       };
     

    
     

//       logout = (e) => {
//         e.preventDefault();
//         this.setState({ user: null });
//         localStorage.removeItem("username");
//         localStorage.removeItem("cartItems");
//         localStorage.removeItem("userinfo");
//         localStorage.removeItem("token");
//         localStorage.removeItem("roles");
//         localStorage.removeItem("order");
//         window.location.reload();
//         this.props.history.push('/');
//       };
      
//     render() {
// let cartItems=localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")).length :[];
//         return (
        
//             <div>
//                     <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
//                         <div className="container-fluid">
//                             <Link to="/" className="navbar-brand"><img style={{marginLeft:"20px"}} src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}  alt="logo of compony" width="230px" height="20px"></img></Link>
                           
//                             <div>
//                             <ul className="navbar-nav me-auto mb-2 mb-md-0">
//                                 {this.state.isloggedin ? (<li className="nav-item">
//                                     <Link to="/cart" className="nav-link active testing1" >Cart({cartItems})</Link>
//                                 </li>) : null}
//                                 {!this.state.isloggedin ? (
//                                   <li className="nav-item">
//                                   <Link to="login" className="nav-link active testing1">Login</Link>
//                               </li>) : (<li class="nav-item">
//                                     <Link to="/" className="nav-link active testing1" onClick={(e)=>this.logout(e)}>Logout</Link>
//                                 </li>
//                                  )}
//                                   {!this.state.isloggedin ?  (<li className="nav-item">
//                                     <Link to="/register" className="nav-link active testing1">Register</Link>
//                                 </li>) : null}
//                                  <Dropdown style={{marginRight:"40px"}}>
//                                    <DropdownToggle caret>
//                                    </DropdownToggle>
//                                    <DropdownMenu>
//                                    {this.state.user === 2 ?  <DropdownItem as={Link} to="/addproduct" >Addproduct</DropdownItem> : null }
//                                    {this.state.user === 2 ?  <DropdownItem as={Link} to="/orders" >Show Orders</DropdownItem> : null }
//                                    {this.state.user === 1 ?  <DropdownItem as={Link} to="/userpastorders" >Past Orders</DropdownItem> : null }
//                                    {this.state.user === 1 ?  <DropdownItem as={Link} to="/updatedetails" >Profile Update</DropdownItem> : null }
//                                    </DropdownMenu>
//                                  </Dropdown>
                                
//                             </ul>
//                             </div>
//                         </div>
//                      </nav>
       

//             </div>
//         );
//     }
// }




//  export default Nav;



import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";

import {  Link } from "react-router-dom";

function Nav() {
  const[user,setuser]=useState(0)
  const[isloggedin,setisloggedin]=useState(false)
  const [cartItems,setcartItems]=useState(0)
useEffect(() => {
    setuser(JSON.parse(localStorage.getItem("roles")) || 0)
}, [])
useEffect(() => {
  setisloggedin(localStorage.getItem("token") ? true : false)
}, [])
useEffect(() => {
  async function init() {
   // const data = await localStorage.getItem("cartItems"); 
    setcartItems(localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")).length :[]);
  }
  init();
}, [])
function logout (e) {
          e.preventDefault();
          setuser(null);
          localStorage.removeItem("username");
          localStorage.removeItem("cartItems");
          localStorage.removeItem("userinfo");
          localStorage.removeItem("token");
          localStorage.removeItem("roles");
          localStorage.removeItem("order");
          window.location.reload();
          this.props.history.push('/');
        };
  return (
        
    <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand"><img style={{marginLeft:"20px"}} src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}  alt="logo of compony" width="230px" height="20px"></img></Link>
                   
                    <div>
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        {isloggedin ? (<li className="nav-item">
                            <Link to="/cart" className="nav-link active testing1" >Cart({cartItems})</Link>
                        </li>) : null}
                        {!isloggedin ? (
                          <li className="nav-item">
                          <Link to="login" className="nav-link active testing1">Login</Link>
                      </li>) : (<li class="nav-item">
                            <Link to="/" className="nav-link active testing1" onClick={(e)=>logout(e)}>Logout</Link>
                        </li>
                         )}
                          {!isloggedin ?  (<li className="nav-item">
                            <Link to="/register" className="nav-link active testing1">Register</Link>
                        </li>) : null}
                         <Dropdown style={{marginRight:"40px"}}>
                           <DropdownToggle caret>
                           </DropdownToggle>
                           <DropdownMenu>
                           {user === 2 ?  <DropdownItem as={Link} to="/addproduct" >Addproduct</DropdownItem> : null }
                           {user === 2 ?  <DropdownItem as={Link} to="/orders" >Show Orders</DropdownItem> : null }
                           {user === 1 ?  <DropdownItem as={Link} to="/userpastorders" >Past Orders</DropdownItem> : null }
                           {user === 1 ?  <DropdownItem as={Link} to="/updatedetails" >Profile Update</DropdownItem> : null }
                           </DropdownMenu>
                         </Dropdown>
                        
                    </ul>
                    </div>
                </div>
             </nav>


    </div>
);
}
export default Nav;
