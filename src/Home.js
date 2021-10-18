import React from 'react';
import Navbar from './Navbar';
import Topbar from './Topbar';
import JoinCard from './Components/join-class';
import ReminderClass from './Components/Reminder-Class';
import AssignmentCard from './Components/Assignment-complete';
import RecentActivity from './Components/Table-Home';
import ReminderCard from './Components/Remindercard';
import Resources from './Components/Resources';
import FeedsFilter from './Components/FeedsFilter';
function Home() {
    const [show, divShow] = React.useState(true)
    return (
        <>
            <Navbar></Navbar>
            <section className="main_content dashboard_part large_header_bg">
                <Topbar></Topbar>
                

                <div class="main_content_iner overly_inner ">
                    <div class="container-fluid p-0 ">
                        <div class="row">
                            <div class="col-12">
                                <div class=" d-flex flex-wrap align-items-center justify-content-between">
                                    <div class="page_title_left d-flex align-items-center">
                                        <h3 class="f_s_25 f_w_700 dark_text mr_30 paddl11">Live And Upcoming Free Classes</h3>

                                    </div>
                                    <div class="page_title_right">
                                        <div class="page_date_button d-flex align-items-center">
                                            See More
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="white_card card_height_100 mb_30 user_crm_wrapper paddl12">
                            <div class="row">
                                <JoinCard ></JoinCard>
                                <ReminderClass></ReminderClass>
                                <ReminderClass></ReminderClass>
                                <ReminderClass></ReminderClass>

                            </div></div>
                        <div className="row paddl11">
                            <div class="col-lg-4">
                            <div class="page_title_left d-flex align-items-center">
                                        <h3 class="f_s_25 f_w_700 dark_text mr_30 ">Recent Activity</h3>

                                    </div>

                                <div className="btn-group11">
                                    <a className="btn-group__item1 gp1 active" id="my-element" href='#' onClick={() => divShow(true)}>Notice </a>
                                    <a className="btn-group__item1 gp2" href="#" onClick={(e) => divShow(false)}>Resources</a>
                                </div>
                                
                                <div class="white_card mb_20 newscro shadow-default">
                                    <div class="white_card_header ">
                                        <div className="overflow-hidden newscroll ">
                                            <div class="box_header m-0">
                                            {show ?
                                                <RecentActivity></RecentActivity>
                                                :false}
                                                  {!show ?
                                                <Resources></Resources> :true}
                                            </div>
                                           


                                        </div></div></div></div>
                            <div class="col-lg-4">
                                <div class=" d-flex flex-wrap align-items-center justify-content-between " >
                                    <div class="page_title_left d-flex align-items-center">
                                        <h3 class="f_s_25 f_w_700 dark_text mr_30">Feeds
                                        <span className="filter-icon">
                                            <img src="img/menu-icon/nav8.svg" alt="" className="bell-width" data-toggle="collapse" data-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample"></img>
                                            </span>
                                        </h3>
                                        <div className="collapse menu2"  id="collapseExample2" >
               <FeedsFilter></FeedsFilter>

                </div>
    
                                    </div>
                                    <div class="page_title_right">
                                        <div class="page_date_button d-flex align-items-center">See More</div>
                                    </div>
                                </div>
                                <AssignmentCard></AssignmentCard>
                                <AssignmentCard></AssignmentCard>
                                <AssignmentCard></AssignmentCard>

                            </div>
                            <div class="col-lg-4">
                                <div class=" d-flex flex-wrap align-items-center justify-content-between">
                                    <div class="page_title_left d-flex align-items-center">
                                        <h3 class="f_s_25 f_w_700 dark_text mr_30">Reminder         </h3>
                                    </div>
                                    <div class="page_title_right">
                                        <div class="page_date_button d-flex align-items-center">See More</div>
                                    </div>
                                </div>




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
                                                <button type="button" class="card-button card-button1 btn btn-danger rounded-pill fontauto width100 descrption-p marginl29" >Cancel</button>
                                                    <button type="button" class="card-button btn btn-danger rounded-pill width100 fontauto descrption-p margl10" >Create</button>



                                                </div>
                                            </div>

                                        </div>

                                    </div></div>


                                <ReminderCard></ReminderCard>
                                <ReminderCard></ReminderCard>

                            </div>

                          
                        </div>
                    </div>
                    </div>
                    
            </section>
            {/* <div id="myModal" class="modal fade default-color" role="dialog" >
  <div class="modal-dialog  leftm" >
   
    <div class="modal-content border-r15" style={{maxWidth:"310px"}}>
     
      <div class="modal-body modal-padd27" >
          <div className="d-flex">
          <img className="wave-img" src="img/menu-icon/waving.png"></img>
      <h1 className="font22" >Hi Anna</h1></div>
      <h5 class="fonts15">Welcome to the Tabschool!
      <br></br>
   Let Familiarize you with your learning partner.</h5>
   <button type="button" data-dismiss="modal" class="nxt-btn card-button btn btn-danger rounded-pill  details mar">Next</button>
      </div>
    
    </div>

  </div> 
  
</div> */}




        </>
    )
}
export default Home;