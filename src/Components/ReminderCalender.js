
import React from 'react'
import './calender.css';


function ReminderCalender() {
    return (
<><table className="table1">
  <thead>
    <tr>
      <th>   <img className="bell-width" src="img/menu-icon/cal.svg" alt=""></img></th>
      <th>
        <span class="long">Monday</span>
        <span class="short">Mon</span>
      </th>
      <th>
        <span class="long">Tuesday</span>
        <span class="short">Tue</span>
      </th>
      <th>
        <span class="long">Wendsday</span>
        <span class="short">We</span>
      </th>
      <th>
        <span class="long">Thursday</span>
        <span class="short">Thur</span>
      </th>
      <th>
        <span class="long">Friday</span>
        <span class="short">Fri</span>
      </th>
      <th>
        <span class="long">Saturday</span>
        <span class="short">Sat</span>
      </th>
      <th>
        <span class="long">Sunday</span>
        <span class="short">Sun</span>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="hour" ><span>1:00</span></td>
      <td >
  <div class="  red-back"> <a href="" class=" text-black  reminder-p"> Lunch Break<span class="caret"></span>
  <br></br>
  <p class="join-class-heading font9 ">1:00PM-2:00PM</p>
 </a>
  </div><br></br>

</td>

          
      <td></td>
      <td> <div class="popover_parent popover-height  green-back"> <a href="javascript:void(0);" class=" text-black  reminder-p"> Today's English Class<span class="caret"></span>
  <br></br> </a>
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
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  
    <tr>
      <td class="hour" ><span>2:00</span></td>
      <td></td>
      <td></td>
      <td>
        <div class="yellow-back"> 
        <a href="" class=" text-black  reminder-p"> Quick Meeting With Principle<span class="caret"></span>
        </a>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>

  
    
    <tr>
      <td class="hour" ><span>3:00</span></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>

  
    <tr>
      <td class="hour" ><span>3:00</span></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>


    <tr>
      <td class="hour" ><span>3:00</span></td>
      <td></td>
      <td>
  <div class=" blue-back"> <a href="" class=" text-black  reminder-p">Geometry and Maths Class<span class="caret"></span>
  </a>
  </div></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>

 
    <tr>
      <td class="hour" ><span>3:00</span></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>


    <tr>
      <td class="hour" ><span>3:00</span></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>

   

    <tr>
      <td class="hour" ><span>3:00</span></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>

   

    <tr>
      <td class="hour" ><span>3:00</span></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>

   

    <tr>
      <td class="hour" ><span>3:00</span></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>

   
    
    
  </tbody>
</table>
</>
    )
}
export default ReminderCalender;