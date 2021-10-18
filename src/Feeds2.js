import React from 'react'
import Navbar from './Navbar';
import Topbar from './Topbar';
import FavCard from './Components/Favourite-card';
import PinCard from './Components/PinCard'; 
import FeedsFilter from './Components/FeedsFilter';
function Feeds2() {
    return (
<><Navbar></Navbar>

<section class="main_content dashboard_part large_header_bg ">
<Topbar></Topbar>
      <div class="main_content_iner paddb0 padd0">
        <div class="container-fluid p-0 ">
            <div class="row justify-content-center">
                <div class="col-12 padd0">
                    <div class="dashboard_header">
                        <div class="row">
               
              
              
                        <div class="col padd0">
                    <div class=" position-relative">
                      
                        <div class="box_body">
                        <div class="scroll-bar-wrap ">
                            <div class="horizontal-scroll scroll-demo ps-container ps-theme-default ps-active-x heightauto" data-ps-id="ba1cd476-48bb-90f5-de3f-1f21b80bb3ea">
                                <div class="horrizontal_width" style={{width: "2600px"}} >
                                 <div className="row">
                                 <div class="col " >
                                 <div class=" d-flex flex-wrap align-items-center justify-content-between " >
                                    <div class="page_title_left d-flex align-items-center">
                                        <h3 class="f_s_25 f_w_700 dark_text mr_30">Favourite
                                
                                        </h3>
                                        <div className="collapse menu2"  id="collapseExample2" >
               <FeedsFilter></FeedsFilter>

                </div>
    
                                    </div>
                                    <div class="page_title_right">
                                    <img src="img/menu-icon/nav8.svg" alt="" className="bell-width" data-toggle="collapse" data-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample"></img>

                                    </div>
                                </div>
         
                                <div class="white_card mb_20 newscro  widthauto" >
                                    <div class="minheight white_card_header shadow-default1 grey-background minh">
                                    <div className="height2">
                                        <div class="drop-zone">
    <span class="drop-zone__prompt">Drop Here</span>
    <input type="file" name="myFile" class="drop-zone__input"></input>
  </div></div>
<br></br>
                                        <div className="overflow-hidden  newscroll heightau heightau1">
                      
                                       <FavCard></FavCard>
                                       <FavCard></FavCard>
                                       <FavCard></FavCard>
           
                                        </div></div></div></div>
                                        <div class="col ">
                            <div class=" d-flex flex-wrap align-items-center justify-content-between">
                                    <div class="page_title_left d-flex align-items-center">
                                    <div class="profile_info d-flex "><img className="margt-5" src="img/client_img.png"alt="#"></img>
                            <h3   className="name-head">Aamir Khan</h3></div>

                                    </div>
                                   
                                </div>
                          
                               
                                <div class="white_card mb_20 newscro   widthauto" >
                                    <div class="minheight white_card_header shadow-default1 grey-background">
                                        <div className="overflow-hidden height1 newscroll ">
                                            <div className="ui-sortable" id="draggableMultiple">
                                       <PinCard></PinCard>
                                       <PinCard></PinCard>
                                       <PinCard></PinCard>
                                       <PinCard></PinCard>
</div>

                                        </div></div></div></div>
                           
                                        <div class="col ">
                            <div class=" d-flex flex-wrap align-items-center justify-content-between">
                                    <div class="page_title_left d-flex align-items-center">
                                    <div class="profile_info d-flex "><img className="margt-5" src="img/client_img.png"alt="#"></img>
                            <h3   className="name-head">Aamir Khan</h3></div>

                                    </div>
                                   
                                </div>
                          
                               
                                <div class="white_card mb_20 newscro   widthauto  " >
                                    <div class="minheight white_card_header shadow-default1 grey-background ">
                                        <div className="overflow-hidden height1 newscroll ">
                                       <PinCard></PinCard>
                                       <PinCard></PinCard>
                                       <PinCard></PinCard>
                                       <PinCard></PinCard>


                                        </div></div></div></div>
                           
                                        <div class="col ">
                            <div class=" d-flex flex-wrap align-items-center justify-content-between">
                                    <div class="page_title_left d-flex align-items-center">
                                    <div class="profile_info d-flex "><img className="margt-5" src="img/client_img.png"alt="#"></img>
                            <h3 className="page_title_left d-flex align-items-center" >Aamir Khan</h3></div>

                                    </div>
                                   
                                </div>
                          
                               
                                <div class="white_card mb_20 newscro   widthauto" >
                                    <div class="minheight white_card_header shadow-default1 grey-background">
                                        <div className="overflow-hidden height1 newscroll ">
                                       <PinCard></PinCard>
                                       <PinCard></PinCard>
                                       <PinCard></PinCard>
                                       <PinCard></PinCard>


                                        </div></div></div></div>
                           
                                     
                                        <div class="col ">
                            <div class=" d-flex flex-wrap align-items-center justify-content-between">
                                    <div class="page_title_left d-flex align-items-center">
                                    <div class="profile_info d-flex "><img className="margt-5" src="img/client_img.png"alt="#"></img>
                            <h3   className="name-head">Aamir Khan</h3></div>

                                    </div>
                                   
                                </div>
                          
                               
                                <div class="white_card mb_20 newscro   widthauto" >
                                    <div class="minheight white_card_header shadow-default1 grey-background">
                                        <div className="overflow-hidden height1 newscroll ">
                                       <PinCard></PinCard>
                                       <PinCard></PinCard>
                                       <PinCard></PinCard>
                                       <PinCard></PinCard>


                                        </div></div></div></div>
                           
                                        <div class="col ">
                            <div class=" d-flex flex-wrap align-items-center justify-content-between">
                                    <div class="page_title_left d-flex align-items-center">
                                    <div class="profile_info d-flex "><img className="margt-5" src="img/client_img.png"alt="#"></img>
                            <h3   className="name-head">Aamir Khan</h3></div>

                                    </div>
                                   
                                </div>
                          
                               
                                <div class="white_card mb_20 newscro   widthauto" >
                                    <div class="minheight white_card_header shadow-default1 grey-background">
                                        <div className="overflow-hidden height1 newscroll ">
                                       <PinCard></PinCard>
                                       <PinCard></PinCard>

                                       <PinCard></PinCard>

                                       <PinCard></PinCard>


                                        </div></div></div></div>
                                        <div class="col ">
                            <div class=" d-flex flex-wrap align-items-center justify-content-between">
                                    <div class="page_title_left d-flex align-items-center">
                                    <div class="profile_info d-flex "><img className="margt-5" src="img/client_img.png"alt="#"></img>
                            <h3   className="name-head">Aamir Khan</h3></div>

                                    </div>
                                   
                                </div>
                          
                       
                               
                                <div class="white_card mb_20 newscro   widthauto" >
                                    <div class="minheight white_card_header shadow-default1 grey-background">
                                        <div className="overflow-hidden newscroll height1">
                                       <PinCard></PinCard>
                                       <PinCard></PinCard>

                                       <PinCard></PinCard>

                                       <PinCard></PinCard>


                                        </div></div></div></div>
                           
                                 </div>
                                </div> 
                            <div class="ps-scrollbar-x-rail"  style={{left:'0',bottom:'3px', width:'482px'}} ><div class="ps-scrollbar-x" tabindex="0"  style={{left:'0',width:'128px'}} ></div></div><div class="ps-scrollbar-y-rail" style={{top:'0',right:'3px'}}><div class="ps-scrollbar-y" tabindex="0" style={{top:'0',height:'0'}}></div></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div></div>
            </div>
        </div>
    </div>

</section>
</>
    )
}
export default Feeds2;