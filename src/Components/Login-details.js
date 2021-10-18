import React,{useState} from 'react';
import Input from './input';

function LoginDetails() {
    const [show,setShow]=React.useState(false)
  
    return (
<>
<div className="modal fade" id="exampleModalLong2"  tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
  
       
        <div className="modal-body paddt0" >
        <div class="container">
        <h3 className="modal-title text-center mart10" id="exampleModalLongTitle">Confirm Your details</h3>

    <div class="avatar-upload d-flex content-center">
        <div class="avatar-edit">
            <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg" />
            <label for="imageUpload" className="pencil-padd" ><i class="fas fa-pencil-alt"></i></label>
        </div>
        <div class="avatar-preview">
            <div id="imagePreview" >
            </div>
        </div>
    </div>
</div>    <Input Placeholder="School Name"></Input>
    <Input Placeholder="Class"></Input>

    <Input Placeholder="Full Name"></Input>
    <div className="input-group-prepend"><div className="input-group-text background-trans amr-r20" >+91</div>     <Input Placeholder="Phone Number" ></Input>
    <div className="input-group-text otp-button"><a href="#" className="text-black" onClick={()=>setShow(true)}>Send OTP</a></div>
</div>
<br></br>
{show?
<div className="input-group-prepend" >    <Input Placeholder="OTP" ></Input>
<div className="background-trans width100 padd7" ><a className="default-color" href="">Didn't Recieve OTP? </a></div> 
</div>:null
}
<br></br>
<button type="button" className="btn btn-danger rounded-pill width100" disabled="true">CONFIRM</button>

        </div>
        
      </div>
    </div>
  </div>
               
</>
    )
}
export default LoginDetails;