import React from 'react'
import Navbar from './Navbar';
import Input from './Components/input';
import Topbar from './Topbar';
import Feemenu from './Components/Feesmenu';
function Payfee() {
    return (
<><Navbar></Navbar>

<section class="main_content dashboard_part large_header_bg">
<Topbar></Topbar>

<div className="main_content_iner overly_inner paddr0 paddl10" >
                    <div className="container-fluid p-0">
                    <div className="row paddl11">
                            <div class="col-lg-6">
                      
                                
                                <div class="white_card mb_20  shadow-default">
                            
                                    <div class="white_card_header padding10p">
                                       
                                    <div class="">
                                    <h3 class="f_s_25 f_w_700 dark_text mr_30 text-center">Pay Fee</h3>
                                <br></br>
        <h3 className=" text-center f_s_25 f_w_700 dark_text mr_30 text-center" id="exampleModalLongTitle">DPS School Chandigarh</h3>
        <br></br>
</div>    
<div data-toggle="collapse" data-target="#collapseExample7" aria-expanded="false" aria-controls="collapseExample">
    <Input Placeholder="Select Your Fees"></Input>
    <div className="collapse menu7"  id="collapseExample7" >
               <Feemenu></Feemenu>

                </div>
    </div>
    <Input Placeholder="Amount"></Input>
    <Input Placeholder="Name"></Input>

    <Input Placeholder="Phone Number"></Input>
    <Input Placeholder="Email"></Input>


   <div className="row">
       <div className="col-md-6">
    <div class="white_card mb_20  shadow-default2">
                            
                            <div class="white_card_header ">
                            <div className="d-flex content-center">
                                <img className=" payment-icons3" src="img/menu-icon/credit.svg"></img>
                                <p className="join-class-heading text-center">Credit Card</p>
                                </div> </div>
   
</div>
</div>
<div className="col-md-6">
    <div class="white_card mb_20  shadow-default2">
                            
                            <div class="white_card_header ">
                            <div className="d-flex content-center">
                                <img className=" payment-icons2" src="img/menu-icon/debit.svg"></img>
                            <p className="join-class-heading text-center">Debit Card</p>

                                </div> </div>
   
</div>
</div>

<div className="col-md-6">
    <div class="white_card mb_20  shadow-default2">
                            
                            <div class="white_card_header ">
                            <div className="d-flex content-center">
                                <img className=" payment-icons2" src="img/menu-icon/upi.svg"></img>
                                <p className="join-class-heading text-center">UPI</p>
                                </div> </div>
   
</div>
</div>
<div className="col-md-6">
    <div class="white_card mb_20  shadow-default2">
                            
                            <div class="white_card_header ">
                                <div className="d-flex content-center">
                                <img className=" payment-icons" src="img/menu-icon/netbanking.svg"></img>
                                <p className="join-class-heading text-center">Net Banking</p>
                                </div>
                                </div>
   
</div>
</div>
</div>
<br></br>
<button type="button" className="btn btn-danger rounded-pill width100" >Pay</button>

        </div>
                                   


                                      </div></div>
                                      
                                      <div className="col-lg-6">
                                          <div className="padding10p">
                                      <h3 class="f_s_25 f_w_700 dark_text mr_30 text-center">Fee Informarion</h3>
                                      <br></br>
                                      <div class="form-group col-md-12 padd0">
                                           
                                            <select id="inputState" class="form-control dropdown1">
                                                <option selected="">Choose...</option>
                                                <option>...</option>
                                            </select>
                                        </div>
                                        <h3 class="f_s_20 f_w_700 dark_text mr_30 ">Recent</h3>
                                        <div class="white_card mb_20 shadow-default padd0"  >
                        <div class="white_card_header">

                                <div class="single_crm">
                                    
                                    <div class="crm_body">
                                     <div className="row">
                                         <div className="col">
                                         <img className="green-img"  src="img/menu-icon/green.svg"></img>
                                         <div>
                                             <h3 className="white-color">Paid</h3>
                                             </div>
                                             <h5 className="marb0 margb">Academy Fees</h5>
                                             <h5 className="marb0">1500</h5>
                                             <h5 className="marb0">01-Sep-2021</h5>

                                         </div>
                                         <div className="col end-text">
                                        
                                             <div className="d-flex d-felx ">
                                             
                                                 <h6>Download Invoice </h6>
                                         <a href="">        <img className="download1" src="img/menu-icon/download.svg" alt=""></img>
                                        </a>
                                       
                                        </div>
                                        <img className="maxwidth130" src="img/menu-icon/payement.svg"></img>
                                        </div>
                                     </div>
                                    </div>
                                    
                                </div>
                              
</div></div>
 
<div class="white_card mb_20 shadow-default padd0"  >
                        <div class="white_card_header">

                                <div class="single_crm">
                                    
                                    <div class="crm_body">
                                     <div className="row">
                                         <div className="col">
                                         <img className="green-img"  src="img/menu-icon/red.svg"></img>
                                         <div>
                                             <h3 className="white-color">Pending</h3>
                                             </div>
                                             <h5 className="marb0 margb">Academy Fees</h5>
                                             <h5 className="marb0">1500</h5>
                                             <h5 className="marb0">01-Sep-2021</h5>

                                         </div>
                                         <div className="col end-text">
                                        
                                             <div className="d-flex d-felx">
                                             
                                                 <h6>Download Invoice </h6>
                                         <a href="">        <img className="download1" src="img/menu-icon/download.svg" alt=""></img>
                                        </a>
                                       
                                        </div>
                                        <img className="maxwidth130" src="img/menu-icon/payement.svg"></img>
                                        </div>
                                     </div>
                                    </div>
                                    
                                </div>
                              
</div></div>
 
                                      </div>
                                      
                                      </div>
                                      </div>
                        
                          
                        
                
    </div></div>
</section>
</>
    )
}
export default Payfee;