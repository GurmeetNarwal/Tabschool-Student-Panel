import React from 'react'
function Navbar() {
    return (
<>
  
<nav className="sidebar">
    <div className="logo d-flex justify-content-between">
        <a className="large_logo width200p" href="index-2.html"><img src="img/logo.svg" alt=""style={{width:"200px"}}></img></a>
        <a className="small_logo" href="index-2.html"><img src="img/mini_logo.svg" alt="" style={{width:"30px"}}></img></a>
        <div className="sidebar_close_icon d-lg-none">
            <i className="ti-close"></i>
        </div>
    </div>
    <ul id="sidebar_menu">
        <li className="mbottom6">
            <a className="content-start nav-background" href="/Home" aria-expanded="false" >
                <div className="nav_icon_small">
                    <img src="img/menu-icon/nav1.svg" alt=""></img>
                </div>
                <div className="nav_title">
                    <span>My Bag </span>
                </div>
            </a>
         
        </li>
        <li className="mbottom6">
            <a className="content-start nav-background" href="/Feeds2" aria-expanded="false" >
                <div className="nav_icon_small">
                    <img src="img/menu-icon/nav2.png" alt=""></img>
                </div>
                <div className="nav_title">
                    <span>Feeds</span>
                </div>
            </a>
         
        </li>


        <li className="mbottom6">
            <a className="content-start nav-background" href="/Library" aria-expanded="false" >
                <div className="nav_icon_small">
                    <img src="img/menu-icon/nav3.svg" alt=""></img>
                </div>
                <div className="nav_title">
                    <span>Library</span>
                </div>
            </a>
         
        </li>

        <li className="mbottom6">
            <a className="content-start nav-background" href="/Calender" aria-expanded="false" >
                <div className="nav_icon_small">
                    <img src="img/menu-icon/nav4.svg" alt=""></img>
                </div>
                <div className="nav_title">
                    <span>Academics</span>
                </div>
            </a>
         
        </li>

        <li className="mbottom6">
            <a className="content-start nav-background" href="/Payfee" aria-expanded="false" >
                <div className="nav_icon_small">
                    <img src="img/menu-icon/rupee.png" alt=""></img>
                </div>
                <div className="nav_title">
                    <span>Pay Fee</span>
                </div>
            </a>
         
        </li>

        <li className="mbottom6">
            <a className="content-start nav-background" href="/Notes2" aria-expanded="false" >
                <div className="nav_icon_small">
                    <img src="img/menu-icon/nav6.svg" alt="/Notes"></img>
                </div>
                <div className="nav_title">
                    <span>Notes </span>
                </div>
            </a>
         
        </li>

        <li className="mbottom6">
            <a className="content-start nav-background" href="/Reminder" aria-expanded="false" >
                <div className="nav_icon_small">
                    <img src="img/menu-icon/nav7.svg" alt=""></img>
                </div>
                <div className="nav_title">
                    <span>Reminders </span>
                </div>
            </a>
         
        </li>
        <li className="mbottom6">
            <a className="content-start nav-background" href="/Setting" aria-expanded="false" >
                <div className="nav_icon_small">
                    <img src="img/menu-icon/nav11.svg" alt=""></img>
                </div>
                <div className="nav_title">
                    <span>Settings </span>
                </div>
            </a>
         
        </li>




        

      </ul>
      <div className="col-md-12 text-center display">
                    <div className="white_card card_height_100 mb_30 user_crm_wrapper">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="single_crm background-nav marb0" >
                                   
                                    <div className="crm_body" style={{padding: "10px 5px"}}>
                                        <h5 className="h5-heading">Download Our App</h5>
                                        
                                        <img className="maxwidth150" src="img/menu-icon/app-download.png" alt="" ></img>

                                    </div>
                                </div>
                            </div>
                           </div>
                     </div>
                </div>
</nav>
</>
    )}
    export default Navbar;