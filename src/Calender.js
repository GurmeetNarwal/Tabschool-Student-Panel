import React from 'react'
import Navbar from './Navbar';
import Topbar from './Topbar';
import Marks from './Components/Marks';
import ReminderTable from './Components/Remindertable';
import CalenderCard from './Components/calender-card';
import CalenderReminder from './Components/calender-reminder';
import Calendertable from './Components/calendertable';
import Marksmenu from './Components/Marksmenu';
function Calender() {
    return (
<>
<Navbar></Navbar>

<section class="main_content dashboard_part large_header_bg">
<Topbar></Topbar>
      <div class="main_content_iner padd0">
        <div class="container-fluid p-0 sm_padding_15px">
            <div class="row justify-content-center">
            <div class="col-lg-4">
            <h3 class="f_s_25 f_w_700 dark_text mr_30">Calender</h3>
            <div class="calendar1 shadow-default"></div>
            <br></br>
            <div class=" d-flex flex-wrap align-items-center justify-content-between " >
                                    <div class="page_title_left d-flex align-items-center">
                                        <h3 class="f_s_25 f_w_700 dark_text mr_30">Marks
                                
                                        </h3>
                                        <div className="collapse menu4"  id="collapseExample4" >
                                            <Marksmenu></Marksmenu>
                </div>
    
                                    </div>
                                    <div class="page_title_right">
                                    <img className="bell-width" src="img/menu-icon/nav8.svg" alt=""  data-toggle="collapse" data-target="#collapseExample4" aria-expanded="false" aria-controls="collapseExample"></img>

                                    </div>
                                </div>
        

            <div class="white_card mb_20 newscro shadow-default">
                                    <div class="white_card_header ">
                                        <div className="overflow-hidden newscroll ">
                                            <div class="box_header m-0">
                                           
                                                <Marks></Marks>
                                            </div>
                                           

                                        </div></div></div>
                    
                </div>
                <div class="col-lg-4">
                <div class=" d-flex flex-wrap align-items-center justify-content-between " >
                                    <div class="page_title_left d-flex align-items-center">
                                        <h3 class="f_s_25 f_w_700 dark_text mr_30">17 April 2021
                                
                                        </h3>
                                        <div className="collapse menu3"  id="collapseExample3" >
                                            <Calendertable></Calendertable>
                </div>
    
                                    </div>
                                    <div class="page_title_right">
                                    <img src="img/menu-icon/nav8.svg" className="bell-width" alt="" data-toggle="collapse" data-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample"></img>

                                    </div>
                                </div>
                              
                <div class="white_card heigth mb_30 shadow-default">
                   
                    <div class="white_card_body padd0">
                    <div class="table m-b-30 noscroll">
<table class="table">
   
    <tbody>
                     <ReminderTable></ReminderTable>
                  </tbody>
                  </table>
                    </div></div>
                </div>
                </div>
                <div class="col-lg-4">
                <h3 class="f_s_25 f_w_700 dark_text mr_30 paddtm">Exam</h3>

                <div class="white_card mb_20 newscro shadow-default1 calender-height padd10 grey-background heigth" >
                                    <div>
                                        <div className="overflow-hidden newscroll calender-cardh">
                                    <CalenderCard></CalenderCard>
                                    <CalenderReminder></CalenderReminder>
                                    <CalenderReminder></CalenderReminder>
                                    <CalenderReminder></CalenderReminder>
                                    <CalenderReminder></CalenderReminder>
                                    <CalenderReminder></CalenderReminder>
                                        </div></div></div></div>
                    
                </div>
            </div>
        </div>
   

</section>
</>
    )
}
export default Calender;