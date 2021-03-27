import React from 'react';


const contact=(props)=>

{

return (
<div className="email_box">
                    <div className="input_main">
                       <div className="container">
                          <form action="/action_page.php">
                            <div className="form-group">
                              <input type="text" className="email-bt" placeholder="Name" name="Name"/>
                            </div>
                            <div className="form-group">
                              <input type="number" className="email-bt" placeholder="Phone Number" name="Phone"/>
                            </div>
                            <div className="form-group">
                              <input type="email" className="email-bt" placeholder="Email" name="Email"/>
                            </div>
                            
                            <div className="form-group">
                                <textarea className="massage-bt" placeholder="Message" rows="5" id="Message" name="Message"></textarea>
                            </div>
                          </form>   
                       </div> 
                       <div className="send_btn">
                        <button className="main_bt" >Send</button>
                       </div>                   
                    </div>
    		</div>
    			
    );
}

export default contact;