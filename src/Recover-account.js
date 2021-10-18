import React from 'react';
import Input from './Components/input';

function RecoverAccount() {
    return (
<>
<div className="modal fade" id="exampleModalLong3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
      
        <h3 className="modal-title text-center paddt25" id="exampleModalLongTitle" >Recover Your Account</h3>
          {/* <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button> */}
        <br></br>
        <div className="modal-body paddt0" >
        <div className="card-profile paddb25"><p className="p-heading">Please enter you mobile Number</p></div>
  
    <div className="input-group-prepend"><div className="input-group-text background-trans amr-r20" >+91</div>     <Input Placeholder="Phone Number" ></Input>
    <div className="input-group-text otp-button"><a href="#" className="text-black" >Send OTP</a></div>
</div>
<br></br>

<div className="input-group-prepend" >    <Input Placeholder="OTP" ></Input>
<div className="background-trans width100 padd7" ><a className="default-color" href="">Didn't Recieve OTP? </a></div> 
</div>
<br></br>
<Input Placeholder="Password" type="password"></Input>
<Input Placeholder="Confirm Password" type="password"></Input>
<br></br>
<button type="button" className="btn btn-danger rounded-pill width100" disabled="true">CONFIRM</button>

        </div>
        
      </div>
    </div>
  </div>
</>
    )
}
export default RecoverAccount;