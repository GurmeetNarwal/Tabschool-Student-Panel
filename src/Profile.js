import React from 'react'
import Classmate from './Components/Classmate';
import ProfileAbout from './Components/ProfileAbout';
import Navbar from './Navbar';
import Topbar from './Topbar';

function Profile() {
  return (
    <><Navbar></Navbar>

      <section class="main_content dashboard_part large_header_bg">
        <Topbar></Topbar>

        <div className="main_content_iner overly_inner paddr0 paddl10" >
          <div className="container-fluid p-0">
            <div className="row ">
              <div class="col-lg-9">


              <div class="card custom-card">
                        <div class="card-header max-height150">
                        <a > <label className="profile-btn changecover"> Change Profile Photo
    <input className="cover" type="file" size="60" ></input>
    </label> </a><img class="cover-img" src="img/menu-icon/profile-cover.png" alt="" data-original-title="" title=""></img>
                        </div>
                        <div className="row">
                        <div class="card-profile start-text col">  <div class="avatar-upload img-pro d-flex content-center">
        <div class="avatar-edit">
            <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg" />
            <label for="imageUpload" className="pencil-padd border-black" ><i class="fas fa-pencil-alt"></i></label>
        </div>
        <div class="avatar-preview border-none profile-img">
            <div id="imagePreview" >
            </div>
        </div>
   </div>
                        <div className="margt-name">
                        <h3 className="f_s_25 f_w_700 dark_text mr_30">Anna Dutta</h3>
  
                        <p class="join-class-p"><img class="pin-image" src="img/menu-icon/Location-Pin-Grey.svg" alt="" ></img> DPS School Chandigarh</p>
                        
                        </div>
                        
                        </div>
                        <div className=" margt-name1 end-text col">
                        <a className="btn-group__item1 active profile-btn"  href="/SchoolProfile" >School Profile</a>
                        </div>
                        </div>
                        <br></br>
                       <div className="row">
                        <div class="col-lg-12 col-xl-6 col-md-6">
                        <div className="d-flex space-between">
                        <h3 className="f_s_25 f_w_700 dark_text mr_30">Reports</h3>
                        
                        <form>
<select class="event-type-select select-tab">
  <option value="1">Sep 2021</option>
  <option value="2">Oct 2021</option>
  <option value="3">Nov 2021</option>

</select>
</form>
<form>
<select class="event-type-select select-tab">
  <option value="all">All Event Types</option>
  <option value="music">Music</option>
  <option value="food">Food</option>
  <option value="art">Art</option>
  <option value="fashion">Fashion</option>
  <option value="sport">Sport</option>
  <option value="history">History</option>
</select>
</form>

                        
                  </div>
                   
                        <div id="apex_3"></div>
                   
                </div>
           
                <div className="col-md-6">
                <br></br>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="d-flex space-between">
                  <p className="text-black">Exam/Test</p>
                  <form>
<select class="event-type-select select-tab">
  <option value="all">All Event Types</option>
  <option value="music">Music</option>
  <option value="food">Food</option>
  <option value="art">Art</option>
  <option value="fashion">Fashion</option>
  <option value="sport">Sport</option>
  <option value="history">History</option>
</select>
</form>
                  </div>
                  <h1>75%</h1>
                  </div>
                  <div className="col-md-6">
                  <div className="d-flex space-between">
                  <p className="text-black">Attendence</p>
                  <form>
<select class="event-type-select select-tab">
  <option value="1">Sep 2021</option>
  <option value="2">Oct 2021</option>
  <option value="3">Nov 2021</option>

</select>
</form>
                  </div>
                  <h1>65%</h1>
                  </div>
                  </div>
                  <br></br>
                  <div className="row">
                   
                    <div className="col-md-6">
                  <p className="text-black">Leaderboard Score</p>
                  <h4>Rank: 10</h4>
                  </div>
                  <div className="col-md-6">
                  <div className="d-flex space-between">
                  <p className="text-black">Fee</p>
                  <form>
<select class="event-type-select select-tab">
  <option value="1">Sep 2021</option>
  <option value="2">Oct 2021</option>
  <option value="3">Nov 2021</option>

</select>
</form>
                  </div>
                  <h4>PAID: 15,000.00</h4>
                  <div className="d-flex space-between">
                  <p className="text-black font-s10"> Quartely </p>
                  <p className="text-black font-s10"> Next: Dec 2021 </p>
                    </div>
                  </div>
                  </div>
                  <br></br>
                  <div className="col-md-12">
                  <div className="d-flex space-between">
                  <p className="text-black">Curriculum Progress</p>
                  <form>
<select class="event-type-select select-tab">
  <option value="all">All Event Types</option>
  <option value="music">Music</option>
  <option value="food">Food</option>
  <option value="art">Art</option>
  <option value="fashion">Fashion</option>
  <option value="sport">Sport</option>
  <option value="history">History</option>
</select>
</form>
                  </div>
                  <div class="progress-wrapper ">
   
    <div class="progress error"></div>
  </div>

                  </div>
             
                </div>
                </div>
                      </div>
               
         
                </div>


              <div class="col-lg-3 ">
             <Classmate></Classmate>
              <ProfileAbout></ProfileAbout>
                                
             
              </div>

            </div>




          </div></div>
      </section>
    </>
  )
}
export default Profile;