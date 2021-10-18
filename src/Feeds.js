import React from 'react'
import Navbar from './Navbar';
import Topbar from './Topbar';
import AssignmentCard from './Components/Assignment-complete';
import PinCard from './Components/PinCard'; 
function Feeds() {
    return (
<>
<Navbar></Navbar>
            <section className="main_content dashboard_part large_header_bg">
                <Topbar></Topbar>
                <div class="main_content_iner ">
      <div class="container-fluid p-0">
            <div class="row justify-content-center">
              
                <div class="col-lg-12">
                    <div class="mb_30">
                        
                        <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">
                              <div class="carousel-item active" data-interval="90000">
                              <div className="row ">
                          
                            <div class="col-lg-4">
                            <div class=" d-flex flex-wrap align-items-center justify-content-between">
                                    <div class="page_title_left d-flex align-items-center">
                                        <h3 class="f_s_25 f_w_700 dark_text mr_30">Favourite</h3>

                                    </div>
                                    <div class="page_title_right">
                                        <div class="page_date_button d-flex align-items-center">
                                        <img className="bell-width" src="img/menu-icon/filter.svg" alt="" ></img>

                                        </div>
                                    </div>
                                </div>
                          
                               
                                <div class="white_card mb_20 newscro shadow-default">
                                    <div class="white_card_header grey-background">
                                        <div className="overflow-hidden newscroll ">
                                        <AssignmentCard></AssignmentCard>
                                <AssignmentCard></AssignmentCard>
                                <AssignmentCard></AssignmentCard>
                                <div class="drop-zone">
    <span class="drop-zone__prompt">Drop Here</span>
    <input type="file" name="myFile" class="drop-zone__input"></input>
  </div>

                                        </div></div></div></div>
                           
                                        <div class="col-lg-4">
                            <div class=" d-flex flex-wrap align-items-center justify-content-between">
                                    <div class="page_title_left d-flex align-items-center">
                                    <div class="profile_info d-flex "><img src="img/client_img.png"alt="#"></img>
                            <h3 className="name-text2">Aamir Khan</h3></div>

                                    </div>
                                   
                                </div>
                          
                               
                                <div class="white_card mb_20 newscro shadow-default">
                                    <div class="white_card_header grey-background">
                                        <div className="overflow-hidden newscroll ">
                                       <PinCard></PinCard>
                                       <PinCard></PinCard>
                                       <PinCard></PinCard>
                                       <PinCard></PinCard>


                                        </div></div></div></div>
                           
                                        <div class="col-lg-4">
                            <div class=" d-flex flex-wrap align-items-center justify-content-between">
                                    <div class="page_title_left d-flex align-items-center">
                                    <div class="profile_info d-flex "><img src="img/client_img.png"alt="#"></img>
                            <h3 className="name-text2">Aamir Khan</h3></div>

                                    </div>
                                   
                                </div>
                          
                               
                                <div class="white_card mb_20 newscro shadow-default">
                                    <div class="white_card_header grey-background">
                                        <div className="overflow-hidden newscroll ">
                                       <PinCard></PinCard>
                                       <PinCard></PinCard>

                                       <PinCard></PinCard>

                                       <PinCard></PinCard>


                                        </div></div></div></div>
                           
                        </div>
                       
                              </div>
                              <div class="carousel-item" data-interval="10000">
                              <div className="row ">
                          
                                    <div class="col-lg-4">
                          <div class=" d-flex flex-wrap align-items-center justify-content-between">
                                  <div class="page_title_left d-flex align-items-center">
                                  <div class="profile_info d-flex "><img src="img/client_img.png"alt="#"></img>
                          <h3 className="name-text2">Aamir Khan</h3></div>

                                  </div>
                                 
                              </div>
                        
                             
                              <div class="white_card mb_20 newscro shadow-default">
                                  <div class="white_card_header grey-background">
                                      <div className="overflow-hidden newscroll ">
                                     <PinCard></PinCard>
                                     <PinCard></PinCard>
                                     <PinCard></PinCard>
                                     <PinCard></PinCard>


                                      </div></div></div></div>
                         
                                      <div class="col-lg-4">
                          <div class=" d-flex flex-wrap align-items-center justify-content-between">
                                  <div class="page_title_left d-flex align-items-center">
                                  <div class="profile_info d-flex "><img src="img/client_img.png"alt="#"></img>
                          <h3 className="name-text2">Aamir Khan</h3></div>

                                  </div>
                                 
                              </div>
                        
                             
                              <div class="white_card mb_20 newscro shadow-default">
                                  <div class="white_card_header grey-background">
                                      <div className="overflow-hidden newscroll ">
                                     <PinCard></PinCard>
                                     <PinCard></PinCard>
                                     <PinCard></PinCard>
                                     <PinCard></PinCard>


                                      </div></div></div></div>
                         
                                 <div class="col-lg-4">
                          <div class=" d-flex flex-wrap align-items-center justify-content-between">
                                  <div class="page_title_left d-flex align-items-center">
                                  <div class="profile_info d-flex "><img src="img/client_img.png"alt="#"></img>
                          <h3 className="name-text2">Aamir Khan</h3></div>

                                  </div>
                                 
                              </div>
                        
                             
                              <div class="white_card mb_20 newscro shadow-default">
                                  <div class="white_card_header grey-background">
                                      <div className="overflow-hidden newscroll ">
                                     <PinCard></PinCard>
                                     <PinCard></PinCard>

                                     <PinCard></PinCard>

                                     <PinCard></PinCard>


                                      </div></div></div></div>
                         
                      </div>
                     
                         
                              </div>
                              <div class="carousel-item">
                              <div className="row ">
                          
                              <div class="col-lg-4">
                          <div class=" d-flex flex-wrap align-items-center justify-content-between">
                                  <div class="page_title_left d-flex align-items-center">
                                  <div class="profile_info d-flex "><img src="img/client_img.png"alt="#"></img>
                          <h3 className="name-text2">Aamir Khan</h3></div>

                                  </div>
                                 
                              </div>
                        
                             
                              <div class="white_card mb_20 newscro shadow-default">
                                  <div class="white_card_header grey-background">
                                      <div className="overflow-hidden newscroll ">
                                     <PinCard></PinCard>
                                     <PinCard></PinCard>
                                     <PinCard></PinCard>
                                     <PinCard></PinCard>


                                      </div></div></div></div>
                         
                                
                                      <div class="col-lg-4">
                          <div class=" d-flex flex-wrap align-items-center justify-content-between">
                                  <div class="page_title_left d-flex align-items-center">
                                  <div class="profile_info d-flex "><img src="img/client_img.png"alt="#"></img>
                          <h3 className="name-text2">Aamir Khan</h3></div>

                                  </div>
                                 
                              </div>
                        
                             
                              <div class="white_card mb_20 newscro shadow-default">
                                  <div class="white_card_header grey-background">
                                      <div className="overflow-hidden newscroll ">
                                     <PinCard></PinCard>
                                     <PinCard></PinCard>
                                     <PinCard></PinCard>
                                     <PinCard></PinCard>


                                      </div></div></div></div>
                         
                                      <div class="col-lg-4">
                          <div class=" d-flex flex-wrap align-items-center justify-content-between">
                                  <div class="page_title_left d-flex align-items-center">
                                  <div class="profile_info d-flex "><img src="img/client_img.png"alt="#"></img>
                          <h3 className="name-text2">Aamir Khan</h3></div>

                                  </div>
                                 
                              </div>
                        
                             
                              <div class="white_card mb_20 newscro shadow-default">
                                  <div class="white_card_header grey-background">
                                      <div className="overflow-hidden newscroll ">
                                     <PinCard></PinCard>
                                     <PinCard></PinCard>

                                     <PinCard></PinCard>

                                     <PinCard></PinCard>


                                      </div></div></div></div>
                         
                      </div>
                     
                         
                              </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                              <span  aria-hidden="true"><i class="arrow fas fa-arrow-left"></i></span>
                              <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                            <span  aria-hidden="true"><i class="arrow fas fa-arrow-right"></i></span>
                              <span class="sr-only">Next</span>
                            </a>
                          </div>
                    </div>
                </div>
                
                
                



        </div>
    </div>
  </div>
               
            </section>
            
<section class="main_content dashboard_part large_header_bg">
       
       <div class="main_content_iner ">
         <div class="container-fluid p-0 sm_padding_15px">
             <div class="row justify-content-center">
                 <div class="col-12">
                     <div class="dashboard_header mb_50">
                         <div class="row">
                
               
               
                         <div class="col-lg-6">
                     <div class="card_box box_shadow position-relative mb_30     ">
                         <div class="white_box_tittle     ">
                             <div class="main-title2 ">
                                 <h4 class="mb-2 nowrap ">Horizontal Scroll</h4>
                             </div>
                         </div>
                         <div class="box_body">
                         <div class="scroll-bar-wrap ">
                             <div class="horizontal-scroll scroll-demo ps-container ps-theme-default ps-active-x" data-ps-id="ba1cd476-48bb-90f5-de3f-1f21b80bb3ea">
                                 <div class="horrizontal_width" style={{width: "1800px"}} >
                                     <p>
                                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem impedit facere hic! Mollitia cum placeat facere magnam voluptate. Explicabo perspiciatis mollitia eos assumenda, maiores excepturi? Rerum tempora quo blanditiis quos autem cum, doloribus tenetur dignissimos sequi minima repellendus quasi veritatis sunt illum reiciendis labore facere, vel quidem distinctio provident ipsum tempore voluptates? Tenetur non cupiditate ullam dolores architecto incidunt, quisquam blanditiis expedita tempora. Asperiores fugit voluptate molestias ab quis, unde quo autem dolorem totam ex. Dolore consequuntur quasi nobis tempora quo rem, quis rerum corporis consectetur. Consequuntur dolorem quidem non doloremque sapiente. Quam, quo recusandae eligendi dolores in quos nulla exercitationem, repellat et officia vero? Minima, eius? Assumenda et eius, sed ipsum dolorum rerum culpa obcaecati asperiores, ab quaerat veniam fugiat illum nisi? Velit at itaque ea officia ullam, aperiam, numquam molestiae esse quaerat perspiciatis voluptatem! Animi necessitatibus aliquid nihil, laboriosam qui sapiente inventore voluptate perferendis placeat ratione quo, soluta accusamus tempora asperiores molestiae iste eveniet vel, libero rem. Repellat dicta architecto aliquam illum nostrum veniam, quidem quisquam est laudantium voluptatum! Pariatur, possimus. Necessitatibus ea quasi illo tempore, veritatis ut provident architecto deserunt soluta magni, eos animi est et atque suscipit, molestiae ex repellendus deleniti itaque sint excepturi ab vel. Aperiam omnis tempore, officia nisi dolor id quisquam, aut in autem quis delectus hic quia quaerat rem ducimus laudantium eum facilis sed quidem temporibus mollitia excepturi voluptatum voluptatem ab. Obcaecati at fuga esse suscipit ab explicabo officiis voluptates, iure dignissimos quidem, modi animi beatae magnam aliquam fugit asperiores corrupti reprehenderit cum perspiciatis quisquam eaque enim. Officia quae, fugit vitae, voluptate magnam est earum qui perferendis dolorum soluta placeat ad. Asperiores sapiente consequuntur fuga fugiat? Alias repudiandae porro tempora placeat est totam, debitis officia. Porro magnam vel, at repudiandae sequi quasi nulla? A quae possimus tenetur reiciendis quaerat, dolore provident impedit?
                                     </p>
                                     <p>
                                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem impedit facere hic! Mollitia cum placeat facere magnam voluptate. Explicabo perspiciatis mollitia eos assumenda, maiores excepturi? Rerum tempora quo blanditiis quos autem cum, doloribus tenetur dignissimos sequi minima repellendus quasi veritatis sunt illum reiciendis labore facere, vel quidem distinctio provident ipsum tempore voluptates? Tenetur non cupiditate ullam dolores architecto incidunt, quisquam blanditiis expedita tempora. Asperiores fugit voluptate molestias ab quis, unde quo autem dolorem totam ex. Dolore consequuntur quasi nobis tempora quo rem, quis rerum corporis consectetur. Consequuntur dolorem quidem non doloremque sapiente. Quam, quo recusandae eligendi dolores in quos nulla exercitationem, repellat et officia vero? Minima, eius? Assumenda et eius, sed ipsum dolorum rerum culpa obcaecati asperiores, ab quaerat veniam fugiat illum nisi? Velit at itaque ea officia ullam, aperiam, numquam molestiae esse quaerat perspiciatis voluptatem! Animi necessitatibus aliquid nihil, laboriosam qui sapiente inventore voluptate perferendis placeat ratione quo, soluta accusamus tempora asperiores molestiae iste eveniet vel, libero rem. Repellat dicta architecto aliquam illum nostrum veniam, quidem quisquam est laudantium voluptatum! Pariatur, possimus. Necessitatibus ea quasi illo tempore, veritatis ut provident architecto deserunt soluta magni, eos animi est et atque suscipit, molestiae ex repellendus deleniti itaque sint excepturi ab vel. Aperiam omnis tempore, officia nisi dolor id quisquam, aut in autem quis delectus hic quia quaerat rem ducimus laudantium eum facilis sed quidem temporibus mollitia excepturi voluptatum voluptatem ab. Obcaecati at fuga esse suscipit ab explicabo officiis voluptates, iure dignissimos quidem, modi animi beatae magnam aliquam fugit asperiores corrupti reprehenderit cum perspiciatis quisquam eaque enim. Officia quae, fugit vitae, voluptate magnam est earum qui perferendis dolorum soluta placeat ad. Asperiores sapiente consequuntur fuga fugiat? Alias repudiandae porro tempora placeat est totam, debitis officia. Porro magnam vel, at repudiandae sequi quasi nulla? A quae possimus tenetur reiciendis quaerat, dolore provident impedit?
                                     </p>
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
export default Feeds;