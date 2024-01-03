import React from 'react';

export function Faq() {

    return <div>
        {/* Faq banner starts */}
        <div className="position-relative align-self-center">
            <img className="object-fit-cover w-100 banner-height" src="images/FAQ banner image.jpg" />
            <div className=" position-absolute top-50 translate-middle-y banner-text-career text-center">
                <h1 className="font-60">Frequently Asked
                    <span className="d-block">Questions</span>
                </h1>
            </div>
        </div>
        {/* Faq banner Ends */}
        {/* Faq Accordion starts */}
        <div id="accordion" className="container mt-5 mb-5 pb-3 pt-3 px-5 px-lg-0">
            <div className="w-100 d-flex justify-content-end">
                <span className="cursor-pointer expand-all d-block font-16 font-bold color-navy mb-1" id="collapseBtn">EXPAND
                    ALL</span>
            </div>
            {/* question1 starts  */}
            <div className="py-4 border-top border-bottom">
                <p className="d-flex justify-content-between align-items-center cursor-pointer font-bold font-20 custom-acc collapsed-para mb-0 banner-text" id="question" data-bs-toggle="collapse" data-bs-target="#question1">
                    <span>How is Canon Financial Services related to Canon?</span><img className="custom-accordion-arrow" src="images/custom-accordion-arrow.svg" alt="accordion-arrow" />
                </p>
                <div className="collapse collapse-content show" id="question1">
                    <p className="font-16 font-regular mb-0 mt-3">
                        Canon Financial Services (CFS) is a wholly owned subsidiary of Canon USA. We offer financing for Business to
                        Business (B2B) customers which includes commercial businesses and State and Local government municipal
                        entities.
                    </p>
                </div>
            </div>
            {/* question1 ends  */}
            {/* question2 starts  */}
            <div className="py-4 border-top border-bottom">
                <p className="d-flex justify-content-between align-items-center cursor-pointer font-bold font-20 custom-acc collapsed-para collapsed mb-0 banner-text" data-bs-toggle="collapse" data-bs-target="#question2">
                    <span>How do I make a payment?</span><img className="custom-accordion-arrow" src="images/custom-accordion-arrow.svg" alt="accordion-arrow" />
                </p>
                <div className="collapse collapse-content" id="question2">
                    <p className="font-16 font-regular mb-0 mt-3">
                        You can make a payment by going to our online portal here or by calling customer service toll-free at (800)
                        220-0330. If paying by phone, please have your payment details and invoice number ready.
                    </p>
                </div>
            </div>
            {/* question2 ends  */}
            {/* question3 starts  */}
            <div className="py-4 border-top border-bottom">
                <p className="d-flex justify-content-between align-items-center cursor-pointer font-bold font-20 custom-acc collapsed-para collapsed mb-0 banner-text" data-bs-toggle="collapse" data-bs-target="#question3">
                    <span>How do I apply for financing?</span><img className="custom-accordion-arrow" src="images/custom-accordion-arrow.svg" alt="accordion-arrow" />
                </p>
                <div className="collapse collapse-content" id="question3">
                    <p className="font-16 font-regular mb-0 mt-3">
                        Canon Financial Services (CFS) is a wholly owned subsidiary of Canon USA. We offer financing for Business to
                        Business (B2B) customers which includes commercial businesses and State and Local government municipal
                        entities.
                    </p>
                </div>
            </div>
            {/* question3 ends  */}
            {/* question4 starts  */}
            <div className="py-4 border-top border-bottom">
                <p className="d-flex justify-content-between align-items-center cursor-pointer font-bold font-20 custom-acc collapsed-para collapsed mb-0 banner-text" data-bs-toggle="collapse" data-bs-target="#question4">
                    <span>What types of financing options are available?</span><img className="custom-accordion-arrow" src="images/custom-accordion-arrow.svg" alt="accordion-arrow" />
                </p>
                <div className="collapse collapse-content" id="question4">
                    <p className="font-16 font-regular mb-0 mt-3">
                        We offer equipment financing for customers. This includes new equipment, systems, and software. Please visit
                        our customer financing page for more information.
                        For dealers, we offer inventory financing options so you can fill your warehouse or process that large order.
                        Please visit our inventory financing page for more information.
                    </p>
                </div>
            </div>
            {/* question4 ends  */}
            {/* question5 starts  */}
            <div className="py-4 border-top border-bottom">
                <p className="d-flex justify-content-between align-items-center cursor-pointer font-bold font-20 custom-acc collapsed-para collapsed mb-0 banner-text" data-bs-toggle="collapse" data-bs-target="#question5">
                    <span>What equipment types can I finance through Canon Financial Services?</span><img className="custom-accordion-arrow" src="images/custom-accordion-arrow.svg" alt="accordion-arrow" />
                </p>
                <div className="collapse collapse-content" id="question5">
                    <p className="font-16 font-regular mb-0 mt-3">
                        We offer financing for a wide variety of equipment for manufacturers, dealers, distributors, and customers.
                        This includes, but is not limited to medical devices, copiers, printers, software, industrial equipment, and
                        so much more. Please visit our industries page for more information.
                    </p>
                </div>
            </div>
            {/* question5 ends  */}
            {/* question6 starts  */}
            <div className="py-4 border-top border-bottom">
                <p className="d-flex justify-content-between align-items-center cursor-pointer font-bold font-20 custom-acc collapsed-para collapsed mb-0 banner-text" data-bs-toggle="collapse" data-bs-target="#question6">
                    <span>How do I get in touch with someone to assist with Inventory Finance?</span><img className="custom-accordion-arrow" src="images/custom-accordion-arrow.svg" alt="accordion-arrow" />
                </p>
                <div className="collapse collapse-content" id="question6">
                    <p className="font-16 font-regular mb-0 mt-3">
                        If you are interested in our inventory financing services, please reach out to our representatives by emailing
                        InventoryFinance@cfs.canon.com or by calling (888) 220-1636. Additionally, you can find more information about
                        our Inventory finance services on our inventory financing page.
                    </p>
                </div>
            </div>
            {/* question6 ends  */}
            {/* question7 starts  */}
            <div className="py-4 border-top border-bottom">
                <p className="d-flex justify-content-between align-items-center cursor-pointer font-bold font-20 custom-acc collapsed-para collapsed mb-0 banner-text" data-bs-toggle="collapse" data-bs-target="#question7">
                    <span>How will I receive my invoices?</span><img className="custom-accordion-arrow" src="images/custom-accordion-arrow.svg" alt="accordion-arrow" />
                </p>
                <div className="collapse collapse-content" id="question7">
                    <p className="font-16 font-regular mb-0 mt-3">
                        You will receive your invoices in one of two ways. You can select which way by accessing the online customer
                        portal.
                        If you select electronic invoicing, we will send you your monthly invoice via email. Otherwise, you will
                        receive your invoice via standard mail invoicing.
                    </p>
                </div>
            </div>
            {/* question7 ends  */}
        </div>
        {/* Faq Accordion Ends */}
    </div>
}