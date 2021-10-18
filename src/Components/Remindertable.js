
import React from 'react'
function ReminderTable() {
    return (
<>

        <tr className="border-b">
            <th className="time-width border-r" scope="row">9:00AM</th>
            <td >
  <div class="popover_parent  green-back"> <a href="javascript:void(0);" class=" text-black  reminder-p"> Today's English Class<span class="caret"></span>
  <br></br> <button type="button" class="card-button btn btn-danger rounded-pill width100 btn-green font-s12" >Join Live Class</button></a>
    <div class="popover popover1">
        <div className="d-flex space-between">
<p class="join-class-heading">Today English Class</p>
<p class="join-class-heading">09:00am To 06:00pm</p>
        </div>
        <p class="join-class-heading font9 ">Teacher: Aamir Khan</p>
        <p class="join-class-heading font9">Subject: English</p>
        <button type="button" class="card-button btn btn-danger rounded-pill width100 details mar btn-green" >Join Class</button>
    </div>
  </div>
</td>
          
        </tr>
     
        <tr className="border-b">
            <th className="time-width border-r" scope="row">10:00AM</th>
            <td >
  <div class="popover_parent  yellow-back"> <a href="" class=" text-black  reminder-p"> Quick Meeting With Principle<span class="caret"></span>
  <br></br> </a>
  </div><br></br>
  <div className="paddt15">
  <div class="popover_parent  blue-back"> <a href="" class=" text-black  reminder-p">Geometry and Maths Class<span class="caret"></span>
  <br></br> </a>
  </div></div>
</td>

          
        </tr>
        
     
     <tr className="border-b">
         <th className="time-width border-r" scope="row">11:00AM</th>
         <td >

</td>

       
     </tr>
     <tr className="border-b">
         <th className="time-width border-r" scope="row">12:00AM</th>
         <td >

</td>

       
     </tr>

     <tr className="border-b">
            <th className="time-width border-r" scope="row">1:00PM</th>
            <td >
  <div class="popover_parent  red-back"> <a href="" class=" text-black  reminder-p"> Lunch Break<span class="caret"></span>
  <br></br>
  <p class="join-class-heading font9 ">1:00PM-2:00PM</p>
 </a>
  </div><br></br>

</td>

          
        </tr>
     <tr className="border-b">
         <th className="time-width border-r" scope="row">2:00PM</th>
         <td >

</td>

       
             
     </tr>
     
     <tr className="border-b">
         <th className="time-width border-r" scope="row">3:00PM</th>
         <td >

</td>

       
     </tr>




                   
                            
</>
    )
}
export default ReminderTable;
