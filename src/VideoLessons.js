import React from 'react'
import Topbar from './Topbar';
function VideoLessons() {


    const [show, divShow] = React.useState(true)

    return (
        <>

            <section className="main_content1 paddl0" >
                <Topbar></Topbar>

                <div className="main_content_iner overly_inner ">
                    <div className="container-fluid p-0">
                        <div className="row">

                            <div className="col-lg-9" >
                                <div className="white_card card_height_100 mb_30 user_crm_wrapper ">

                                    <div className="single_crm   shadow-default">

                                        <div className="crm_body">
                                            <div className="row content-center paddt0" style={{ margin: '214px' }}>
                                                <div className="play-background">
                                                    <i className="fa fa-play color-red" ></i>
                                                </div>


                                            </div>


                                        </div>
                                    </div>
                                    <div className="btn-group11">
                                        <a className="btn-group__item1 gp1 active" href='#' onClick={() => divShow(true)}>Description </a>
                                        <a className="btn-group__item1 gp2" href="#" onClick={(e) => divShow(false)}>Resources</a>
                                    </div>
                                    {show ?
                                        <div className="white_card mb_30 user_crm_wrapper ">

                                            <div className="single_crm   shadow-default">

                                                <div className="crm_body video-padd" >
                                                    <div className=" paddt0" >
                                                        <h4>Introduction</h4>
                                                        <h4 class="join-class-heading">Javed Khan</h4>
                                                        <p className="text-black">Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy</p>
                                                        <br></br>
                                                        <p className="text-black descrption-p">NCERT Solution - <span><a className="descrption-a" href=""> https://www.learncbse.in/ncert-solutions-2/</a></span></p>
                                                        <p className="text-black descrption-p">Notes - <span><a className="descrption-a" href=""> https://www.learncbse.in/ncert-solutions-2/</a></span></p>
                                                        <br></br>
                                                        <p className="text-black descrption-p">Class 10:- Green Board - <span><a className="descrption-a" href=""> https://www.learncbse.in/ncert-solutions-2/</a></span></p>
                                                        <p className="text-black descrption-p">Class 9th - MKR - <span><a className="descrption-a" href=""> https://www.learncbse.in/ncert-solutions-2/</a></span></p>
                                                        <br></br>
                                                        <p className="text-black descrption-p">For any enquiry contact me on my </p>
                                                        <p className="text-black descrption-p margl10" >email - tabshool123@gmail.com </p>
                                                        <h5>Thanks</h5>





                                                    </div>


                                                </div>
                                            </div></div>
                                       :false}
                                                     {!show ?
                                <div className="white_card  mb_30 user_crm_wrapper ">

                                    <div className="single_crm   shadow-default">

                                        <div className="crm_body video-padd" >
                                            <div className=" paddt0" >
                                                <h4>Download Here</h4>
                                                <p className="text-black">Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy</p>

                                                <h5>Thanks</h5>





                                            </div>


                                        </div>
                                    </div></div>

:true}
                                </div>
                  


                            </div>
                            <div className="col-lg-3 dark-blue" >
                                <div className="white_card card_height_100 mb_30 user_crm_wrapper ">
                                
                                    <div className="overflow-hidden newscroll ">
                                       

                                        <div className="d-flex">
                                            <h4 className="video-p">2.</h4>
                                            <div className="single_crm width100  shadow-default">

                                                <div className="crm_body padd-card">
                                                    <div className="row paddt0">

                                                        <h4 class="join-class-heading">Lorem Ipsum is simply dummy</h4>

                                                    </div>


                                                </div>

                                            </div>
                                        </div>

                                        <div className="d-flex">
                                            <h4 className="video-p">3.</h4>
                                            <div className="single_crm width100  shadow-default">

                                                <div className="crm_body padd-card">
                                                    <div className="row paddt0">

                                                        <h4 class="join-class-heading">Lorem Ipsum is simply dummy</h4>

                                                    </div>


                                                </div>

                                            </div>
                                        </div>

                                        <div className="d-flex">
                                            <h4 className="video-p">4.</h4>
                                            <div className="single_crm width100  shadow-default">

                                                <div className="crm_body padd-card">
                                                    <div className="row paddt0">

                                                        <h4 class="join-class-heading">Lorem Ipsum is simply dummy</h4>

                                                    </div>


                                                </div>

                                            </div>
                                        </div>

                                        <div className="d-flex">
                                            <h4 className="video-p">5.</h4>
                                            <div className="single_crm width100  shadow-default">

                                                <div className="crm_body padd-card">
                                                    <div className="row paddt0">

                                                        <h4 class="join-class-heading">Lorem Ipsum is simply dummy</h4>

                                                    </div>


                                                </div>

                                            </div>
                                        </div>

                                        <div className="d-flex">
                                            <h4 className="video-p">5.</h4>
                                            <div className="single_crm width100  shadow-default">

                                                <div className="crm_body padd-card">
                                                    <div className="row paddt0">

                                                        <h4 class="join-class-heading">Lorem Ipsum is simply dummy</h4>

                                                    </div>


                                                </div>

                                            </div>
                                        </div>

                                        <div className="d-flex">
                                            <h4 className="video-p">6.</h4>
                                            <div className="single_crm width100  shadow-default">

                                                <div className="crm_body padd-card">
                                                    <div className="row paddt0">

                                                        <h4 class="join-class-heading">Lorem Ipsum is simply dummy</h4>

                                                    </div>


                                                </div>

                                            </div>
                                        </div>

                                        <div className="d-flex">
                                            <h4 className="video-p">7.</h4>
                                            <div className="single_crm width100  shadow-default">

                                                <div className="crm_body padd-card">
                                                    <div className="row paddt0">

                                                        <h4 class="join-class-heading">Lorem Ipsum is simply dummy</h4>

                                                    </div>


                                                </div>

                                            </div>
                                        </div>

                                        <div className="d-flex">
                                            <h4 className="video-p">8.</h4>
                                            <div className="single_crm width100  shadow-default">

                                                <div className="crm_body padd-card">
                                                    <div className="row paddt0">

                                                        <h4 class="join-class-heading">Lorem Ipsum is simply dummy</h4>

                                                    </div>


                                                </div>

                                            </div>
                                        </div>

                                        <div className="d-flex">
                                            <h4 className="video-p">9.</h4>
                                            <div className="single_crm width100  shadow-default">

                                                <div className="crm_body padd-card">
                                                    <div className="row paddt0">

                                                        <h4 class="join-class-heading">Lorem Ipsum is simply dummy</h4>

                                                    </div>


                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
export default VideoLessons;