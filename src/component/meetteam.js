import React from 'react';

const meetteam=(props)=>

{

return (
    
    	<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div>
                        <div className="item service-item">
                            <div className="author">
                                <i><img style={{borderRadius:"50%"}} src={props.photo} alt="Author One" width="60px" height="60px"/></i>
                            </div>
                            <div className="testimonial-content">
                                <h2 className="text-white">{props.name}</h2>
                                <p>{props.quote}</p>
                                <span>“{props.designation}”</span>
                            </div>
                        </div>
                        
                       
                    </div>
                </div>

    

    );
}

export default meetteam;