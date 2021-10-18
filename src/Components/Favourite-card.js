import React from 'react'
function FavCard() {
    return (
<>

<div class="white_card mb_20 shadow-default padd0"  >
                        <div class="white_card_header">

                                <div class="single_crm padd10 paddt0">
                                    
                                    <div class="crm_body">
                                        <div className="row space-between" >
                                            <div className="row m-15" >
                                            <div className=" padd0">
                                        <div class="profile_info"><img src="img/client_img.png" alt="#"></img></div>
                                        </div>
                                        <div className="" >
                                        <h4 className="join-class-heading card-head paddl18" >Javed Khan</h4>

                                        <p className="join-class-p paddl18" >1 min ago</p>

                                        </div>
                                        </div>

                                   
                                        </div>
                                        
                               
                                    </div>
                                    
                                </div>
                                <h5 className="grey fontw5 card-padd">HTML - Advance Features</h5>
<div className="row d-flex space-between" >
    <div className=" d-flex">
    <img src="img/menu-icon/comment.svg" class="bell-width"></img> <p className="paddtb10 fontauto discuss-padd" > Discuss </p>

</div>
<div>
                                <button type="button" class="card-button btn btn-danger rounded-pill width100 button-padd fontauto space-evenly">Complete Assignment</button>                                    
</div></div>
</div></div>
  </>
    )
}
export default FavCard;