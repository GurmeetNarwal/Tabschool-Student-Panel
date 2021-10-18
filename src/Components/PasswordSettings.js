import React from 'react'
import Input from './input';

function PasswordSettings() {
    return (
<>
<div className="set1 hide">
<h3 class="f_s_25 f_w_700 dark_text mr_30 ">Password and Security</h3>
<div class="white_card mb_20  shadow-default ">

<div class="white_card_header padd0">


  <div class="box_body ">
    <div class="default-according arrow_style" id="accordion">
      <div class="padd1p border-b0">
        <div class="background-white " id="headingOne">
          <h5 class="mb-0">
            
            <button class="btn btn-link collapsed p-heading" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"><img className="setting-icon" src="img/menu-icon/phonecall.svg" alt="" ></img> Change Phone Number</button>
          </h5>
        </div>
        <div class="collapse" id="collapseOne" aria-labelledby="headingOne" data-parent="#accordion" >
          <div class="card-body">
            <div className="input-group-prepend"><div className="input-group-text background-trans amr-r20" >+91</div>     <Input Placeholder="Phone Number" ></Input>
              <div className="input-group-text otp-button"><a href="#" className="text-black" >Send OTP</a></div>
            </div>
            <br></br>

            <div className="input-group-prepend" >    <Input Placeholder="OTP" ></Input>
              <div className="background-trans width100 padd7" ><a className="default-color" href="">Didn't Recieve OTP? </a></div>
            </div>
            <br></br>
            <button type="button" className="btn btn-danger rounded-pill width100" disabled="true">CONFIRM</button>
          </div>
        </div>
      </div>
      <div class="padd1p border-b0">
        <div class="background-white " id="headingTwo">
          <h5 class="mb-0">
            <button class="btn btn-link collapsed p-heading" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"><img className="setting-icon" src="img/menu-icon/key.svg" alt="" ></img> Change Password</button>
          </h5>
        </div>
        <div class="collapse" id="collapseTwo" aria-labelledby="headingTwo" data-parent="#accordion">
          <div class="card-body">
          <Input Placeholder="Current Password" type="password"></Input><Input Placeholder="Password" type="password"></Input>
<Input Placeholder="Confirm Password" type="password"></Input>
<br></br>
<button type="button" className="btn btn-danger rounded-pill width100" disabled="true">CONFIRM</button></div>
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
export default PasswordSettings;