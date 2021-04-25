
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
import updatedetails from './component/updatedetails';
import Forgetpassword from './component/Forgetpassword';
import Resetpassword from './component/Resetpassword';
import Footer from './component/Footer';
import aboutus from './component/aboutus';
import contactus from './component/contactus';


function App() {
  return (
    <div className="Bgimage" >
    <div className="App " >
 
        <BrowserRouter>
          <Nav />
        <Route path="/" exact component={Home} />
        <main className="form-signin"> 
            <Route path="/login" component={LoginComponent} />
            <Route path="/register" component={Register} />
            <Route path="/updatedetails" component={updatedetails} />
            <Route exact path="/products" component={ProductList} />
            <Route exact path="/checkout" component={Checkout} />
            
        </main>
        <Route exact path="/addproduct" component={AddProduct} />
        <Route exact path="/forgetpassword" component={Forgetpassword} />
        <Route exact path="/resetpassword" component={Resetpassword} />
        <Route exact path="/orders" component={Orders} />
        <Route exact path="/userpastorders" component={userpastorder} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/about" component={aboutus} />
        <Route exact path="/contact" component={contactus} />
        <Footer />
        </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
