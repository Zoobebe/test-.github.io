import React from 'react';

export function AboutUs() {

    return <div>
        {/* about us banner starts here  */}
        <div className="text-banner primary-gradient-bg d-flex align-items-center justify-content-center position-relative">
            <h1 className="font-60 text-center">ABOUT US</h1>
            <img src="images/about-us-banner-text.svg" alt="symbiosis" className="position-absolute top-50 end-0 translate-middle-y d-none d-lg-block right-47" />
        </div>
        {/* about us banner ends here  */}
        <div className="container">
            {/* breadcrumbs start */}
            {/* <nav aria-label="breadcrumb" class="mt-4 mb-5">
<ol class="breadcrumb font-regular font-12">
<li class="breadcrumb-item"><a href="#">About</a></li>
<li class="breadcrumb-item active" aria-current="page">About Us</li>
</ol>
  </nav> */}
            {/* breadcrumbs end */}
            {/* Our Mission and Vision start */}
            <div className="row d-flex justify-content-center">
                <div className="col-12">
                    <p className="font-regular font-16 my-5">Canon Financial Services, Inc. (“CFS”) is a wholly-owned subsidiary of
                        Canon U.S.A., Inc. Founded in 1979, our headquarters are located in Mount Laurel, New Jersey. We offer
                        financing for manufacturers, dealers, and customers.</p>
                </div>
                <div className="row flex-lg-nowrap">
                    <div className="col-lg-6 mb-5 pb-3">
                        <div className="card grey-bg border-0 border-end mission-vision-cards">
                            <div className="card-body mx-1 mb-1">
                                <p className="font-bold d-flex font-20 justify-content-center color-navy">Our Mission</p>
                                <span className="font-regular font-16 primary-color">Our mission is to be a continuously evolving organization
                                    that builds meaningful partnerships while providing creative financial solutions. We strive to stimulate
                                    growth and maximize profitability, all while upholding responsible and ethical business
                                    practices.</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-5 pb-3">
                        <div className="card grey-bg border-0 mission-vision-cards ">
                            <div className="card-body mx-1 mb-1">
                                <p className="font-bold d-flex font-20 justify-content-center color-navy">Our Vision</p>
                                <span className="font-regular font-16 primary-color">Our vision is to be the standard of excellence in our
                                    industry while fostering an environment of integrity, employee empowerment, diversity and
                                    inclusion.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Our Mission and Vision end */}
            {/* Our Core Values start */}
            <div className="row d-flex justify-content-center">
                <h2 className="d-flex justify-content-center mb-4 pb-2 grey-color-v1">Our Core Values</h2>
                <div className="row justify-content-center">
                    <div className="col-lg-4 px-2 mb-4 pb-2">
                        <div className="card rounded-0 border-0 border-end align-items-center my-4 core-values-card pe-4">
                            <img src="images/ic_caring.svg" className="card-img-top" alt="caring-hands" />
                            <div className="card-body d-flex justify-content-center flex-wrap primary-color">
                                <span className="font-bold font-20 mb-1">Caring</span>
                                <p className="card-text text-center">We care about the whole person and creating a healthy work/life balance.
                                    We embrace the diversity that exists in the world.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 px-2 mb-4 pb-2">
                        <div className="card border-0 align-items-center my-4 core-values-card">
                            <img src="images/ic_trust.svg" className="card-img-top" alt="caring-hands" />
                            <div className="card-body d-flex justify-content-center flex-wrap primary-color">
                                <span className="font-bold font-20 mb-1">Trust</span>
                                <p className="card-text text-center">We have a mutual understanding that we do the right thing, honor our
                                    commitments, and be professional.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center flex-lg-nowrap">
                    <div className="col-lg-4 px-2 mb-4 pb-2">
                        <div className="card rounded-0 border-0 border-end pe-4 align-items-center my-4 core-values-card">
                            <img src="images/ic_integrity.svg" className="card-img-top" alt="caring-hands" />
                            <div className="card-body d-flex justify-content-center flex-wrap primary-color px-4">
                                <span className="font-bold font-20 mb-1">Integrity</span>
                                <p className="card-text text-center">We act in an honest, responsible manner and are accountable for all our
                                    actions.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 px-2 mb-4 pb-2">
                        <div className="card rounded-0 border-0 border-end pe-4 align-items-center my-4 core-values-card">
                            <img src="images/ic_commitment.svg" className="card-img-top" alt="caring-hands" />
                            <div className="card-body d-flex justify-content-center flex-wrap primary-color">
                                <span className="font-bold font-20 mb-1">Commitment</span>
                                <p className="card-text text-center">We are dedicated to achieving common goals between individuals, team,
                                    dealers, and customers.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 px-2 mb-4 pb-2">
                        <div className="card rounded-0 border-0 pe-4 align-items-center my-4 core-values-card">
                            <img src="images/ic_communication.svg" className="card-img-top" alt="caring-hands" />
                            <div className="card-body d-flex justify-content-center flex-wrap primary-color">
                                <span className="font-bold font-20 mb-1">Communication</span>
                                <p className="card-text text-center">We create a proactive environment that fosters open, timely and honest
                                    dialogue.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center mb-2">
                    <div className="col-lg-4 px-2 mb-4 pb-2">
                        <div className="card rounded-0 border-0 border-end pe-4 align-items-center my-4 core-values-card">
                            <img src="images/ic_excellence.svg" className="card-img-top" alt="caring-hands" />
                            <div className="card-body d-flex justify-content-center flex-wrap primary-color">
                                <span className="font-bold font-20 mb-1">Excellence</span>
                                <p className="card-text text-center">We exceed expectations in all we do each and every day. We constantly
                                    learn how to improve and develop ourselves.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 px-2 mb-4 pb-2">
                        <div className="card rounded-0 border-0 pe-4 align-items-center my-4 core-values-card">
                            <img src="images/ic_respect.svg" className="card-img-top" alt="caring-hands" />
                            <div className="card-body d-flex justify-content-center flex-wrap primary-color">
                                <span className="font-bold font-20 mb-1">Respect</span>
                                <p className="card-text text-center">We treat everyone with dignity, assume a positive spirit of intent, and
                                    are open to alternative viewpoints.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Our Core Values end */}
            {/* The Spirit of Kyosei start */}
            <div className="row d-flex align-items-start">
                <h2 className="text-uppercase text-center pt-5 mt-3 mb-4 pb-3 custom-top-border">The Spirit of Kyosei</h2>
                <div className="col-lg-6 pt-1 flex-lg-nowrap">
                    <p className="pb-4 mb-2 pt-2">Canon's corporate philosophy is the concept of Kyosei or the spirit of cooperation. As
                        a combination of the Japanese words kyō (共, together) and sei (生, life), it represents a sense of duty and
                        togetherness that guides us.</p>
                    <p className="pb-4 mb-2">We define Kyosei as our dedication to seeing all people, regardless of culture, customs,
                        language or race, harmoniously living and working together in happiness into the future.</p>
                    <p className="pb-4 mb-2">Canon is proud of its long and unwavering tradition of protecting and preserving our most
                        precious resources - the world we share. We work to harmonize environmental commitment and economic interests
                        in all our business activities. We believe this balance is essential to sustain prosperity for future
                        generations.</p>
                </div>
                <div className="col-lg-6 flex-lg-nowrap">
                    <div className="card grey-bg border-0 p-4 spirit-card">
                        <div className="card-body p-0 mx-2">
                            <div className="row d-flex flex-md-nowrap">
                                <div className="col-md-8">
                                    <p className="font-bold font-24 m-0">The San-ji Spirit</p>
                                    <p className="font-bold font-20 mb-3">The Three Selfs of Canon</p>
                                </div>
                                <div className="col-md-4 mb-3 m-md-0">
                                    <img src="images/The San-ji Spirit.svg" alt="The San-ji Spirit" className />
                                </div>
                            </div>
                            <p className="pb-4 mb-2">The Three Selfs, the foundation of the company’s guiding principles that have been
                                passed down since Canon was founded, are self-motivation, self-management, and self-awareness.</p>
                            <p className="m-0 pb-1">For Canon, which strives to be a truly excellent global corporation while maintaining
                                the legacy of its corporate DNA, the Three Selfs continue to serve as the company’s most important guiding
                                principles.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* The Spirit of Kyosei end */}
            {/* Our Core Values start */}
            <div className="row d-flex justify-content-center">
                <div className="row justify-content-center flex-lg-nowrap">
                    <div className="col-lg-4 px-2 mb-4 pb-2">
                        <div className="card rounded-0 border-0 border-end pe-4 align-items-center my-4 core-values-card">
                            <img src="images/ic_smotivation.svg" className="card-img-top" alt="caring-hands" />
                            <div className="card-body d-flex justify-content-center flex-wrap primary-color px-4">
                                <span className="font-bold font-20 mb-1">Self-Motivation</span>
                                <p className="card-text text-center">Take the initiative and be proactive in all things.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 px-2 mb-4 pb-2">
                        <div className="card rounded-0 border-0 border-end pe-4 align-items-center my-4 core-values-card">
                            <img src="images/ic_smanagement.svg" className="card-img-top" alt="caring-hands" />
                            <div className="card-body d-flex justify-content-center flex-wrap primary-color">
                                <span className="font-bold font-20 mb-1">Self-Management</span>
                                <p className="card-text text-center">Conduct oneself with responsibility and accountability.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 px-2 mb-4 pb-2">
                        <div className="card rounded-0 border-0 pe-4 align-items-center my-4 core-values-card">
                            <img src="images/ic_sawareness.svg" className="card-img-top" alt="caring-hands" />
                            <div className="card-body d-flex justify-content-center flex-wrap primary-color">
                                <span className="font-bold font-20 mb-1">Self-Motivation</span>
                                <p className="card-text text-center">Understand one’s situation and role in all situations.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Our Core Values end */}
            {/* CTA */}
        </div>
        <div className="cta-banner primary-gradient-bg text-center">
            <div className="cta-custom-width">
                <p className="font-34 secondary-color font-bold pt-5 text-uppercase">Join the Canon Financial Services Team!</p>
                <span className="d-block mb-4 banner-description">Want to join the way of Kyosei? Canon USA and it's subsidiaries like
                    us are always looking for excellent and skilled talent. Learn what its like to be part of #TEAMCANON.</span>
                <button className="primary-outline-btn font-bold font-16 text-uppercase mt-2 text-uppercase">View Current
                    Opportunities</button>
            </div>
        </div>
    </div>
}