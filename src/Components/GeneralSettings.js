import React from 'react'
import Input from './input';

function GeneralSettings() {
    return (
<>
<div className="set2 hide">
<h3 class="f_s_25 f_w_700 dark_text mr_30 ">Password and Security</h3>
<div class="white_card mb_20  shadow-default ">

<div class="white_card_header padd0">


  <div class="box_body ">
    <div class="default-according arrow_style" id="accordion">
      <div class="padd1p border-b0">
        <div class="background-white " id="headingOne">
          <h5 class="mb-0">
            
            <button class="btn btn-link collapsed p-heading" data-toggle="collapse" data-target="#collapseOne3" aria-expanded="false" aria-controls="collapseOne"><img className="setting-icon" src="img/menu-icon/change-phone.svg" alt="" ></img> Change Name</button>
          </h5>
        </div>
        <div class="collapse" id="collapseOne3" aria-labelledby="headingOne" data-parent="#accordion" >
          <div class="card-body">
          <div class="white_card mb_20 shadow-default padd0" >
                                    <div class="white_card_header padd-25" >

                                        <div class="single_crm padd10 ">

                                            <div class="crm_body">
                                           
                                                <div class="form-group mb-0">
                                                    <input type="text" class="form-control" name="inputText" id="inputText" placeholder="Change Name"></input>
                                                </div>
                                              
                                                <br></br>
                                                <div class="page_date_button d-flex align-items-center">
                                                    <button type="button" class="card-button card-button1 btn btn-danger rounded-pill fontauto width100 descrption-p marginl29" >Cancel</button>
                                                    <button type="button" class="card-button btn btn-danger rounded-pill width100 fontauto descrption-p margl10" >Save</button>


                                                </div>
                                            </div>

                                        </div>

                                    </div></div>

          </div>
        </div>
      </div>
   
      <div class="padd1p border-b0">
        <div class="background-white " id="headingOne">
          <h5 class="mb-0">
            
            <button class="btn btn-link collapsed p-heading" data-toggle="collapse" data-target="#collapseOne4" aria-expanded="false" aria-controls="collapseOne"><img className="setting-icon" src="img/menu-icon/cake.svg" alt="" ></img> Change Date of Birth</button>
          </h5>
        </div>
        <div class="collapse" id="collapseOne4" aria-labelledby="headingOne" data-parent="#accordion" >
          <div class="card-body">
          <div class="white_card mb_20 shadow-default padd0" >
                                    <div class="white_card_header padd-25" >

                                        <div class="single_crm padd10 ">

                                            <div class="crm_body">
                                           
                                            <div class="form-group mb-0">
                                                    <input type="date" class="form-control" name="inputDate" id="inputDate"></input>
                                                </div>
                                              
                                                <br></br>
                                                <div class="page_date_button d-flex align-items-center">
                                                    <button type="button" class="card-button card-button1 btn btn-danger rounded-pill fontauto width100 descrption-p marginl29" >Cancel</button>
                                                    <button type="button" class="card-button btn btn-danger rounded-pill width100 fontauto descrption-p margl10">Save</button>


                                                </div>
                                            </div>

                                        </div>

                                    </div></div>

          </div>
        </div>
      </div>
 

      <div class="padd1p border-b0">
        <div class="background-white " id="headingOne">
          <h5 class="mb-0">
            
            <button class="btn btn-link collapsed p-heading" data-toggle="collapse" data-target="#collapseOne5" aria-expanded="false" aria-controls="collapseOne"><img className="setting-icon" src="img/menu-icon/gender.svg" alt="" ></img> Gender</button>
          </h5>
        </div>
        <div class="collapse" id="collapseOne5" aria-labelledby="headingOne" data-parent="#accordion" >
          <div class="card-body">
          <div class="white_card mb_20 shadow-default padd0" >
                                    <div class="white_card_header padd-25" >

                                        <div class="single_crm padd10 ">

                                            <div class="crm_body">
                                           
                                            <div class="form-group mb-0">
                                                    <input type="text" class="form-control" name="Gender" id="Gender" placeholder="Gender"></input>
                                                </div>
                                              
                                                <br></br>
                                                <div class="page_date_button d-flex align-items-center">
                                                    <button type="button" class="card-button card-button1 btn btn-danger rounded-pill fontauto width100 descrption-p marginl29" >Cancel</button>
                                                    <button type="button" class="card-button btn btn-danger rounded-pill width100 fontauto descrption-p margl10">Save</button>


                                                </div>
                                            </div>

                                        </div>

                                    </div></div>

          </div>
        </div>
      </div>
 


      <div class="padd1p border-b0">
        <div class="background-white " id="headingOne">
          <h5 class="mb-0">
            
            <button class="btn btn-link collapsed p-heading" data-toggle="collapse" data-target="#collapseOne6" aria-expanded="false" aria-controls="collapseOne"><img className="setting-icon" src="img/menu-icon/location.svg" alt="" ></img> Address</button>
          </h5>
        </div>
        <div class="collapse" id="collapseOne6" aria-labelledby="headingOne" data-parent="#accordion" >
          <div class="card-body">
          <div class="white_card mb_20 shadow-default padd0" >
                                    <div class="white_card_header padd-25" >

                                        <div class="single_crm padd10 ">

                                            <div class="crm_body">
                                           
                                            <div class="form-group mb-0">
                                                    <input type="Text" class="form-control" name="Address" id="Address" placeholder="Address"></input>
                                                </div>
                                              
                                                <br></br>
                                                <div class="page_date_button d-flex align-items-center">
                                                    <button type="button" class="card-button card-button1 btn btn-danger rounded-pill fontauto width100 descrption-p marginl29" >Cancel</button>
                                                    <button type="button" class="card-button btn btn-danger rounded-pill width100 fontauto descrption-p margl10">Save</button>


                                                </div>
                                            </div>

                                        </div>

                                    </div></div>

          </div>
        </div>
      </div>
 


 
      <div class="padd1p border-b0">
        <div class="background-white " id="headingOne">
          <h5 class="mb-0">
            
            <button class="btn btn-link collapsed p-heading" data-toggle="collapse" data-target="#collapseOne7" aria-expanded="false" aria-controls="collapseOne"><img className="setting-icon" src="img/menu-icon/email.svg" alt="" ></img> Email</button>
          </h5>
        </div>
        <div class="collapse" id="collapseOne7" aria-labelledby="headingOne" data-parent="#accordion" >
          <div class="card-body">
          <div class="white_card mb_20 shadow-default padd0" >
                                    <div class="white_card_header padd-25" >

                                        <div class="single_crm padd10 ">

                                            <div class="crm_body">
                                           
                                            <div class="form-group mb-0">
                                                    <input type="email" class="form-control" name="Email" id="Email" placeholder="Email"></input>
                                                </div>
                                              
                                                <br></br>
                                                <div class="page_date_button d-flex align-items-center">
                                                    <button type="button" class="card-button card-button1 btn btn-danger rounded-pill fontauto width100 descrption-p marginl29" >Cancel</button>
                                                    <button type="button" class="card-button btn btn-danger rounded-pill width100 fontauto descrption-p margl10">Save</button>


                                                </div>
                                            </div>

                                        </div>

                                    </div></div>

          </div>
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
export default GeneralSettings;