import React from 'react'
function PinCard() {
    return (
<>
<div className="ui-sortable-handle">
<div class="white_card mb_20 position-relative  shadow-default"  >
                        <div class="white_card_header padd111" >

                                <div class="single_crm  ">
                                  
                                    <div class="crm_body">
                                    <div className="row space-between" >
                                            <div className="row" >
                                            <div className=" padd0">
                                        <div class="profile_info" ><img src="img/client_img.png" alt="#"></img></div>
                                        </div>
                                        <div className="" >
                                        <h4 className="join-class-heading paddl18" >Javed Khan</h4>

                                        <p className="join-class-p paddl18" >1 min ago</p>

                                        </div>
                                        </div>

                                       <div className=" padd0">
                                       <div className="d-flex">
                                       <img src="img/menu-icon/pin.svg" alt="#" className="pin-icon"></img>                                       <div class="header_more_tool">
                                    <div class="dropdown">
                                        <span class="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
                                        <img className="bell-width" src="img/menu-icon/menu-v.svg" alt="#" ></img>    
                                        </span>
                                        <div class=" shadow-default dropdown-menu dropdown-menu-right position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(36px, 24px, 0px);" aria-labelledby="dropdownMenuButton" x-placement="bottom-end" >
                                        <a class="dropdown-item d-flex space-between"  href="#" ><strong>Reminder </strong> <img className="bell-width"  src="img/menu-icon/nav7.svg" alt=""></img></a>
                                        <a class="dropdown-item d-flex space-between" href="#" > <strong> Favourite </strong> <img className="bell-width" src="img/menu-icon/star.png" alt=""></img></a>

                                          <a class="dropdown-item d-flex space-between" href="#" > <strong>Download</strong>  <img className="bell-width" src="img/menu-icon/download.svg" alt=""></img></a>
                                        </div>
                                      </div>
                                </div>
                           
                                       </div>
                                      
                                       </div>
                                        </div>
                                        
                               
                            
                              
                                      
                                    </div>
                                    
                                </div>
                                
                                <h5 className="grey fontw5 card-padd">HTML - Advance Features</h5>
                                <div className="row d-flex space-between">
    <div className=" d-flex">
    <img src="img/menu-icon/comment.svg" className="bell-width"></img> <p className="paddtb10 fontauto discuss-padd" > Discuss </p>

</div>
<div>
                                <button type="button" class="card-button btn btn-danger rounded-pill width100 button-padd fontauto space-evenly" >Complete Assignment</button>                                    
</div></div>
</div></div></div>
</>
    )
}
export default PinCard;