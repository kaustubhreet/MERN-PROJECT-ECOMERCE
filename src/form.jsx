import styled from 'styled-components';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import icon1 from '../src/quantum pics/icon1.png';
import icon2 from '../src/quantum pics/icon2.png';
import icon3 from '../src/quantum pics/icon3.png';
import contact from '../src/quantum pics/contact1.jpg';


const form=()=>{
	  
  
return(
<div className="container">
<div class="contact3 py-5">
  <div class="row no-gutters">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="card-shadow">
            <img src={contact} class="img-fluid"/>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="contact-box ml-3">
            <h1 class="font-weight-light mt-2"> Contact Us </h1>
            <form class="mt-4">
              <div class="row">
                <div class="col-lg-12">
                  <div class="form-group mt-2">
                    <input class="form-control" type="text" placeholder="name"/>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group mt-2">
                    <input class="form-control" type="email" placeholder="email address"/>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group mt-2">
                    <input class="form-control" type="text" placeholder="phone"/>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group mt-2">
                    <textarea class="form-control" rows="3" placeholder="message"></textarea>
                  </div>
                </div>
                <div class="col-lg-12">
                  <button type="submit" class="btn btn-danger-gradiant mt-3 text-white border-0 px-3 py-2"><span> SUBMIT</span></button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="card mt-4 border-0 mb-4">
            <div class="row">
              <div class="col-lg-4 col-md-4">
                <div class="card-body d-flex align-items-center c-detail pl-0">
                  <div class="mr-3 align-self-center">
                    <img src={icon1}/>
                  </div>
                  <div class="">
                    <h6 class="font-weight-medium">Address</h6>
                    <p class="">601 Sherwood Ave.
                      <br/>Burari <br/>Delhi-110084</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-4">
                <div class="card-body d-flex align-items-center c-detail">
                  <div class="mr-3 align-self-center">
                    <img src={icon2}/>
                  </div>
                  <div class="">
                    <h6 class="font-weight-medium">Phone</h6>
                    <p class="">+91 9262685542
                      <br/> 630 446 8851</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-4">
                <div class="card-body d-flex align-items-center c-detail">
                  <div class="mr-3 align-self-center">
                    <img src={icon3} />
                  </div>
                  <div class="">
                    <h6 class="font-weight-medium">Email</h6>
                    <p class="">
                      kaustubhreet.com
                      <br/> mishuyashu23@gmail.com
                    </p>
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
</div>

)
};
export default form;