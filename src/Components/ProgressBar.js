import React from 'react'
function ProgressBar({ProgressTitle,handleChange,...otherProps}) {
    return (
<>





<div id="wrapper">

	<p><a class="button" href="#popup2">Click Me Too</a></p>
</div>


<div id="popup2" class="overlay3 light3">
	<a class="cancel3" href="#"></a>
	<div class="popup3">
	<div className="">
<div class="white_card mb_20 position-relative  shadow-default"  >
                        <div class="white_card_header padd111">

                                <div class="single_crm  ">
                                  
                                    <div class="crm_body padd10">
                                
                                    <h3 class="f_s_25 f_w_700 dark_text mr_30">{ProgressTitle}
                                
                                </h3>
                              <br></br>
                                <div class="progress-wrapper ">
   
   <div class="progress error"></div>
 </div>
 <br></br>
 <div className="end-text">
 <button type="button" class="card-button card-button1 btn btn-danger rounded-pill fontauto width50p descrption-p" >Cancel</button>
 </div>
                                    </div>
                                    
                                </div>
                                
                  
</div></div></div>
	</div>
</div>




</>
    )
}
export default ProgressBar;