import React from 'react'
import SchoolTable from './Components/School-table';
import SchoolTeacherTable from './Components/SchoolTeacherTable';
import Navbar from './Navbar';
import Topbar from './Topbar';

function SchoolProfile() {
    return (
        <><Navbar></Navbar>

            <section class="main_content dashboard_part large_header_bg">
                <Topbar></Topbar>

                <div className="main_content_iner overly_inner paddr0 paddl10" >
                    <div className="container-fluid p-0">
                        <div className="row ">
                            <div class="col-lg-9">


                                <div class="card custom-card">
                                <div class="card-header max-height150"><img class="cover-img" src="img/menu-icon/profile-cover.png" alt="" data-original-title="" title=""></img>
                        </div>
                                    <div className="row">
                                        <div class="card-profile start-text col"><img class="rounded-circle " src="img/menu-icon/school-icon.svg" alt="" data-original-title="" title=""></img>
                                            <div className="margt-name">
                                                <h3 className="f_s_25 f_w_700 dark_text mr_30">Anna Dutta</h3>
                                
                                                <p class="join-class-p"><img class="pin-image" src="img/menu-icon/Location-Pin-Grey.svg" alt="" ></img> DPS School Chandigarh</p>


                                            </div>

                                        </div>
                                        <div className=" margt-name1 end-text col">
                                            <a className="btn-group__item1 active profile-btn" href="/profile" >My Profile</a>
                                        </div>
                                    </div>
                                    <br></br>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h3>About Tabschool</h3>
                                            <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </h6>


                                            <div className="d-flex col">
                                                <img className="setting-icon" src="img/menu-icon/location.svg" alt="" ></img>      <div className="nav_title  mart6" >
                                                    <span className="Font-a">Mathura das Mill Compound 126, NM joshi Marg ,Lower patel, New Delhi</span></div>
                                            </div><br></br>
                                            <div className="d-flex col">
                                                <img className="setting-icon" src="img/menu-icon/phonecall.svg" alt="" ></img>       <div className="nav_title  mart6" >
                                                    <span className="Font-a">896xxxxxxx</span></div>
                                            </div><br></br>
                                            <div className="d-flex col">
                                                <img className="setting-icon" src="img/menu-icon/email.svg" alt="" ></img>       <div className="nav_title  mart6" >
                                                    <span className="Font-a">info@info.com</span></div>
                                            </div><br></br>
                                            <div className="d-flex col">
                                                <img className="setting-icon" src="img/menu-icon/earth.svg" alt="" ></img>       <div className="nav_title  mart6" >
                                                    <span className="Font-a">www.infoinfo.com</span></div>
                                            </div><br></br>
                                            <div className="d-flex col">
                                                <img className="setting-icon" src="img/menu-icon/cap.svg" alt="" ></img>       <div className="nav_title  mart6" >
                                                    <span className="Font-a">Central Board of Secondary Education</span></div>
                                            </div><br></br>
                                        </div>
                                        <div className="col-md-6">
                                            <h3>Amenities</h3>
                                            <div className="row">
                                                <div className="col-md-12 padd0">
                                                    <div className="row ">
                                                <div className="d-flex col">
                                                    <div className="nav_title  mart6" >
                                                    <img className="setting-icon" src="img/menu-icon/bus.svg" alt="" ></img>      <span className="Font-a">School Bus</span></div>
                                            </div>
                                            <div className="d-flex col">
                                                     <div className="nav_title  mart6" >
                                                     <img className="setting-icon" src="img/menu-icon/audit.svg" alt="" ></img>    <span className="Font-a">Auditorium</span></div>
                                            </div>
                                            </div><br></br>
                                    
                                                 
                                            <div className="row ">
                                                <div className="d-flex col">
                                                   <div className="nav_title  mart6" >
                                                   <img className="setting-icon" src="img/menu-icon/smart.svg" alt="" ></img>      <span className="Font-a">Smart Borad / Class</span></div>
                                            </div>
                                            <div className="d-flex col">
                                                 <div className="nav_title  mart6" >
                                                 <img className="setting-icon" src="img/menu-icon/playground.svg" alt="" ></img>    <span className="Font-a">Playground</span></div>
                                            </div>
                                            </div><br></br>
                                    

       
                                            <div className="row ">
                                                <div className="d-flex col">
                                                 <div className="nav_title  mart6" >
                                                 <img className="setting-icon" src="img/menu-icon/maid.svg" alt="" ></img>      <span className="Font-a">Maid / Helpers for your Young Children</span></div>
                                            </div>
                                            <div className="d-flex col">
                                                <div className="nav_title  mart6" >
                                                <img className="setting-icon" src="img/menu-icon/cctv.svg" alt="" ></img>      <span className="Font-a">CCTV</span></div>
                                            </div>
                                            </div><br></br>
                                            


                                                   
                                            <div className="row ">
                                                <div className="d-flex col">
                                                  <div className="nav_title  mart6" >
                                                  <img className="setting-icon" src="img/menu-icon/management.svg" alt="" ></img>        <span className="Font-a">School Management System</span></div>
                                            </div>
                                            <div className="d-flex col">
                                                 <div className="nav_title  mart6" >
                                                 <img className="setting-icon" src="img/menu-icon/pen.svg" alt="" ></img>    <span className="Font-a">Stationary</span></div>
                                            </div>
                                            </div><br></br>







                                                   
                                            <div className="row ">
                                                <div className="d-flex col">
                                                <img className="setting-icon" src="img/menu-icon/cafeteria.svg" alt="" ></img>   <div className="nav_title  mart6" >
                                                         <span className="Font-a">Canteen/Cafeteria</span></div>
                                            </div>
                                            <div className="d-flex col">
                                                <div className="nav_title  mart6" >  <img className="setting-icon" src="img/menu-icon/book.svg" alt="" ></img> 
                                                    <span className="Font-a">Library</span></div>
                                            </div>
                                            </div><br></br>



                                            <div className="row  ">
                                                <div className="d-flex col width50p">
                                                <img className="setting-icon" src="img/menu-icon/lab.svg" alt="" ></img>  <div className="nav_title  mart6" >
                                                       <span className="Font-a ">Chemistry / Biology / Physics Lab</span></div>
                                            </div>
                                            <div className="d-flex col width50p">
                                            <img className="setting-icon" src="img/menu-icon/rupee.svg" alt="" ></img>       <div className="nav_title  mart6" >
                                                    <span className="Font-a">Online fee Payment</span></div>
                                            </div>
                                            </div><br></br>

                                            



                                                    </div>
                                                

                                           
















                                               
                                                </div>
                                        </div>
                                    </div>


                                </div>

                            </div>


                            <div class="col-lg-3 ">
                                <SchoolTable></SchoolTable>
                                <SchoolTeacherTable></SchoolTeacherTable>
                      


                            </div>

                        </div>




                    </div></div>
            </section>
        </>
    )
}
export default SchoolProfile;