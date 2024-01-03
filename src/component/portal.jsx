import React from 'react';

export function Portal() {

    return <div className="container-fluid">
        <div className="row grey-bg portal-mobile-bg mb-0 mb-lg-5">
            <div className="col-md-12 col-lg-6 px-0 order-1 order-md-1">
                <img src="images/portal-banner-img.png" className="portal-banner-img w-100 object-fit-cover" alt="section-img" />
            </div>
            <div className="col-md-12 col-lg-6 order-2 order-md-1">
                <div className="portal-banner-right-section">
                    <h2 className="mb-4 mt-5">Stay Connected</h2>
                    <p className="font-20 font-regular custom-sm-p-sec-font">
                        <span className="d-block mb-4">We understand how important it is to be connected and to have access to your
                            account information at any time.</span>
                        <span className="d-block mb-4"><b>Our Customer Portal</b> provides 24/7 access for customers to view their
                            account, securely make payments online, and more.</span>
                    </p><div className="portal-sm-btn">
                        <button href="#" className="text-uppercase">Customer Portal</button>
                    </div>
                    <p />
                    <p className="font-20 font-regular custom-sm-p-sec-font">
                        <span className="d-block mb-4 mt-4"><b>Our Dealer Portal</b> enables real time application processing and shares
                            a secure, up-to-date view to your lease portfolio.</span>
                    </p>
                    <div className="portal-sm-btn">
                        <button href="#" className="text-uppercase mb-4 mb-lg-5">Dealer Portal</button>
                    </div>
                </div>
            </div>
        </div>
    </div >
}