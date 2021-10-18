import React from 'react'
import Navbar from './Navbar';
import Topbar from './Topbar';
import PasswordSettings from './Components/PasswordSettings';
import GeneralSettings from './Components/GeneralSettings';
function Setting() {
  return (
    <><Navbar></Navbar>

      <section class="main_content dashboard_part large_header_bg">
        <Topbar></Topbar>

        <div className="main_content_iner overly_inner paddr0 paddl10" >
          <div className="container-fluid p-0">
            <div className="row ">
              <div class="col-lg-5">


                <div class="white_card mb_20  shadow-default">

                  <div class="white_card_header setting-height">


                    <h3 class="f_s_25 f_w_700 dark_text mr_30 ">Setting</h3>


                    <div class="default-according" id="accordion">
                      <div class="">
                        <div id="headingOne">
                          <h5 class="mb-0">
                            <div data-toggle="collapse" data-target="#collapseOne1" aria-expanded="false" aria-controls="collapseOne">
                              <a className="d-flex general hover-background pad8" aria-expanded="false" >
                                <div className="nav_icon_small">
                                  <img className="bell-width marb3" src="img/menu-icon/setting1.svg" alt=""></img>
                                </div>
                                <div className="nav_title marginl14" >
                                  <span>General </span>
                                </div>
                                <img className="left-arrow" src="img/menu-icon/a2.svg" alt=""></img>
                              </a></div>
                          </h5>
                        </div>
                        <div class="collapse" id="collapseOne1" aria-labelledby="headingOne" data-parent="#accordion">
                          <div class="card-body">


                            <a className="d-flex  setting pad8" aria-expanded="false" >
                              <div className="nav_icon_small">
                                <img className="bell-width marb3" src="img/menu-icon/pass.svg" alt=""></img>
                              </div>
                              <div className="nav_title marginl14" >
                                <span>Password and Security </span>
                              </div>
                              <img className="left-arrow" src="img/menu-icon/a2.svg" alt=""></img>
                            </a>
                            <br></br>
                            <a className="d-flex setting1 pad8" aria-expanded="false" >
                              <div className="nav_icon_small">
                                <img className="bell-width marb3" src="img/menu-icon/gen.svg" alt=""></img>
                              </div>
                              <div className="nav_title marginl14" >
                                <span>General Account Setting </span>
                              </div>
                              <img className="left-arrow" src="img/menu-icon/a2.svg" alt=""></img>
                            </a>

                          </div>
                        </div>
                      </div>
                    </div>

                    <br></br>
                    <a className="d-flex pad8 " aria-expanded="false" >
                      <div className="nav_icon_small">
                        <img className="bell-width marb3" src="img/menu-icon/bell.svg" alt=""></img>
                        <div>

                        </div>

                      </div>
                      <div className="nav_title marginl14" >
                        <span>Notification </span>
                      </div>
                      <div class="checkbox1 switcher1 left-arrow2">
      <label for="test3">
        <input type="checkbox" id="test3" value=""></input>
        <span><small></small></span>
       
      </label>
    </div>
 
                
                    </a>
                    <br></br>
                    <a className="d-flex pad8" aria-expanded="false" >
                      <div className="nav_icon_small">
                        <img className="bell-width marb3" src="img/menu-icon/info.svg" alt=""></img>
                      </div>
                      <div className="nav_title marginl14" >
                        <span>About Tabschool </span>
                      </div>
                      <img className="left-arrow" src="img/menu-icon/a2.svg" alt=""></img>
                    </a>    <br></br>
                    <a className="d-flex pad8" aria-expanded="false" >
                      <div className="nav_icon_small">
                        <img className="bell-width marb3" src="img/menu-icon/nav2.svg" alt=""></img>
                      </div>
                      <div className="nav_title marginl14" >
                        <span>Terms of Service</span>
                      </div>
                      <img className="left-arrow" src="img/menu-icon/a2.svg" alt=""></img>
                    </a>    <br></br>
                    <a className="d-flex pad8" aria-expanded="false" >
                      <div className="nav_icon_small">
                        <img className="bell-width marb3" src="img/menu-icon/knowldegebase.svg" alt=""></img>
                      </div>
                      <div className="nav_title marginl14" >
                        <span>Knowledge Base or Support</span>
                      </div>
                      <img className="left-arrow" src="img/menu-icon/a2.svg" alt=""></img>
                    </a>    <br></br>

                    <a className="d-flex pad8" aria-expanded="false" >
                      <div className="nav_icon_small">
                        <img className="bell-width marb3" src="img/menu-icon/feedback.svg" alt=""></img>
                      </div>
                      <div className="nav_title marginl14" >
                        <span>Send Feedback</span>
                      </div>

                    </a>    <br></br>
                    <a className="d-flex pad8" aria-expanded="false" >
                      <div className="nav_icon_small">
                        <img className="bell-width marb3" src="img/menu-icon/share.svg" alt=""></img>
                      </div>
                      <div className="nav_title marginl14" >
                        <span>Invite Friend</span>
                      </div>

                    </a>    <br></br>


                  </div>



                </div></div>


              <div class="col-lg-5">
                <PasswordSettings></PasswordSettings>
                <GeneralSettings></GeneralSettings>
              </div>

            </div>




          </div></div>
      </section>
    </>
  )
}
export default Setting;