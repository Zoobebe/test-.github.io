import React from 'react';

export function HomePage() {

    return <div>
        {/* Home banner starts here  */}
        <div id="homeBanner" className="carousel slide home-banner-height mb-1" data-bs-ride="carousel">
            <div className="carousel-indicators custom-carousel-indicators">
                <button type="button" data-bs-target="#homeBanner" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                <button type="button" data-bs-target="#homeBanner" data-bs-slide-to={1} aria-label="Slide 2" />
                <button type="button" data-bs-target="#homeBanner" data-bs-slide-to={2} aria-label="Slide 3" />
            </div>
            <div className="carousel-inner home-banner-height">
                <div className="carousel-item active home-banner-height" data-bs-interval={5000}>
                    <img src="images/hero-min.jpg" className="d-block img-fluid obj-fit-cover w-100 home-banner-height" alt="..." />
                    <div className="carousel-caption  custom-carousel-caption d-flex">
                        <h1 className="carousel-head">Customer Financing</h1>
                        <p className="banner-description font-regular">
                            <span className="d-block my-3">Canon Financial Services is dedicated to providing financing solutions that help
                                customers
                                acquire needed equipment with affordable payments.</span>
                            <span className="d-block my-4">We understand our markets and equipment, allowing us to provide customers with
                                an outstanding experience.</span>
                        </p>
                        <a href="#" className="header-button text-decoration-none my-4">LEARN MORE</a>
                    </div>
                </div>
                <div className="carousel-item home-banner-height" data-bs-interval={5000}>
                    <img src="images/dealer-financial -slider-img.jpg" className="d-block img-fluid obj-fit-cover  w-100 home-banner-height" alt="..." />
                    <div className="carousel-caption  custom-carousel-caption d-flex">
                        <h1 className="carousel-head">Dealer Financing</h1>
                        <p className="banner-description">
                            <span className="my-3 d-block">Our flexible financing programs help you keep up with dynamic customer
                                demand.</span>
                            <span className="my-3 d-block">We help dealers manage cash flow and secure necessary funds to acquire and
                                maintain inventory for current and future projects.</span>
                        </p>
                        <a href="#" className="header-button text-decoration-none my-4">LEARN MORE</a>
                    </div>
                </div>
                <div className="carousel-item home-banner-height" data-bs-interval={5000}>
                    <img src="images/inventory-financial-slider-img.jpg" className="d-block img-fluid obj-fit-cover  w-100 home-banner-height" alt="..." />
                    <div className="carousel-caption  custom-carousel-caption d-flex">
                        <h1 className="carousel-head">Inventory Financing</h1>
                        <p className="banner-description">
                            <span className="my-3 d-block">Our flexible financing programs help you keep up with dynamic customer demand.</span>
                            <span className="my-3 d-block">We help dealers manage cash flow and secure necessary funds to acquire and maintain inventory for current and future projects.</span>
                        </p>
                        <a href="#" className="header-button text-decoration-none my-4">LEARN MORE</a>
                    </div>
                </div>
            </div>
        </div>
        {/* Home banner ends here  */}
        {/* gradient banner starts  */}
        <div className="p-4 px-2 px-lg-5 primary-gradient-bg d-flex align-items-center justify-content-center "><div className="container">
            <p className="font-24 text-center secondary-color font-bold m-3 mx-0 mx-lg-5 banner-text home-banner-bottom-text">Canon Financial Services (CFS) provides financing solutions for businesses and local governments
                in the United States. We also extend competitive financing programs to manufacturers, distributors, and equipment
                dealers to help improve inventory levels and sales opportunities.</p></div>
        </div>
        {/* gradient banner ends  */}
        {/* Tab Section starts */}
        <div className="container">
            <h2 className="text-center mt-4 mt-lg-5 pt-3">THE CFS ADVANTAGE</h2>
            <div className="row justify-content-center mx-3">
                <div className="col-md-10">
                    <div className="nav nav-tabs justify-content-center custom-tabs flex-nowrap my-2 my-md-4 my-lg-4 pt-0 pt-lg-3" id="nav-tab" role="tablist">
                        <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#canon-connection" type="button" role="tab" aria-controls="canon-connection" aria-selected="true">Canon Connection</button>
                        <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#flexible-solutions" type="button" role="tab" aria-controls="flexible-solutions" aria-selected="false">Flexible Solutions</button>
                        <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#experienced-professionals" type="button" role="tab" aria-controls="experienced-professionals" aria-selected="false">Experienced Professionals</button>
                    </div>
                </div>
            </div>
            <div className="tab-content justify-content-center mx-4" id="nav-tabContent">
                <div className="tab-pane fade show active" id="canon-connection" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div className="row justify-content-center align-items-center py-4 py-lg-5 py-md-3 ps-lg-4">
                        <div className="col-12 col-md-6 col-lg-6 order-2 order-md-1">
                            <p className="font-20 custom-tab-content custom-sm-p-sec-font">
                                Canon Financial Services, Inc. is a wholly-owned subsidiary of Canon U.S.A., Inc.
                                <span className="d-block mt-3">CFS is a commercial finance company dedicated to providing competitive financing for Canon customers.</span>
                            </p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 text-center order-1 order-md-2">
                            <img src="images/canon-connection-image.jpg" alt="canon connection image" className="img-fluid" width={559} height={300} />
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="flexible-solutions" role="tabpanel" aria-labelledby="nav-profile-tab">
                    <div className="row justify-content-center align-items-center py-2 py-lg-5 ps-lg-4">
                        <div className="col-12 col-md-6 col-lg-6 order-2 order-md-1">
                            <p className="font-20 custom-tab-content custom-sm-p-sec-font">
                                We understand that every business has unique requirements when it comes to acquiring new equipment.
                                <span className="d-block mt-3">Whether you’re planning an upgrade to the latest technology or acquiring new equipment to satisfy
                                    business opportunities, our financing programs offer options to meet your evolving needs.</span>
                            </p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 text-end order-1 order-md-2">
                            <img src="images/flexible-solutions-image.jpg" alt="canon connection image" className="img-fluid" width={559} height={300} />
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="experienced-professionals" role="tabpanel" aria-labelledby="nav-contact-tab"><div className="row justify-content-center align-items-center py-2 py-lg-5 ps-lg-4">
                    <div className="col-12 col-md-6 col-lg-6 order-2 order-md-1">
                        <p className="font-20 custom-tab-content mb-4 pb-3 custom-sm-p-sec-font">
                            Our team of specialists are available to help you select the right financing plan to meet your specific needs.
                            <span className="d-block mt-3">With over 40 years of experience, CFS provides superior support that has allowed us to become a leading commercial financing source.</span>
                            <span className="d-block mt-3">Contact us today to learn more!</span>
                        </p>
                        <a href="#" className="header-button text-decoration-none">CONTACT US</a>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 text-end order-1 order-md-2">
                        <img src="images/experienced-professionals-image.jpg" alt="canon connection image" className="img-fluid" width={559} height={300} />
                    </div>
                </div></div>
            </div>
        </div>
        {/* Tab section ends  */}
        {/* industries we serve starts  */}
        <div className="container-fluid">
            <div className="row grey-bg mt-4 mb-5 align-items-center">
                <div className="col-md-6 order-2 order-md-1">
                    <div className="left-c-and-right-i-sec-spacing">
                        <div className="container">
                            <h2 className="mb-3 color-grey-5">Solutions for Your Industry</h2>
                            <p className="font-20 font-regular custom-sm-p-sec-font">
                                <span className="d-block mb-4">Canon Financial Services provides financing for all Canon products and also a wide variety of other equipment types including software.</span>
                                <span className="d-block mb-4"> Our financing solutions can be customized to meet your business needs.</span>
                                <button href="#" className="text-uppercase full-width-sm">Industries We Serve</button>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 px-0 order-1 order-md-1">
                    <img src="images/section-img.jpg" className="section-img w-100 custom-img-size" alt="section-img" />
                </div>
            </div>
        </div>
        {/* industries we serve ends  */}
    </div>
}