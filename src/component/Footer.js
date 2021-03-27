import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer=(props)=>

{

return (
<div className="section_footer">
    	<div className="container">
    		<div className="mail_section">
    			<div className="row">
    				<div className="col-sm-6 col-lg-2" style={{marginLeft:"20px"}}>
    					<div><NavLink exact={true} to="/"><img src="Assets/images/logo.png "  alt="logo of compony" /></NavLink></div>
    				</div>
    				<div className="col-sm-6 col-lg-2"  style={{marginLeft:"10px"}}>
    					<div className="footer-logo"><img src="Assets/images/phone-icon.png" alt="logo of compony"/><span className="map_text">+1800-180-1111</span></div>
    				</div>
    				<div className="col-sm-6 col-lg-3">
    					<div className="footer-logo"><img src="Assets/images/email-icon.png"  alt="logo of compony"/><span className="map_text">help@rentaswag.co.in</span></div>
    				</div>
    				<div className="col-sm-6 col-lg-3">
    					<div className="social_icon">
    						<ul>
    						</ul>
    					</div>
    				</div>
    				<div className="col-sm-2"></div>
    			</div>
    	    </div> 
    	    <div className="footer_section_2" >
		        <div className="row" >
    		        <div className="col-sm-4 col-lg-2" >
    		        	
    		        </div>
    		        <div className="col-sm-4 col-lg-2">
    		        	<h2 className="shop_text">Address </h2>
    		        	<div className="image-icon" style={{marginLeft:"13px"}}><p></p><span className="pet_text">Mumbai,India</span></div>
    		        </div>
    		        <div className="col-sm-4 col-md-6 col-lg-3">
    				    <h2 className="shop_text">Our Company </h2>
    				    <div className="delivery_text" style={{marginLeft:"20px"}}>
    				    	<ul>
    				    	
								<li><NavLink className="delivery_text testing" exact={true} to="/about">About us</NavLink></li>
    				    
								<li><NavLink className="delivery_text testing" exact={true} to="/contact">Contact us</NavLink></li>
    				    	</ul>
    				    </div>
    		        </div>
    			<div className="col-sm-6 col-lg-3">
    				<h2 className="adderess_text">Products</h2>
    				<div className="delivery_text" style={{marginLeft:"45px"}}>
    				    	<ul>
    				    	<li>Chair</li>
    				    	<li>Fridge</li>
    				    	<li>Camera</li>
    				    	<li>Tables</li>    				    	</ul>
    				    </div>
    			</div>
    			<div className="col-sm-6 col-lg-2">
    				
    			</div>
    			</div>
    	        </div> 
	        </div>
    	</div>

    );
}

export default Footer;