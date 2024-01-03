import React, { useState } from 'react';
import { sendEmail } from '../service/emailer';

export function ContactUs() {

    // Create a base object with the input field names
    const formObj = {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        businessName: "",
        businessWebsite: "",
        message: "",
        termsConditions: false
    }

    // Create state variables
    const [formData, setFormData] = useState(formObj);
    const [enableContactUsButton, setEnableContactUsButton] = useState(true);


    const checkButtonStat = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (formData.firstName?.length > 4 && formData.lastName?.length > 4 && formData.phoneNumber?.length > 10 && formData.message?.length > 3 && emailRegex.test(formData.email)) {
            setEnableContactUsButton(false);
        } else setEnableContactUsButton(true);
    }

    // Update the values into the state
    const handleOnChange = (e) => {
        if (e.target.id === "termsConditions") {
            setFormData({ ...formData, [e.target.id]: e.target.checked });
        } else if (e.target.id === "phoneNumber" && (/^[0-9\s]+$/.test(e.target.value) || e.target.value === "")) {
            setFormData({ ...formData, [e.target.id]: e.target.value });
        } else if (e.target.id !== "phoneNumber") {
            setFormData({ ...formData, [e.target.id]: e.target.value });
        }
        checkButtonStat()
    }

    // Validating inputs and trigger email
    const onContactUsClick = async () => {
        await sendEmail(formData);
    }

    return <div>
        {/* gradient banner starts  */}
        <div className="text-banner primary-gradient-bg d-flex align-items-center justify-content-center ">
            <h1 className="font-60 text-center">GET CONNECTED</h1>
        </div>
        {/* gradient banner ends  */}
        {/* contact form starts here  */}
        <div className="container mb-5 pb-3">
            <div className="row justify-content-center px-4 px-md-0">
                <h2 className="text-center mt-5 pt-4 mb-5 text-uppercase grey-color-v1">Our team is here to help - Contact us today!
                </h2>
                <div className="mb-4 col-md-5">
                    <label htmlFor="firstName" className="form-label font-16 font-bold">First Name:*</label>
                    <input type="text" className="form-control custom-form " id="firstName" placeholder="Enter First Name" onChange={handleOnChange} value={formData.firstName} />
                </div>
                <div className="mb-4 col-md-5">
                    <label htmlFor="lastName" className="form-label font-16 font-bold">Last Name:*</label>
                    <input type="text" className="form-control custom-form " id="lastName" placeholder="Enter Last Name" onChange={handleOnChange} value={formData.lastName} />
                </div>
                <div className="mb-4 col-md-5">
                    <label htmlFor="email" className="form-label font-16 font-bold">Email:*</label>
                    <input type="email" className="form-control custom-form " id="email" placeholder="Enter Email" onChange={handleOnChange} value={formData.email} />
                </div>
                <div className="mb-4 col-md-5">
                    <label htmlFor="phoneNumber" className="form-label font-16 font-bold">Phone Number:*</label>
                    <input type="text" className="form-control custom-form " id="phoneNumber" placeholder="Enter Phone Number" onChange={handleOnChange} value={formData.phoneNumber} />
                </div>
                <div className="mb-4 col-md-5">
                    <label htmlFor="businessName" className="form-label font-16 font-bold">Business Name:</label>
                    <input type="text" className="form-control custom-form " id="businessName" placeholder="Enter Business Name" onChange={handleOnChange} value={formData.businessName} />
                </div>
                <div className="mb-4 col-md-5">
                    <label htmlFor="businessWebsite" className="form-label font-16 font-bold">Business Website:</label>
                    <input type="text" className="form-control custom-form " id="businessWebsite" placeholder="Enter Business Website" onChange={handleOnChange} value={formData.businessWebsite} />
                </div>
                <div className="mb-4 mb-md-5 col-md-10">
                    <label htmlFor="message" className="form-label font-16 font-bold">Message:*</label>
                    <input type="text" className="form-control custom-form " id="message" placeholder="Enter Message" onChange={handleOnChange} value={formData.message} />
                </div>
                <div className="mb-4 col-md-10">
                    <div className="d-grid justify-content-md-between d-md-flex  align-items-center">
                        <div className="mb-3 form-check d-flex align-items-center gap-2">
                            <input type="checkbox" className="form-check-input custom-check rounded-0 " id="termsConditions" onChange={handleOnChange} />
                            <label className="form-check-label pt-1 font-16 font-regular" htmlFor="termsConditions">I agree to the <a href="#" className="text-decoration-none">Terms of Use</a></label>
                        </div>
                        <button type="submit" className={`header-button border-0 px-5 ${enableContactUsButton ? "button-disable" : ""}`} onClick={() => { onContactUsClick() }} disabled={enableContactUsButton}>Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
        {/* contact form ends here  */}
        {/* recognized banner starts here */}
        <div className="grey-bg w-100">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-3">
                        <div className="d-flex justify-content-center">
                            <img src="images/monitor-badge.svg" alt="monitor-badge" className="mb-2 pb-1" />
                        </div>
                    </div>
                    <div className="col-md-5 my-5 my-lg-0 ms-md-5 ms-lg-0  text-center text-md-start text-lg-start">
                        <h3 className="mb-4 pb-2">Proud to be recognized</h3>
                        <p className="font-16">Offering a variety of financing plans to help customers acquire the equipment, systems, and
                            software needed to drive future innovation and business profits.</p>
                    </div>
                </div>
            </div>
        </div>
        {/* recognized banner ends here */}
        {/* linked post starts here */}
        <div className="container mb-3 pb-3">
            <div className="row justify-content-center px-4 px-md-0">
                <h2 className="text-center mt-5 pt-4 mb-5 text-uppercase grey-color-v1">Stay connected with Canon financial services
                </h2>
                <div className="mb-4 col-md-10">
                    <div className="linkedin-post  grey-bg">
                        {/* add linked in package here  */}
                    </div>
                </div>
            </div>
        </div>
        {/* linked post ends here */}
        {/* extra help starts here */}
        <div className="container mb-4 pb-3">
            <div className="row justify-content-center px-4 px-md-0">
                <h2 className="text-center mb-5 pb-5 text-uppercase grey-color-v1">Need Some Extra Help? Contact Customer Support!
                </h2>
                <div className="mb-4 col-md-10">
                    <div className="row align-items-center">
                        <div className="mb-4 col-md-3">
                            <div className="d-flex align-items-center gap-3">
                                <span><img src="images/home-icon.svg" alt="home-icon" /></span>
                                <span className="font-16 font-regular">158 Gaither Drive,
                                    Mount Laurel, NJ 08054</span>
                            </div>
                        </div>
                        <div className="mb-4 col-md-3">
                            <div className="d-flex align-items-center gap-3">
                                <span><img src="images/mail.svg" alt="home-icon" /></span>
                                <span className="font-16 font-regular">customer@cfs<span className="md-line-breaker">.canon.com</span></span>
                            </div>
                        </div>
                        <div className="mb-4 col-md-3">
                            <div className="d-flex align-items-center gap-3">
                                <span><img src="images/call-icon.svg" alt="home-icon" /></span>
                                <span className="font-16 font-regular">(800) 220-0330</span>
                            </div>
                        </div>
                        <div className="mb-4 col-md-3">
                            <div className="d-flex align-items-center gap-3">
                                <span><img src="images/faq-icon.svg" alt="home-icon" /></span>
                                <span className="font-16 font-regular">Frequently Asked Questions</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* extra help ends here */}
        {/* gradient band starts  */}
        <div className="w-100 primary-gradient-bg p-3 contact-cta-sm">
            <p className="font-18 font-regular secondary-color text-center mb-0">
                <span className="font-bold mb-3 mb-md-0">GO GREEN with Canon.</span> <span>Choose Paperless BiIlling and Pay Online
                    Today!</span>
                <button className="primary-outline-btn font-bold font-16 text-uppercase ms-4 mt-4 mt-lg-0">
                    Make a Payment
                </button>
            </p>
        </div>
        {/* gradient band ends  */}
    </div>
}