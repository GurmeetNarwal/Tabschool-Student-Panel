import React from 'react';
import Navbar from './Navbar';
import Topbar from './Topbar';
import JoinCard from './Components/join-class';
import FavCard from './Components/Favourite-card';
import NewNotes from './Components/Notes';
import Heading from './Components/Heading';
import Books from './Components/books';
import PlayVideoCard from './Components/PlayVideoCard';
function AllSearch() {
    const [show, divShow] = React.useState(true)
    return (
        <>
            <Navbar></Navbar>
            <section className="main_content dashboard_part large_header_bg">
                <Topbar></Topbar>

                <div class="">
                    <div class="container-fluid p-0 ">
                     <Heading text="Live Classes"></Heading>
                        <div class="white_card card_height_100 mb_30 user_crm_wrapper paddl12">
                            <div class="row">
                                
                                <JoinCard ></JoinCard>
                                <JoinCard ></JoinCard>
                                <JoinCard ></JoinCard>
                                <JoinCard ></JoinCard>

                            </div></div>
                    </div></div>
          
          
                    <div class="container-fluid ">
                    <Heading text="Feeds"></Heading>
                        <div class="white_card card_height_100 mb_30 user_crm_wrapper">
                            <div class="row">
                                 <div class="col">
                            <FavCard></FavCard>
                            </div>
                            <div class="col">
                            <FavCard></FavCard>
                            </div>
                            <div class="col">
                            <FavCard></FavCard>
                            </div>
                            <div class="col">
                            <FavCard></FavCard>
                            </div>

                            </div></div>
                    </div>
         
                    <div class="container-fluid ">
                    <Heading text="Notes"></Heading>
                        <div class="white_card card_height_100 mb_30 user_crm_wrapper">
                            <div class="row">
                                
                            <NewNotes></NewNotes>
                            <NewNotes></NewNotes>
                            <NewNotes></NewNotes>
                            <NewNotes></NewNotes>
                            <NewNotes></NewNotes>
                            <NewNotes></NewNotes>
                            <NewNotes></NewNotes>
                           
                            </div></div>
                    </div>
         
                    <div class="container-fluid ">
                    <Heading text="Resouces"></Heading>
                        
                            <div class="row">
                            <div className="col-4">
                            <div class="white_card card_height_100 mb_30">  
                            <div className="d-flex space-around">
                                         <div className="card-padd">Exmaination Datesheet<br></br>
                                        <p className="join-class-p">24 Hours Ago</p></div>
                                               <a href="">        <img className="download-button mt_20" src="img/menu-icon/download.svg" alt=""></img>
                                        </a>
                                        
                                    </div>
                                    
                           </div>
                            </div>
                            <div className="col-4">
                            <div class="white_card card_height_100 mb_30">  
                            <div className="d-flex space-around">
                                         <div className="card-padd">Exmaination Datesheet<br></br>
                                        <p className="join-class-p">24 Hours Ago</p></div>
                                               <a href="">        <img className="download-button mt_20" src="img/menu-icon/download.svg" alt=""></img>
                                        </a>
                                        
                                    </div>
                                    
                           </div>
                            </div>
                            <div className="col-4">
                            <div class="white_card card_height_100 mb_30">  
                            <div className="d-flex space-around">
                                         <div className="card-padd">Exmaination Datesheet<br></br>
                                        <p className="join-class-p">24 Hours Ago</p></div>
                                               <a href="">        <img className="download-button mt_20" src="img/menu-icon/download.svg" alt=""></img>
                                        </a>
                                        
                                    </div>
                                    
                           </div>
                            </div>
                          
                            <div className="col-4">
                            <div class="white_card card_height_100 mb_30">  
                            <div className="d-flex space-around">
                                         <div className="card-padd">Exmaination Datesheet<br></br>
                                        <p className="join-class-p">24 Hours Ago</p></div>
                                               <a href="">        <img className="download-button mt_20" src="img/menu-icon/download.svg" alt=""></img>
                                        </a>
                                        
                                    </div>
                                    
                           </div>
                            </div>
                          
                            <div className="col-4">
                            <div class="white_card card_height_100 mb_30">  
                            <div className="d-flex space-around">
                                         <div className="card-padd">Exmaination Datesheet<br></br>
                                        <p className="join-class-p">24 Hours Ago</p></div>
                                               <a href="">        <img className="download-button mt_20" src="img/menu-icon/download.svg" alt=""></img>
                                        </a>
                                        
                                    </div>
                                    
                           </div>
                            </div>
                          
                            <div className="col-4">
                            <div class="white_card card_height_100 mb_30">  
                            <div className="d-flex space-around">
                                         <div className="card-padd">Exmaination Datesheet<br></br>
                                        <p className="join-class-p">24 Hours Ago</p></div>
                                               <a href="">        <img className="download-button mt_20" src="img/menu-icon/download.svg" alt=""></img>
                                        </a>
                                        
                                    </div>
                                    
                           </div>
                            </div>
                          
                            <div className="col-4">
                            <div class="white_card card_height_100 mb_30">  
                            <div className="d-flex space-around">
                                         <div className="card-padd">Exmaination Datesheet<br></br>
                                        <p className="join-class-p">24 Hours Ago</p></div>
                                               <a href="">        <img className="download-button mt_20" src="img/menu-icon/download.svg" alt=""></img>
                                        </a>
                                        
                                    </div>
                                    
                           </div>
                            </div>
                            </div>
                   
                    </div>
         


                    <div class="container-fluid ">
                    <Heading text="Books"></Heading>
                        <div class="white_card card_height_100 mb_30 user_crm_wrapper">
                            <div class="row">
                                
                            <Books></Books>
                            <Books></Books>
                            <Books></Books>
                            <Books></Books>
                            <Books></Books>
                            <Books></Books>
                            <Books></Books>
                            <Books></Books>
                            <Books></Books>
                           
                            </div></div>
                    </div>
                    <div class="container-fluid ">
                    <Heading text="Video Books"></Heading>
                        <div class="white_card card_height_100 mb_30 user_crm_wrapper">
                            <div class="row">
                                
                            <PlayVideoCard></PlayVideoCard>
                            <PlayVideoCard></PlayVideoCard>
                            <PlayVideoCard></PlayVideoCard>
                            <PlayVideoCard></PlayVideoCard>
                            </div></div>
                    </div>
         
                
            </section>
     


        </>
    )
}
export default AllSearch;