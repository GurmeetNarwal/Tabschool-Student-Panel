import React from 'react'
import Navbar from './Navbar';
import Topbar from './Topbar';
import ReminderCalender from './Components/ReminderCalender';
import SmallReminder from './Components/SmallReminder';

function Reminder() {
    return (
<>
<Navbar></Navbar>

<section class="main_content dashboard_part large_header_bg">
<Topbar></Topbar>
<div class="main_content_iner ">
        <div class="container-fluid ">
            <div class="row ">
              
                   
                        
                   <div className="col-lg-9 widthfull">
                   <div class=" d-flex flex-wrap align-items-center justify-content-between">
                                    <div class="page_title_left d-flex align-items-center">
                                        <h3 class="f_s_25 f_w_700 dark_text mr_30">7 September 2021     <img className="bell-width" src="img/menu-icon/cal.svg" alt=""></img> </h3>
                                    </div>
                                    <div class="page_title_right">
                                    <div class="page_title_left d-flex align-items-center">
                                        <a>
                                     <img className="calendar-arrow mr_10 mb10" src="img/menu-icon/a1.svg" alt=""></img>
                                     </a>
                                     <a>
                                     <img className="calendar-arrow mr_10 mb10" src="img/menu-icon/a2.svg" alt=""></img>
                                     </a>
                                    
                                    </div>
                                    </div>
                                </div>

                                <ReminderCalender></ReminderCalender>
             </div>
                   
             <div className="col-lg-3 widthfull padd0">
             <h3 class="f_s_25 f_w_700 dark_text mr_30">Reminder   </h3>
             <div class="white_card mb_20 shadow-default padd0" >
                                    <div class="white_card_header padd-25" >

                                        <div class="single_crm padd10 ">

                                            <div class="crm_body">
                                            <h5 class="font14">Create Reminder</h5>
                                                <div class="form-group mb-0">
                                                    <input type="text" class="form-control" name="inputText" id="inputText" placeholder="Remind me about..."></input>
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
                                                <div class="page_date_button d-flex align-items-center">
                                                    <button type="button" class="card-button card-button1 btn btn-danger rounded-pill fontauto width100 cancel-padd" >Cancel</button>
                                                    <button type="button" class="card-button btn btn-danger rounded-pill width100 fontauto margl10" >Create</button>


                                                </div>
                                            </div>

                                        </div>

                                    </div></div>
                                    <div class="white_card mb_20 newscro " >
                                    <div class="minheight white_card_header shadow-default1 grey-background">
                                        <div className="overflow-hidden height1 newscroll ">
                                            
                                           
                                           
                                <SmallReminder></SmallReminder>
                                <SmallReminder></SmallReminder>
                                <SmallReminder></SmallReminder>
                                <SmallReminder></SmallReminder>
                                <SmallReminder></SmallReminder>
                                <SmallReminder></SmallReminder>
                                <SmallReminder></SmallReminder>
                                <SmallReminder></SmallReminder>

                                <SmallReminder></SmallReminder>
                                <SmallReminder></SmallReminder>
                                <SmallReminder></SmallReminder>


                                       </div></div></div>
                  
             </div>
            </div>
        </div>
    </div>


</section>
</>
    )
}
export default Reminder;