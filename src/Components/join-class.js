import React from 'react'
function JoinCard({id,handleChange,...otherProps}) {
    return (
<>

                            <div class="col-lg-3" style={{zIndex:"999"}}>
                                <div class="single_crm padd10 minheight200 shadow-default" id='tour-user'>
                                    
                                    <div class="crm_body">
                                        <div className="row space-between" >
                                            <div className="padd0">
                                        <div class="profile_info"><img src="img/client_img.png" alt="#"></img></div>
                                        </div>
                                        <div className="widthauto2" >
                                        <h4 className="join-class-heading " >Mathematics Class for today</h4>

                                        <p className="join-class-p">Ritesh Kumar</p><p className="join-class-p" >Started 10AM</p>
                                        </div>
                                        <div className="padd0">
                                        <p className="live"><i class="fa fa-circle"></i> LIVE</p>
                                        </div>
                                        </div>
                                      
                                        <div class="Chat_Listed_member">
            <ul className="row mart7">
                <li>
                        <div class="member_thumb">
                         <img className="width20" src="img/staf/1.png" alt=""></img>
                        </div>
                </li>
                <li>
                        <div class="member_thumb">
                         <img className="width20" src="img/staf/1.png" alt=""></img>
                        </div>
                </li>
                <li>
                        <div class="member_thumb">
                         <img className="width20" src="img/staf/1.png" alt=""></img>
                        </div>
                </li>
                <li>
                        <div class="member_thumb">
                         <img className="width20" src="img/staf/1.png" alt=""></img>
                        </div>
                </li>
                <li>
                <p className="join-class-p" style={{paddingTop:'6px'}}>+12 Particpants</p>
                </li>
            </ul>
        </div>
      
        <button type="button" class="mart7 card-button btn btn-danger rounded-pill width100 details mar" >Join Class</button>

                                    </div>

                                </div>
                            </div>
                         
  </>
    )
}
export default JoinCard;