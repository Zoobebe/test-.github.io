import React from 'react';

export function Footer() {
    return (
        <footer>
            <div className="container-fluid pb-4 pt-5 grey-bg">
                <div className="custom-container">
                    <div className="row">
                        <div className="col-12 col-md-8 col-md-8">
                            <div className="row">
                                <div className="col-12 col-lg-4 col-md-4">
                                    <p className="footer-heading ">
                                        COMPANY
                                    </p>
                                    <ul className="cfs-list">
                                        <li>
                                            <a href="/AboutUs">About Canon Financial Services, Inc.</a>
                                        </li>
                                        <li>
                                            <a href="#">Our Services</a>
                                        </li>
                                        <li>
                                            <a href="/Careers">Careers</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6 col-lg-4 col-md-4">
                                    <p className="footer-heading">
                                        CONTACT
                                    </p>
                                    <ul className="cfs-list">
                                        <li>
                                            <a href="/ContactUs">Contact Us</a>
                                        </li>
                                        <li>
                                            <a href="#" className="align-middle">Linked in <img src="images/linked-in-icon.svg" alt="Linked in icon" width={10} height={10} className="linked-icon" /></a>
                                        </li>
                                        <li>
                                            <a href="/Faq">FAQ</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6 col-lg-4 col-md-4">
                                    <p className="footer-heading">
                                        LEGAL
                                    </p>
                                    <ul className="cfs-list">
                                        <li>
                                            <a href="/PrivacyStatement">Privacy Statement</a>
                                        </li>
                                        <li>
                                            <a href="/PrivacyRights">Your Privacy Rights</a>
                                        </li>
                                        <li>
                                            <a href="/Termsofuse">Terms of Use</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-12 font-12">
                                    All transactions are subject to credit approval and acceptance of all required documentation by Canon Financial Services, Inc.
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-4 address-details">
                            <p className="font-12 font-regular">
                                Canon Financial Services, Inc. (”CFS”) is a wholly-owned subsidiary
                                of Canon U.S.A., Inc. Founded in 1979, our headquarters is in
                                Mount Laurel, New Jersey.
                            </p>
                            <p className="font-12 font-regular">
                                158 Gaither Drive, Mount Laurel, New Jersey 08054
                            </p>
                            <p className="font-12 font-regular">
                                © All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
}