
import React from 'react';

export function Industries() {

    return <div>
        <div className="container-fluid position-relative px-0 industry-banner">
            <div className>
                <img src="images/Industry banner image.jpg" className="img-fluid w-100 object-fit-cover" alt="..." />
            </div>
            <div className="container text-center banner-content-overlap position-absolute top-50 start-50 translate-middle">
                <h1 className="heading-secondary-size">Solutions For Your Industry</h1>
                <span className="d-block mb-4 banner-description">Canon Financial Services provides financing for all Canon products
                    and also a wide variety of other equipment types including software.
                    Working across many different industries has given us the experience to develop systems and processes that make
                    it quick and easy for business customers to
                    acquire new or used equipment.</span>
                <span className="d-block mb-4 banner-description">CFS partners with manufacturers, distributors, and dealers to
                    provide access to capital.</span>
            </div>
        </div>
        <div className="container-fluid industries-card-section">
            <div className="container pt-5 pb-5 mb-2">
                <div className="row">
                    <div className="industry-sd col-12 pt-5 pb-4 mb-4 text-center grey-color-v1">
                        <h2>INDUSTRIES WE SERVE</h2>
                    </div>
                </div>
                <div className="d-flex flex-wrap flex-md-nowrap gap-lg-5 gap-4 justify-content-center">
                    <div className="industry-card">
                        <div className="card rounded-0" style={{ width: '100%' }}>
                            <img src="images/Printing - industry page.jpg" className="card-img-top rounded-0" alt="Printing machine" />
                            <div className="card-body pt-4 pb-4">
                                <h5 className="card-title text-center font-bold font-24 primary-color">Printing</h5>
                            </div>
                        </div>
                    </div>
                    <div className="industry-card">
                        <div className="card rounded-0" style={{ width: '100%' }}>
                            <img src="images/Tech-Software - industrypage.jpg" className="card-img-top rounded-0" alt="technology and software" />
                            <div className="card-body pt-4 pb-4">
                                <h5 className="card-title text-center font-bold font-24 primary-color">Technology and Software</h5>
                            </div>
                        </div>
                    </div>
                    <div className="industry-card">
                        <div className="card rounded-0" style={{ width: '100%' }}>
                            <img src="images/Healthcare - industry page.jpg" className="card-img-top rounded-0" alt="Healthcare machine" />
                            <div className="card-body pt-4 pb-4">
                                <h5 className="card-title text-center font-bold font-24 primary-color">Healthcare</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-wrap flex-md-nowrap gap-lg-5 gap-4 justify-content-center pt-2 mt-4">
                    <div className="industry-card">
                        <div className="card rounded-0" style={{ width: '100%' }}>
                            <img src="images/MatHandling - industry page.jpg" className="card-img-top rounded-0" alt="Material Handling" />
                            <div className="card-body pt-4 pb-4">
                                <h5 className="card-title text-center font-bold font-24 primary-color">Material<br />Handling</h5>
                            </div>
                        </div>
                    </div>
                    <div className="industry-card">
                        <div className="card rounded-0" style={{ width: '100%' }}>
                            <img src="images/Manufacturing - industry page.jpg" className="card-img-top rounded-0" alt="Manufacturing" />
                            <div className="card-body pt-4 pb-4">
                                <h5 className="card-title text-center font-bold font-24 primary-color">Manufacturing</h5>
                            </div>
                        </div>
                    </div>
                    <div className="industry-card">
                        <div className="card rounded-0" style={{ width: '100%' }}>
                            <img src="images/Construction - industry page.jpg" className="card-img-top rounded-0" alt="Construction" />
                            <div className="card-body pt-4 pb-4">
                                <h5 className="card-title text-center font-bold font-24 primary-color">Construction</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Industry CTA starts here  */}
        <div className="cta-banner primary-gradient-bg text-center">
            <div className="cta-custom-width">
                <p className="font-34 secondary-color font-bold pt-5">WE SUPPORT YOUR INDUSTRY</p>
                <span className="d-block mb-4 banner-description">CFS provides financing solutions for various different markets and
                    industries. Contact us today to learn more about our programs for your business needs.</span>
                <button className="primary-outline-btn font-bold font-16 text-uppercase mt-2 px-sm-4">
                    CONTACT US</button>
            </div>
        </div>
        {/* Industry CTA ends here  */}
    </div>
}