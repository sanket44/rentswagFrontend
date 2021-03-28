import React from 'react';
import Meetteam from './meetteam';

const aboutus=()=>
{
    

return (
<div style={{background:"#fff"}}>

<section className="section" id="about">

        <div className="container">


            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <div className="center-heading">
                        <h2>Meet the <em>Team</em></h2>
                    </div>
                </div>
                
                <div className="row">
               
                      <Meetteam name="Sanket Dhande" quote="" designation="Full Stack Developer " photo="./assets/images/chair1.png"/>
               


                </div>
            
            </div>
   





<br/>
<br/>
<div className="row meetbackground"  >
    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
        <h1 className="rm-main-head"><d1><dt>Hi! We’re RentAswag, an online rental solution for your furnishing needs.</dt><br/>

Why renting, you ask? <br/><br/><small className="text-muted">Well, because we understand that unnecessary furniture and appliance costs aren’t the best investment options. So we decided to come up with an easier solution so that you can say goodbye to all the hassles that come with buying and say hello to convenience. With us you will get</small></d1></h1>
        </div>


        <div className="col-lg-4 offset-lg-1 col-md-6 col-sm-12 col-xs-12 " >
        <img style={{  margin:"100px 50px 50px 50px"
}}
 src="./assets/images/logo.png" alt="Author One" width="200px" height="200px"/>
                           
        </div>

    </div>


            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12"
                    >
                    <div className="features-item">
                        <div className="features-icon">
                            <img src="./assets/images/finestquality.jpg" alt=""/>
                            <h4>Finest Quality Products</h4>
                            <p style={{height:"65px"}}>Quality matters to you, and us! That's why we do a strict quality-check for every product.</p>                            
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                        <div className="features-item">
                        <div className="features-icon">
                            <img src="./assets/images/relocation.JPG" alt=""/>
                            
                            
                            
                            <h4>Free relocation</h4>
                            <p style={{height:"70px"}}>Changing your house or even your city? We'll relocate your rented products for free.</p>

                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                    <div className="features-item">
                        <div className="features-icon">
                            <img src="./assets/images/easymaintain.JPG" alt=""/>
                            <h4>Free maintenance</h4>
                            <p style={{height:"70px"}}>Keeping your rented products in a spick and span condition is on us, so you can sit back and relax.</p>
                          
                        </div>
                    </div>
                </div>
            </div>

                  </div>
    </section>










</div>
);
}

export default aboutus;