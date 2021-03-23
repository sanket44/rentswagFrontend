
import './App.css';
import LoginComponent from './component/LoginComponent';
import Nav from './component/Nav';
import {BrowserRouter, Route} from "react-router-dom";
import Home from './component/Home';
import Register from './component/Register';

import AddProduct from './component/AddProduct';
import ProductList from './component/ProductList';
import Cart from './component/Cart';
import Checkout from './component/Checkout';
import Orders from './component/Orders';
import userpastorder from './component/userpastorder';


function App() {
  return (
    // <div className="Bgimage" style={{ 
    //   // backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/images/background.jpg'})` 
    // }} >
    <div className="Bgimage" >
    <div className="App " >
 
        <BrowserRouter>
          <Nav />
        <Route path="/" exact component={Home} />
        <main className="form-signin"> 
            <Route path="/login" component={LoginComponent} />
            <Route path="/register" component={Register} />
           
            <Route exact path="/products" component={ProductList} />
            <Route exact path="/checkout" component={Checkout} />
        </main>
        <Route exact path="/addproduct" component={AddProduct} />
        <Route exact path="/orders" component={Orders} />
        <Route exact path="/userpastorders" component={userpastorder} />
        <Route exact path="/cart" component={Cart} />
        </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
