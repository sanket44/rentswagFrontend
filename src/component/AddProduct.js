import React, { Component } from 'react';
import ApiService from '../Service/ApiService';
class AddProduct extends Component {

//code is partially done modify it 
constructor(props){
    super(props);
    this.state ={
        products:'',
        username: '',
        password: '',
        email: '',
        phone: '',
        cname: '',
        address:''
    }
    this.saveProduct = this.saveProduct.bind(this);
}



    saveProduct = (e) => {
        e.preventDefault();
        let products=[];
        let product = {code: this.state.code, name: this.state.name, price: this.state.price, image: this.state.image, description: this.state.description};
        products.push({...product})
        ApiService.saveProducts(products)
            .then(res => {
                //this.setState({message : 'User added successfully.'});
                
                window.alert("Product Added");
                window.location.reload();
            });


    }
    onChange = (e) =>
    this.setState({ [e.target.name]: e.target.value });
    
    render() {

        return (
            <div>
                <div>
                        <form className="form-signin">
                            <h1 className="h3 mb-3 fw-normal">Enter Product Details</h1>
                            <input type="number"  className="form-control" name="code" placeholder="Product Code" value={this.state.code}  onChange={this.onChange} required autofocus />
                            <input type="text"  placeholder="ProductName" name="name" className="form-control" value={this.state.name} onChange={this.onChange} required />
                            <input type="text"placeholder="Price" name="price" className="form-control" value={this.state.price} onChange={this.onChange}/>
                            <input type="text"placeholder="ImageURL" name="image" className="form-control" value={this.state.image} onChange={this.onChange}/>
                            <input type="text" placeholder="Product Description" name="description" className="form-control" value={this.state.description} onChange={this.onChange}/>
                            <div className="checkbox mb-3"></div>
                            <button className=" w-100 btn btn-lg btn-primary btn btn-success " onClick={(e)=>this.saveProduct(e)}>submit</button>
                        </form>
            </div>
            </div>
        );
    }
}

export default AddProduct;