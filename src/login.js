import React from 'react';
import './App.css';
import LoginDetails from './Components/Login-details';
import RecoverAccount from './Recover-account';
function Login() {
    return (
<>
<div className="img-back">
<div class='buttons-container paddt15'>
  <div class='button-icons facebook'>
    <i className="fab fa-facebook-f "></i>
  </div>
  <div class='button-icons twitter marginl14'>
    <i className="fab fa-twitter "></i>
  </div>
 
  <div class='button-icons instagram marginl14'>
    <i className="fab fa-instagram "></i>
  </div>
  
</div>
<div className="container">

<div className="row hello-1 content-start">
                <div className="col-md-4 padd4 text-center marl7">
                    <div className="card_height_100 mb_30">
                        <div className="white_card_header">
                            <div className="row align-items-center">
                                <div className="col">
                                    <div className="main-title">
                                    <a className="large_logo " href="index-2.html">
                                        <img className="max-width274" src="img/logo.svg" alt=""></img>
                                        </a>

                                        <h2 className="m-0">Welcome To TabSchool</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="white_card_header">
                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text background-trans">+91</div>
                                            </div>
                                            <input type="tel" className="form-control marl25" id="inlineFormInputGroup" placeholder="Phone Number" maxLength="10" ></input>
                                        </div>
                                        <div className="form-group mb-0">
                                <input type="password" className="form-control" name="inputPassword" id="inputPassword" placeholder="Password"></input>
                            </div>
                            <div className="space-between d-flex paddt15">
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" id="autoSizingCheck"></input>
                                            <label className="form-check-label" for="autoSizingCheck">
                                            Remember me
                                            </label>
                                        </div>
                                        <a data-target="#exampleModalLong3" data-toggle="modal" href="" className="default-color">Forgot Password ?</a>
                                    </div>
                                    
                        </div>
                        <div className="">
                        <button type="button" className="btn btn-danger rounded-pill width100" data-target="#exampleModalLong2" data-toggle="modal">Login</button>
                        </div>
                        
                    </div>
                </div>
                <LoginDetails></LoginDetails>
                <RecoverAccount></RecoverAccount>
                
         </div>
            </div>
            </div>
</>


    )}
    export default Login;