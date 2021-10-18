import React from 'react'
function CalenderReminder() {
    return (
<>

<div class="white_card mb_20 shadow-default padd0" >
                        <div class="white_card_header">

                                <div class="single_crm padd10 ">
                                    
                                    <div class="crm_body">
                                        <div className="row space-between" >
                                            <div className="row m-15" >
                                           
                                        <div className="" >
                                        <h4 className="join-class-heading card-head" >English Practice Test</h4>
                                        <p className="join-class-p mart10" >10:00AM to 6:00PM</p>

                                        </div>
                                        </div>

                                       <div className=" padd0">
                                       <img className="bell-width" src="img/menu-icon/bell.svg" ></img>
                                       </div>
                                        </div>
                                        
                               
                                    </div>
                                    
                                </div>
                                <div className="row d-flex calender-card space-between" >
    <div className=" d-flex">
    <img className="bell-width" src="./img/menu-icon/cal.svg" ></img> 

    <h5 className="padd-calender" >21 Aug 2021</h5>

</div>
<div className=" d-flex">
<img className="bell-width" src="./img/menu-icon/time.svg" ></img> 
<h5 className="padd-calender" >1:00PM</h5>
</div></div>


                                <button type="button" class=" card-button btn rounded-pill width100 yellow-button details details1 space-evenly" >Set Reminder </button>     
</div></div>
  </>
    )
}
export default CalenderReminder;