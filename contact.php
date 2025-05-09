<?php $title = "Contact Us | Digitally Bridging Borders, Enhancing Global Presence | The Web Mastro";
include('include/header.php'); ?>
<!-- Hero Section -->


<div class="heroSec heroInner aboutHero">
    <div class="text">Web Master</div>
    <div class="container">
        <div class="row ">
            <div class="col-lg-6 col-md-7 mx-auto">
                <div class="heroTxt text-center">

                    <p class="small-text">Not sure how to choose a vendor? </p>
                    <h1 class="mb-lg-4 mb-md-3">Contact
                        <span class="blue">Us</span>.</h1>
                    <p class="mt-sm-3 mt-xs-4">Our Developers Have Hacked the Code of <br>
                        Success for Your Website</p>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- !@Hero  Section -->

<section class="contactSection noise">
    <div class="text">Here's the Ticket to Get to Us.</div>
    <div class="container">
        <div class="row ">
            <div class="col-xl-4 col-lg-5 mb-lg-0 mb-md-4 mb-3 ">
                <p>Brew a cup and grab a seat...</p>
                <h2 class="heading text-white text-left">Here's the
                    <span class="blue">Ticket</span> to Get
                    <span class="blue">to Us.</span>

                </h2>
            </div>
            <div class="col-xl-5 col-lg-6 mx-auto" data-form-type="signup_form">
                <form class="contactForm leadForm" method="post" enctype="multipart/form-data"
                    action="javascript:void(0)">
                    <input type="hidden" name="_token" value="jFEMh67AdaJI9dOLUpxSrrVBiyWI99gW01uZBPM8">
                    <!--hidden required values-->
                    <input type="hidden" id="formType" name="formType">
                    <input type="hidden" id="referer" name="referer">
                    <div class="row">
                        <div class="col-12">
                            <input type="text" class="form-control" placeholder="Enter Your Name" name="name"
                                data-validation="required">
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="Enter Email" name="email"
                                data-validation="required">
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="Enter Phone Number" name="phone"
                                data-validation="required">
                        </div>
                        <div class="col-md-6">
                            <select class="form-control" name="budget" placeholder="customers_meta[budget]"
                                data-validation="required">
                                <option value="Budget" class="disabled selected">Budget</option>
                                <option value="">100000</option>
                                <option value="">200000</option>
                            </select>
                        </div>
                        <div class="col-md-6">
                            <select class="pr-2 form-control " name="customers_meta[sevice]" placeholder="Services"
                                data-validation="required">
                                <option value="Services" class="disabled selected">Services</option>
                                <option value="Web Development">Web Development</option>
                                <option value="Video Animation">Video Animation</option>
                                <option value="Seo">Seo</option>
                                <option value="Mobile Application">Mobile Application</option>
                                <option value="Marketing Collateral">Marketing Collateral</option>
                                <option value="Logo Design">Logo Design</option>
                                <option value="Ecommerce">Ecommerce</option>
                                <option value="Digital Marketing">Digital Marketing</option>
                                <option value="Crm">Crm</option>
                                <option value="Creative Copywriting">Creative Copywriting</option>

                            </select>
                        </div>
                        <div class="col-12">
                            <textarea rows="7" class="form-control" placeholder="Message" name="customers_meta[message]"
                                data-validation="required"></textarea>
                        </div>
                        <div class="col-12 text-center">
                            <button class="btn themeBtn" id="submit-btn" type="submit" value="Submit">Submit Now
                                <i class="fas fa-arrow-right"></i></button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    </div>
</section>

<?php include('include/footer.php'); ?>