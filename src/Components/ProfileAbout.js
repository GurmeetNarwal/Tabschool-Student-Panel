import React from 'react'
function ProfileAbout() {
    return (
<>
<div class="white_card mb_20 shadow-default padd0" >
                                    <div class="white_card_header topcal" >
                                    <h5 className="join-class-heading card-head paddb10">About</h5>
                                        <div class="single_crm padd0 ">

                                            <div class="crm_body">
                                            <div className="d-flex">
                                            <img className="setting-icon" src="img/menu-icon/cake.svg" alt="" ></img> 
                                            <div className="nav_title  mart6" >
                                <span>22 August 2021 </span>
                              </div>
                                             </div>
                                             <br></br>
                                             <div className="d-flex">
                                            <img className="setting-icon" src="img/menu-icon/gender.svg" alt="" ></img>       <div className="nav_title  mart6" >
                                <span>Male</span></div>
                                             </div><br></br>
                                             <div className="d-flex">
                                            <img className="setting-icon" src="img/menu-icon/location.svg" alt="" ></img>      <div className="nav_title  mart6" >
                                <span>Mathura das Mill Compound 126, NM joshi Marg ,Lower patel, New Delhi</span></div>
                                             </div><br></br>
                                             <div className="d-flex">
                                            <img className="setting-icon" src="img/menu-icon/phonecall.svg" alt="" ></img>       <div className="nav_title  mart6" >
                                <span>896xxxxxxx</span></div>
                                             </div><br></br>
                                             <div className="d-flex">
                                            <img className="setting-icon" src="img/menu-icon/email.svg" alt="" ></img>       <div className="nav_title  mart6" >
                                <span>info@info.com</span></div>
                                             </div><br></br>
                                            </div>

                                        </div>

                                        <a class="mart7 card-button btn btn-danger rounded-pill width40p  details mar" href="/Setting">Update</a>
                                    </div></div>

     
                       
</>
    )
}
export default ProfileAbout;