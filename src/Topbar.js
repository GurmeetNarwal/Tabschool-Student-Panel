import React from 'react';
import Searchmenu from './Components/Searchmenu';
function Topbar() {
    const [show, divShow1] = React.useState(false)
    const [show1, divShow2] = React.useState(false)

    return (
<>

<div className="row">
            <div className="col-lg-12 p-0 ">
                <div className="header_iner d-flex justify-content-between align-items-center paddl14" >
                    <div className="sidebar_icon d-lg-none">
                        <i className="ti-menu"></i>
                    </div>
                    <div className="line_icon open_miniSide d-none d-lg-block">
                        
                    <img id="bar" className="bell-width" src="img/menu-icon/bar.svg" alt="" ></img>
                                            </div>
                    <div className="serach_field-area d-flex align-items-center " data-toggle="collapse" data-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample">
                    <div class="serach_field_2">
                                            <div class="search_inner">
                                                <form active="#" className="blue-background" >
                                                    <div class="search_field">
                                                        <input className="radius15" type="text" placeholder="Search content here..."></input>
                                                    </div>
                                                    <button type="submit"> <i class="ti-search"></i>
                                                   </button>
                                                </form>
                                            </div>
                                        </div>
                    </div>
                    <div className="collapse menu1"  id="collapseExample1" >
               <Searchmenu></Searchmenu>

                </div>
    
                    
                    <div className="header_right d-flex justify-content-between align-items-center paddr20" >
                        <div className="header_notification_warp d-flex align-items-center">
                    <li onClick={() => divShow2(true)}>
                    <span class="blink_text" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Attendence</span>                                    
                   
        <div className="write1 collapse position-index" id="collapseExample" s>
                      <div class="main_content_iner ">
        <div class="container-fluid p-0">
            <div class="row justify-content-center">
                
                <div class="col-lg-12">
             

                                      
                                    <div class="white_card mb_20 shadow-default padd0" >
                                    <div class="white_card_header topcal" >
                                    <h5 className="join-class-heading card-head paddl11">Attendence</h5>
                                        <div class="single_crm padd10 ">

                                            <div class="crm_body">
                                            
                                                <div class="form-group mb-0">
                                                    <input type="text" class="form-control" name="inputText" id="inputText" placeholder="Chandigarh"></input>
                                                </div>
                                                <br></br>
                                                <div class="form-group mb-0">
                                                    <input type="date" class="form-control" name="inputDate" id="inputDate"></input>
                                                </div>
                                                <br></br>
                                                <div class="form-group mb-0">
                                                    <input type="time" class="form-control" name="inputTime" id="inputTime"></input>
                                                </div>
                                                <br></br>
                                                <button type="button"  class="nxt-btn card-button btn btn-danger rounded-pill  details mar">Done</button>

                                            </div>

                                        </div>

                                    </div></div>

                                    </div>
                     
        </div>
    </div> 
    </div>
    
      

                </div>
    
                    </li>
                          
                            <li>
                                <a className="bell_notification_clicker" href="#"> 
                                <img src="img/menu-icon/bell.svg" alt=""></img>
                                    <span></span>
                                </a>
                            <div className="Menu_NOtification_Wrap height700">
                                <div className="notification_Header">
                                <div className="d-flex space-between">
                                <h3 className="pop-head">Notifications</h3>
                                <img src="img/menu-icon/dott.svg" alt="#" className="bell-width"></img>
                                </div>
                               
                                    
                                    <div className="d-flex space-between">
                                    <h5>New</h5>
                                    <h5 className="colorb">See all</h5>
                                </div>
                                </div>
                                
                                <div className="Notification_body paddt0" >
                                    
                                    <div className="space-between single_notify d-flex align-items-center ">
                                        <div className="notify_thumb">
                                            <a href="#">
                                            <img src="img/staf/2.png" alt=""></img></a>
                                            
                                        </div>
                                        <div className="width200 notify_content">
                                            <a href="#"><h5>Cool Marketing </h5></a>
                                                 <p className="text-black">2 Min Ago</p>
                                            
                                        </div>
                                        <img src="img/menu-icon/blue-dot.svg" alt="#" className="bell-width"></img>
                                    </div>
                                    
                                    <div className="space-between single_notify d-flex align-items-center ">
                                        <div className="notify_thumb">
                                            <a href="#">
                                            <img src="img/staf/4.png" alt=""></img></a>
                                        </div>
                                        <div className="width200 notify_content">
                                            <a href="#"><h5>Awesome packages</h5></a>
                                                 <p className="text-black">2 Min Ago</p>

                                        </div>
                                        <img src="img/menu-icon/blue-dot.svg" alt="#" className="bell-width"></img>
                                    </div>
                                    
                                    <div className="space-between single_notify d-flex align-items-center">
                                        <div className="notify_thumb">
                                            <a href="#">
                                            <img src="img/staf/3.png" alt=""></img></a>
                                        </div>
                                        <div className="width200 notify_content">
                                            <a href="#"><h5>what a packages</h5></a>
                                                 <p className="text-black">2 Min Ago</p>
                                        </div>
                                        <img src="img/menu-icon/blue-dot.svg" alt="#" className="bell-width"></img>
                                    </div>
                                    
                                    <div className="space-between single_notify d-flex align-items-center">
                                        <div className="notify_thumb">
                                            <a href="#">
                                            <img src="img/staf/2.png" alt=""></img></a>
                                        </div>
                                        <div className="width200 notify_content">
                                            <a href="#"><h5>Cool Marketing </h5></a>
                                                 <p className="text-black">2 Min Ago</p>
                                        </div>
                                        <img src="img/menu-icon/blue-dot.svg" alt="#" className="bell-width"></img>
                                    </div>
                                    
                                    <div className="space-between single_notify d-flex align-items-center">
                                        <div className="notify_thumb">
                                            <a href="#">
                                                <img src="img/staf/4.png" alt=""></img></a>
                                        </div>
                                        <div className="width200 notify_content">
                                            <a href="#"><h5>Awesome packages</h5></a>
                                                 <p className="text-black">2 Min Ago</p>
                                        </div>
                                        <img src="img/menu-icon/blue-dot.svg" alt="#" className="bell-width"></img>
                                    </div>
                                    
                                    <div className="space-between single_notify d-flex align-items-center">
                                        <div className="notify_thumb">
                                            <a href="#">
                                            <img src="img/staf/4.png" alt=""></img></a>
                                        </div>
                                        <div className="width200 notify_content">
                                            <a href="#"><h5>what a packages</h5></a>
                                                 <p className="text-black">2 Min Ago</p>
                                        </div>
                                        <img src="img/menu-icon/blue-dot.svg" alt="#" className="bell-width"></img>
                                    </div>
                                </div>
                               
                            </div>
                            
                            </li>
                            <li onClick={() => divShow1(true)}>
                                <a className="CHATBOX_open">
                                <img src="img/menu-icon/comment.svg" alt=""></img><span></span>  </a>
                            </li>
                        </div>
                        <div className="profile_info d-flex">
                            <img src="img/client_img.png" alt="#"></img>
                            <h3 className="name-text" >Anna</h3>
                            <div className="profile_info_iner">
                                <div className="profile_author_name">
                                    <h5 className="margin0">Name</h5>
                                </div>
                                <div className="profile_info_details">
                                    <a href="/profile">My Profile </a>
                                 
                                    <a href="#">Log Out </a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
      
<div className="CHAT_MESSAGE_POPUPBOX height700 chat-popup-t" >
<div class="container-fluid p-0">
            <div class="row justify-content-center">
                
                <div class="col-lg-12">
                    <div class="messages_box_area d-flex d-felx" >
                        <div class="messages_list ">
                            <div class=" radius15">
                              
                            <h3 className="pop-head paddt20" >Chats</h3>
                               
                    <div class="serach_field_2">
                                            <div class="search_inner">
                                                <form active="#">
                                                    <div class="search_field">
                                                        <input className="radius15" type="text" placeholder="Search content here..."></input>
                                                    </div>
                                                    <button type="submit"> <i class="ti-search"></i>
                                                   </button>
                                                </form>
                                            </div>
                                        </div>
                       <ul className="overflow-hidden newscroll height499">
                                    <li className="d-flex">
                                        <a className="CHATBOX_open" href="#">
                                            <div class="message_pre_left">
                                                <div class="message_preview_thumb">
                                                    <img src="img/messages/1.jpg" alt=""></img>
                                                    <span class="round-10 bg-danger"></span>
                                                </div>
                                                <div class="messges_info">
                                                       <h4 className="join-class-heading">Travor Jame11s</h4>
                                                    <p>i know you are doing great</p>
                                                </div>
                                            </div>
                                            <div class="messge_time">
                                                <span className="join-class-p">11:00AM</span>
                                            </div>
                                          </a>
                                        <img src="img/menu-icon/comment.svg" alt="" className="bell-width"></img>
                                    </li>
                                    <li className="d-flex">
                                        <a href="#">
                                            <div class="message_pre_left">
                                                <div class="message_preview_thumb">
                                                    <img src="img/messages/2.jpg" alt=""></img>
                                                    <span class="round-10 bg-success"></span>
                                                </div>
                                                <div class="messges_info">
                                                       <h4 className="join-class-heading">Travor James</h4>
                                                    <p>i know you are doing great</p>
                                                </div>
                                            </div>
                                            <div class="messge_time">
                                                <span className="join-class-p">11:00AM</span>
                                            </div>
                                          </a>
                                        <img src="img/menu-icon/comment.svg" alt="" className="bell-width"></img>
                                    </li>
                                    <li className="d-flex">
                                        <a href="#">
                                            <div class="message_pre_left">
                                                <div class="message_preview_thumb">
                                                    <img src="img/messages/3.jpg" alt=""></img>
                                                    <span class="round-10 bg-danger"></span>
                                                </div>
                                                <div class="messges_info">
                                                    <h4 className="join-class-heading">Travor James</h4>
                                                    <p>i know you are doing great</p>
                                                </div>
                                            </div>
                                            <div class="messge_time">
                                                <span className="join-class-p">11:00AM</span>
                                            </div>

                                          </a>
                                        <img src="img/menu-icon/comment.svg" alt="" className="bell-width"></img>
                                    </li>
                                    <li className="d-flex">
                                        <a href="#">
                                            <div class="message_pre_left">
                                                <div class="message_preview_thumb">
                                                    <img src="img/messages/4.jpg" alt=""></img>
                                                    <span class="round-10 bg-danger"></span>
                                                </div>
                                                <div class="messges_info">
                                                       <h4 className="join-class-heading">Travor James</h4>
                                                    <p>i know you are doing great</p>
                                                </div>
                                            </div>
                                            <div class="messge_time">
                                                <span className="join-class-p">11:00AM</span>
                                            </div>
                                          </a>
                                        <img src="img/menu-icon/comment.svg" alt="" className="bell-width"></img>
                                    </li>
                                    <li className="d-flex">
                                        <a href="#">
                                            <div class="message_pre_left">
                                                <div class="message_preview_thumb">
                                                    <img src="img/messages/1.jpg" alt=""></img>
                                                    <span class="round-10 bg-danger"></span>
                                                </div>
                                                <div class="messges_info">
                                                       <h4 className="join-class-heading">Travor James</h4>
                                                    <p>i know you are doing great</p>
                                                </div>
                                            </div>
                                            <div class="messge_time">
                                                <span className="join-class-p">11:00AM</span>
                                            </div>
                                          </a>
                                        <img src="img/menu-icon/comment.svg" alt="" className="bell-width"></img>
                                    </li>
                                    <li className="d-flex">
                                        <a href="#">
                                            <div class="message_pre_left">
                                                <div class="message_preview_thumb">
                                                    <img src="img/messages/2.jpg" alt=""></img>
                                                    <span class="round-10 bg-success"></span>
                                                </div>
                                                <div class="messges_info">
                                                       <h4 className="join-class-heading">Travor James</h4>
                                                    <p>i know you are doing great</p>
                                                </div>
                                            </div>
                                            <div class="messge_time">
                                                <span className="join-class-p">11:00AM</span>
                                            </div>
                                          </a>
                                        <img src="img/menu-icon/comment.svg" alt="" className="bell-width"></img>
                                    </li>
                                    <li className="d-flex">
                                        <a href="#">
                                            <div class="message_pre_left">
                                                <div class="message_preview_thumb">
                                                    <img src="img/messages/3.jpg" alt=""></img>
                                                    <span class="round-10 bg-danger"></span>
                                                </div>
                                                <div class="messges_info">
                                                       <h4 className="join-class-heading">Travor James</h4>
                                                    <p>i know you are doing great</p>
                                                </div>
                                            </div>
                                            <div class="messge_time">
                                                <span className="join-class-p">11:00AM</span>
                                            </div>
                                          </a>
                                        <img src="img/menu-icon/comment.svg" alt="" className="bell-width"></img>
                                    </li>
                                    <li className="d-flex">
                                        <a href="#">
                                            <div class="message_pre_left">
                                                <div class="message_preview_thumb">
                                                    <img src="img/messages/4.jpg" alt=""></img>
                                                    <span class="round-10 bg-danger"></span>
                                                </div>
                                                <div class="messges_info">
                                                       <h4 className="join-class-heading">Travor James</h4>
                                                    <p>i know you are doing great</p>
                                                </div>
                                            </div>
                                            <div class="messge_time">
                                                <span className="join-class-p">11:00AM</span>
                                            </div>
                                          </a>
                                        <img src="img/menu-icon/comment.svg" alt="" className="bell-width"></img>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        
                    </div>
                </div>
        </div>
    </div>
  </div>
         

</>
)
}
export default Topbar;