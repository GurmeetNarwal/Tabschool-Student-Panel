import React from 'react'
import Navbar from './Navbar';
import Topbar from './Topbar';
import NewNotes from './Components/Notes';
function Notes2() {
    return (
<><Navbar></Navbar>

<section class="main_content dashboard_part large_header_bg">
<Topbar></Topbar>

<div className="main_content_iner overly_inner paddr0 paddl10" >
                    <div className="container-fluid p-0">
                        <div className="row">
                        
                        <div className="col padd0">
                        <div className="white_card card_height_100 mb_30 user_crm_wrapper ">
        <div className=" d-flex flex-wrap align-items-center justify-content-between">
                                    <div className="page_title_left d-flex align-items-center">
                                        <h3 className="f_s_25 f_w_700 dark_text mr_30 paddl12">Notes</h3>

                                    </div>
                                 
                                </div>
                                <div className="row">

                                <div class="col min-max-height" >
                                <div class="single_crm padd0  shadow-default" >
                                    
                                    <div class="crm_body padd0 paddt0">
                                        <div className="row content-center padd0 paddt0">
                                    <div className="shadow-default radius15 over-hidden paddb34p" >
                                    <img className="width100 radius15 add-iconpadd" src="img/menu-icon/add.svg"></img>
                                        </div>
                                        

                                        </div>
                                   <div className='content-center d-flex'>
                                   <img className="width12"  src="img/menu-icon/upload.svg"></img>
                                        <h4 className="join-class-heading paddl5" >Upload</h4>

</div>
                                       
                                    </div>

                                </div>
                            </div>
                            <NewNotes></NewNotes>
                                <NewNotes></NewNotes>
                                <NewNotes></NewNotes>
                                <NewNotes></NewNotes>
                                <NewNotes></NewNotes>
                                <NewNotes></NewNotes>
                                <NewNotes></NewNotes>
                                <NewNotes></NewNotes>
                                <NewNotes></NewNotes>
                                <NewNotes></NewNotes>
                                <NewNotes></NewNotes>
                                <NewNotes></NewNotes>
                                <NewNotes></NewNotes>
                                <NewNotes></NewNotes>
                                <NewNotes></NewNotes>
                                <NewNotes></NewNotes>
                                <NewNotes></NewNotes>
                                
                      </div>  
                           </div>
    </div>
    </div>
    </div></div>
</section>
</>
    )
}
export default Notes2;