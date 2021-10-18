import React from 'react'
import Navbar from './Navbar';
import Topbar from './Topbar';
import AssignmentCard from './Components/Assignment-complete';
import PinCard from './Components/PinCard'; 
function Notes() {
    return (
<><Navbar></Navbar>

<section class="main_content dashboard_part large_header_bg">
<Topbar></Topbar>
     <div class="main_content_iner ">
        <div class="container-fluid p-0 ">
            <div class="row ">
                 
                <div class="col-12">
                    <div class="white_box mb_30">
                        <div class="box_header ">
                            <div class="main-title">
                            </div>
                        </div>
                        <div id='summernote'></div>
                    </div>
                    
                </div>
                
            </div>
        </div>
    </div>
</section>
</>
    )
}
export default Notes;