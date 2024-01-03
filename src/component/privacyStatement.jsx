import React from 'react';

export function PrivacyStatement() {
    return <>
        {/* Privary right banner starts here */}
        <div className="text-banner primary-gradient-bg d-flex align-items-center justify-content-center ">
            <h1 className="font-60 text-center">PRIVACY STATEMENT</h1>
        </div>
        {/* Privary right banner ends here */}
        <div className="container">
            <p className="mt-5 pb-2 font-16">
                This Privacy Statement and Notice at Collection applies to CFS job
                applicants, former employees and B2B business users of the CFS website and
                any websites that link to this Privacy Statement.
            </p>
            <p className="font-16">
                This Canon Financial Services Privacy Statement only applies to personal
                information you have shared with Canon Financial Services. This CFS
                Privacy Statement does not apply to any information shared with other CUSA
                product groups.
            </p>
            <p className="font-16 text-end">Last updated: January 1, 2023</p>
            <p className="font-16">
                If you are a California resident, you have certain rights under the
                California Privacy Rights Act (“CPRA”). You can learn more about your
                rights below at the California Privacy Rights section of this Privacy
                Statement.
            </p>
            {/* Faq Accordion starts */}
            <div id="accordion" className="container mt-5 mb-2 pb-3 pt-3 px-5 px-lg-0">
                <div className="w-100 d-flex justify-content-end">
                    <span
                        className="cursor-pointer expand-all d-block font-16 font-bold color-navy mb-1 btn-expand"
                        id="collapseBtn"
                    >
                        EXPAND ALL
                    </span>
                </div>
                {/* question1 starts  */}
                <div className="py-4 border-top border-bottom">
                    <p
                        className="d-flex justify-content-between align-items-center cursor-pointer font-bold font-20 custom-acc collapsed-para collapsed mb-0 banner-text"
                        id="question"
                        data-bs-toggle="collapse"
                        data-bs-target="#question1"
                    >
                        <span>1. INFORMATION WE COLLECT AND HOW WE COLLECT IT</span>
                        <img
                            className="custom-accordion-arrow"
                            src="images/custom-accordion-arrow.svg"
                            alt="accordion-arrow"
                        />
                    </p>
                    <div className="collapse collapse-content" id="question1">
                        <p className="font-16 font-regular mt-3">
                            We and our service providers may collect information when you
                            provide information to us and when information is collected
                            automatically from your interaction with the Services.
                        </p>
                        <p className="font-16 font-regular mb-3">
                            Personal Information. You may choose to give us personal information
                            online to allow us to communicate with you or provide you with
                            Services. Our online forms may ask for a small amount of relevant
                            information, such as name, company name, email address, postal
                            address, and telephone number.
                        </p>
                        <p className="font-16 font-regular mb-3">
                            The types of personal information CFS may collect from you may
                            include:
                        </p>
                        <ul className="privacy-ul-style">
                            <li>
                                Personal and business contact information, such as name, postal
                                address, phone number, email address and website;
                            </li>
                            <li>
                                Other unique information such as product functionality, product
                                and service preferences, and contact preferences;
                            </li>
                            <li>
                                Geolocation data such as your Internet Protocol (IP) address,
                                physical location (with your express consent), and other similar
                                location information collected when you interact with the
                                Services;
                            </li>
                            <li>
                                Details of the products and services you have purchased from us or
                                which you have inquired about, together with any additional
                                information necessary to deliver those products and services and
                                to respond to your inquiries;
                            </li>
                            <li>
                                Professional or employment-related information that you provide
                                through the application and recruitment process, or collected from
                                employment agencies, screening services, background check
                                providers, former employers, credit references or other sources
                                that supply employment verification services, such as work
                                history, prior employer, education information, information
                                relating to references, details of qualifications, skills,
                                experience, professional memberships and licenses, and job
                                interest information, human resources information and information
                                necessary for benefits and related administration services;
                            </li>
                            <li>
                                Email communications, and personal information collected in the
                                course of your job-related activities, such as your computer,
                                application, system or network access and usage, and your use of
                                phones and other devices;
                            </li>
                            <li>
                                Health information, such as biological testing/screening for
                                controlled substances, if applicable, medical information or
                                disability status required in order to provide accommodations;
                            </li>
                            <li>
                                Audio, electronic, visual or similar information such as,
                                photographs of you for identification and security verification,
                                video recordings of you on security cameras, monitoring of phone
                                calls when accessing CFS resources such as IT services, monitoring
                                of CFS computers, networks, systems and applications for security,
                                safety and integrity of CFS assets;
                            </li>
                            <li>
                                Demographic information, such as nationality, citizenship, visa
                                status, gender/sex, disability status, veteran’s status, and
                                marital status;
                            </li>
                            <li>
                                Sensitive Personal Information, including social security number,
                                driver’s license number, passport number, ethnicity, race,
                                biometric information such as hand scan, used for security
                                purposes and geolocation information if you are using a company
                                issued mobile device, computer or vehicle as part of your
                                employment duties.
                            </li>
                            <li>
                                Any additional information relating to you that you provide to us
                                directly through our websites or applications or indirectly
                                through use of our websites, applications or online presence,
                                through our representatives or otherwise; and
                            </li>
                            <li>
                                Information you provide to us through our service center, customer
                                surveys or visits by our representatives from time to time.
                            </li>
                        </ul>
                        <p className="font-16 font-regular mb-3">
                            Usage Information. In addition to the information you may
                            voluntarily provide, CFS may collect information automatically when
                            you access or use the Services or a website “powered by” another
                            company on behalf of CFS through our use of data collection
                            technologies, including web beacons, Cookies (as defined in the
                            following paragraph), and embedded web links. These technologies
                            collect certain traffic information that your browser sends to a
                            website, such as your browser type and language, browser history,
                            access times, and the address of the website from which you arrived.
                            They may also collect information about your IP address, unique
                            device identifier, geolocation information (with your express
                            consent), clickstream behavior (e.g., the pages you view, the links
                            you click, and other actions you take in connection with CFS
                            websites or “powered by” websites) and product information. CFS may
                            also use some of these technologies in connection with emails and
                            communications sent from CFS and therefore may collect information
                            using these tools when you open the email or click on a link
                            contained in the email.
                        </p>
                        <p className="font-16 font-regular mb-3">
                            Below is some additional detail on how we use Cookies and other
                            technologies:
                        </p>
                        <p className="font-16 font-regular mb-3">
                            Cookies. Cookies are data files placed on a device when you use it
                            to visit any of the Services (“Cookies”). We may use Cookies: (i) to
                            collect and store certain information about you, (ii) for security
                            purposes, (iii) to store your preferences and settings, (iv) to
                            provide personalized product suggestions, (v) to maintain and
                            improve our website, (vi) to generate analytics regarding the
                            performance of the Services, (vii) to facilitate site navigation,
                            and (viii) to personalize your experience while using the Services.
                            Cookies can remain in your computer for the duration of a browsing
                            session or for a predetermined period of time. Cookies that remain
                            in your computer for the duration of a browsing session are called
                            “session” cookies. Cookies that remain in your computer for a
                            predetermined period of time are called “persistent” cookies. We may
                            use persistent cookies to show you recently-viewed products, provide
                            you with product or service recommendations, or otherwise provide
                            you with a customized experience.
                        </p>
                        <p className="font-16 font-regular mb-3">
                            If you would prefer not to accept Cookies, most browsers will allow
                            you to: (i) change your browser settings to notify you when you
                            receive a Cookie, which lets you choose whether or not to accept it;
                            (ii) disable existing Cookies; or (iii) set your browser to
                            automatically reject any Cookies.
                            <br />
                            Please be aware that if you disable or reject Cookies, some features
                            and services offered or present on the Services may be slower or may
                            not work or display properly.
                        </p>
                        <p className="font-16 font-regular mb-3">
                            Other Technologies. We may use standard Internet technology, such as
                            web beacons (also called clear GIFs or pixel tags) and other similar
                            technologies, to track your use of our Services. We also may include
                            web beacons in email messages, newsletters and advertisements to
                            determine whether messages have been opened and acted upon. The
                            information we obtain in this manner enables us to customize the
                            Services we offer and measure the overall effectiveness of our
                            online content and the products and services we offer through the
                            Services.
                        </p>
                        <p className="font-16 font-regular mb-3">
                            Analytics Services. We use web analytics tools such as Google
                            Analytics to assist us in understanding how people use the Services
                            and related marketing and promotions. To manage your preferences
                            with respect to Google Analytics click here. You can opt out of data
                            collection or use by Google Analytics by clicking the following
                            link:{" "}
                            <a href="#" className="privacy-anchor-style">
                                https://tools.google.com/dlpage/gaoptout
                            </a>{" "}
                            (requires you to install a browser add-on).
                        </p>
                        <p className="font-16 font-regular mb-3">
                            Collection by Other Companies. We may allow other companies,
                            including our authorized service providers to use tracking
                            technologies, such as Cookies and web beacons, to collect
                            information about your visits to this and other websites on the
                            Services. This information generally enables them to track and gauge
                            the effectiveness of our Services and of various marketing campaigns
                            and to serve ads about goods and services that may be of interest to
                            you when you visit other websites across the Internet.
                        </p>
                        <p className="font-16 font-regular mb-3">
                            Use of Public Information. CFS also collects information from
                            publicly or commercially available sources that it deems credible.
                            Such information may include your name, address, email address,
                            preferences, company name, title, specific devices that are financed
                            or leased (Uniform Commercial Code), interests, and firmographic or
                            demographic/profile data. The information CFS collects from its
                            public or commercial sources may be used along with the information
                            CFS collects when you access or use the Services. For example, CFS
                            may compare the geographic information acquired from publicly
                            available sources with the IP address collected by the technologies
                            discussed above to derive your general geographic area.
                        </p>
                    </div>
                </div>
                {/* question1 ends  */}
                {/* question2 starts  */}
                <div className="py-4 border-top border-bottom">
                    <p
                        className="d-flex justify-content-between align-items-center cursor-pointer font-bold font-20 custom-acc collapsed-para collapsed mb-0 banner-text"
                        data-bs-toggle="collapse"
                        data-bs-target="#question2"
                    >
                        <span>2. HOW WE USE THE INFORMATION WE COLLECT</span>
                        <img
                            className="custom-accordion-arrow"
                            src="images/custom-accordion-arrow.svg"
                            alt="accordion-arrow"
                        />
                    </p>
                    <div className="collapse collapse-content" id="question2">
                        <p className="font-16 font-regular mt-3 mb-3">
                            Personal Information. We may store, analyze, combine, and otherwise
                            use the information we collect, either directly or indirectly, to:
                        </p>
                        <ul className="privacy-ul-style">
                            <li>Provide the Services;</li>
                            <li>
                                Improve the Services and the way we do business with our current
                                and potential employees, customers, dealers, distributors,
                                partners and resellers;
                            </li>
                            <li>Verify your identity;</li>
                            <li>Respond to your questions and requests;</li>
                            <li>
                                Communicate with you about your transactions on the Services;
                            </li>
                            <li>Provide you with customer support;</li>
                            <li>
                                Provide you with information about Canon, its Services, products
                                and promotions, or any other offers that may be of interest to
                                you, unless you opt out or request not to receive this
                                information;
                            </li>
                            <li>
                                Perform research and analysis about usage and potential interest
                                in our products, services, or content;
                            </li>
                            <li>
                                Develop and display content tailored to your interests on the
                                Services;
                            </li>
                            <li>
                                Help us improve the overall accuracy and completeness of the
                                information;
                            </li>
                            <li>
                                Allow us to deliver personalized and responsive Services, which
                                can take actions based on the data you provide;
                            </li>
                            <li>
                                Enforce and ensure compliance with this Privacy Statement, the CFS
                                Terms of Use and applicable law, including to protect the rights,
                                property or safety of CFS, its parents, successors, subsidiaries,
                                affiliates and related entities (collectively, “Canon” or “Canon
                                Group”), and CFS’s dealers, distributors, partners and resellers
                                or any other person and the copyright-protected content of the
                                Services, or for internal or external auditing purposes;
                            </li>
                            <li>
                                Provide you with information about CFS, its parent, successors,
                                subsidiaries, affiliates and related entities, Canon’s Services,
                                products and promotions, jobs, or any other offers that may be of
                                interest to you, unless you opt out or request not to receive this
                                information;
                            </li>
                            <li>
                                Prevent, detect or investigate a crime or other breach of law or
                                requirement, loss prevention or fraud;
                            </li>
                            <li>
                                Communicate with you about your application status and future
                                opportunities with CFS, if applicable;
                            </li>
                            <li>
                                Make employment-related decisions, including decisions regarding
                                your recruitment, eligibility for employment, employment, job
                                performance, qualifications, job duties, salary and other
                                compensation, promotion, retention and eligibility to receive
                                accommodations;
                            </li>
                            <li>
                                Ensure the security and operability of our networks, systems and
                                applications;
                            </li>
                            <li>
                                Prevent, detect or investigate a crime or other breach of law or
                                requirement, loss prevention or fraud;
                            </li>
                            <li>
                                Prevent, detect or investigate a crime or other breach of law or
                                requirement, loss prevention or fraud;
                            </li>
                            <li>
                                Prevent, detect or investigate a crime or other breach of law or
                                requirement, loss prevention or fraud;
                            </li>
                            <li>
                                Prevent, detect or investigate a crime or other breach of law or
                                requirement, loss prevention or fraud;
                            </li>
                            <li>
                                Communicate with you about your transactions on the Services and
                                about CFS products and solutions;
                            </li>
                            <li>
                                Deliver the products and Services you have requested, such as
                                remote diagnostics, analytics, and software update services, the
                                uploading, storing and downloading of backup information from a
                                device, and the installation of a device;
                            </li>
                            <li>
                                Support the technical functionality of the Services, develop new
                                products and services, and analyze your use of the Services,
                                including your interaction with advertising, products and services
                                that are made available, linked to or offered in the Services; and
                            </li>
                            <li>As otherwise stated in this Privacy Statement.</li>
                        </ul>
                    </div>
                </div>
                {/* question2 ends  */}
                {/* question3 starts  */}
                <div className="py-4 border-top border-bottom">
                    <p
                        className="d-flex justify-content-between align-items-center cursor-pointer font-bold font-20 custom-acc collapsed-para collapsed mb-0 banner-text"
                        data-bs-toggle="collapse"
                        data-bs-target="#question3"
                    >
                        <span>3. HOW WE SHARE THE INFORMATION WE COLLECT</span>
                        <img
                            className="custom-accordion-arrow"
                            src="images/custom-accordion-arrow.svg"
                            alt="accordion-arrow"
                        />
                    </p>
                    <div className="collapse collapse-content" id="question3">
                        <h2 className="pb-2 mt-3 grey-color-v1 text-uppercase font-16">
                            Affiliates
                        </h2>
                        <p className="font-16 mb-4">
                            We are part of the Canon Group and may disclose your information to
                            our affiliates which may be located outside of the country you
                            reside and are located in, including, but not limited to, our parent
                            company Canon Inc., located in Japan. When you provide information
                            via the Services, we will also disclose your information to our
                            affiliates to enable them to inform you of products, or other offers
                            that may be of interest to you.
                        </p>
                        <h2 className="pb-2 mt-3 grey-color-v1 text-uppercase font-16">
                            Service Providers
                        </h2>
                        <p className="font-16 mb-4">
                            CFS retains service providers and suppliers to manage or support its
                            business operations, provide professional services, deliver
                            products, services and customer solutions and to assist with
                            marketing and communication initiatives. These providers include,
                            for example, hosting and IT service providers, website management
                            and support service providers, email service providers, automated
                            data processors, shipping agents, and providers of communications,
                            order fulfillment, delivery, customer support, credit bureaus,
                            live-help, talent acquisition, employment management, payroll,
                            health and welfare benefit, and security services. We may disclose
                            your information to these companies, which may be located outside of
                            the country you reside and are located in, to enable them to provide
                            you with services on our behalf, and for the purpose of conducting
                            general business analysis. For example, we may disclose website
                            usage and marketing information to our marketing partners.
                        </p>
                        <p className="font-16 mb-4">
                            In addition, if you inquire about products, services, software or
                            other goods that CFS does not sell directly, we may forward your
                            information to your Canon dealer, distributor, partner or other
                            reseller, with your consent, and they may reach out to you about
                            your needs. In any event, we expect our service providers to use
                            your information only to perform the service for which they are
                            engaged, while also complying with all applicable laws, and pursuant
                            to our instructions. You expressly consent to your information being
                            used as set forth in this Section.
                        </p>
                        <h2 className="pb-2 mt-3 grey-color-v1 text-uppercase font-16">
                            Government Entities.
                        </h2>
                        <p className="font-16 mb-4">
                            CFS may disclose your personal information to government entities in
                            order to comply with mandatory reporting.
                        </p>
                        <h2 className="pb-2 mt-3 grey-color-v1 text-uppercase font-16">
                            Legal Proceedings
                        </h2>
                        <p className="font-16 mb-4">
                            We may also disclose your personal information: In response to a
                            subpoena or similar investigative demand, a court order, or a
                            request for cooperation from law enforcement or other government
                            agency; to establish or exercise our legal rights; to defend against
                            legal claims; or as otherwise required by law; (In such cases, we
                            may raise or waive any legal objection or right available to us.)
                            When we believe disclosure is appropriate in connection with efforts
                            to investigate, prevent, or take other action regarding illegal
                            activity, suspected fraud or other wrongdoing; to protect and defend
                            the rights, property or safety of Canon, CFS, our users, our
                            employees, or others; to comply with applicable law or cooperate
                            with law enforcement; to address security or technical issues; or to
                            enforce our website CFS{" "}
                            <a href="#" className="privacy-anchor-style">
                                Terms of Use
                            </a>{" "}
                            or other agreements or policies; and In connection with a corporate
                            transaction, such as the sale of our business, a divestiture,
                            merger, consolidation, or asset sale, or in the unlikely event of
                            bankrupt.
                        </p>
                        <h2 className="pb-2 mt-3 grey-color-v1 text-uppercase font-16">
                            Government Entities
                        </h2>
                        <p className="font-16 mb-4">
                            CFS may disclose your personal information to government entities in
                            order to comply with mandatory reporting
                        </p>
                    </div>
                </div>
                {/* question3 ends  */}
                {/* question4 starts  */}
                <div className="py-4 border-top border-bottom">
                    <p
                        className="d-flex justify-content-between align-items-center cursor-pointer font-bold font-20 custom-acc collapsed-para collapsed mb-0 banner-text"
                        data-bs-toggle="collapse"
                        data-bs-target="#question4"
                    >
                        <span>4. CHILDREN’S PRIVACY</span>
                        <img
                            className="custom-accordion-arrow"
                            src="images/custom-accordion-arrow.svg"
                            alt="accordion-arrow"
                        />
                    </p>
                    <div className="collapse collapse-content" id="question4">
                        <p className="font-16 font-regular mb-0 mt-3">
                            CFS does not target its Services to children under 18 and we do not
                            knowingly collect, use or disclose personal information from
                            children under 18.
                        </p>
                    </div>
                </div>
                {/* question4 ends  */}
                {/* question5 starts  */}
                <div className="py-4 border-top border-bottom">
                    <p
                        className="d-flex justify-content-between align-items-center cursor-pointer font-bold font-20 custom-acc collapsed-para collapsed mb-0 banner-text"
                        data-bs-toggle="collapse"
                        data-bs-target="#question5"
                    >
                        <span>5. YOUR PRIVACY RIGHTS, CHOICE AND ACCESS</span>
                        <img
                            className="custom-accordion-arrow"
                            src="images/custom-accordion-arrow.svg"
                            alt="accordion-arrow"
                        />
                    </p>
                    <div className="collapse collapse-content" id="question5">
                        <p className="font-16 font-regular mt-3">
                            Please note that submission of the form accessible via the link
                            below only exercises your rights with respect to personal
                            information you have shared with Canon Financial Services.{" "}
                        </p>
                        <p className="font-16 font-regular mb-3">
                            You have the right to request us to:
                        </p>
                        <ul className="privacy-ul-style">
                            <li>Withdraw your consent where you have provided it;</li>
                            <li>
                                Provide you with a copy of the personal information that we have
                                collected about you, to the extent that we store or maintain that
                                information;
                            </li>
                            <li>
                                Not send you marketing or promotional emails or other
                                communications;
                            </li>
                            <li>Correct or update your personal information;</li>
                            <li>Delete your personal information;</li>
                            <li>Stop processing your personal information;</li>
                            <li>
                                Not disclose your personal information to third parties; and Not
                                contact you in the future.
                            </li>
                        </ul>
                        <p className="font-16 font-regular mb-3">
                            If you wish to make any of the above requests (for example, if you
                            wish to submit a request to no longer receive communications,
                            including marketing communications, from CFS), please:
                        </p>
                        <p className="font-16 font-regular mb-3">
                            Click unsubscribe in the email that you receive from us; or E-mail
                            us at{" "}
                            <a href="#" className="privacy-anchor-style">
                                {" "}
                                privacy@cfs.canon.com
                            </a>{" "}
                            .
                        </p>
                        <p className="font-16 font-regular mb-3">
                            Please note that where you unsubscribe from our marketing
                            communications, we will keep a record of your communication
                            information (including email address) to ensure we do not market to
                            you in future. We may also send you other types of transactional and
                            relationship email communications, such as service announcements and
                            administrative notices without offering you the opportunity to opt
                            out of receiving them.
                        </p>
                        <p className="font-16 font-regular mb-3">
                            We are under no obligation to store your personal information
                            indefinitely and disclaim any liability arising out of, or related
                            to, the destruction of such personal information.
                        </p>
                        <p className="font-16 font-regular mb-3">
                            It may not always be possible to completely remove or delete all of
                            your personal information from our databases without some residual
                            data remaining because of backups and other reasons. Additionally,
                            please be aware that we may need to retain some of your personal
                            information in order to maintain our records, comply with our legal
                            obligations, resolve disputes, or enforce our agreements. We may
                            also keep a record of correspondence with you (for example if you
                            have made a complaint about a product or our Services) to protect us
                            from a legal claim.
                        </p>
                    </div>
                </div>
                {/* question5 ends  */}
                {/* question6 starts  */}
                <div className="py-4 border-top border-bottom">
                    <p
                        className="d-flex justify-content-between align-items-center cursor-pointer font-bold font-20 custom-acc collapsed-para collapsed mb-0 banner-text"
                        data-bs-toggle="collapse"
                        data-bs-target="#question6"
                    >
                        <span>6. CALIFORNIA PRIVACY RIGHTS</span>
                        <img
                            className="custom-accordion-arrow"
                            src="images/custom-accordion-arrow.svg"
                            alt="accordion-arrow"
                        />
                    </p>
                    <div className="collapse collapse-content" id="question6">
                        <p className="font-16 mt-3">
                            Collection, Disclosure, and Sale or Sharing of Personal Information
                        </p>
                        <p className="font-16">
                            We collect, and in the last twelve (12) months, we have collected,
                            disclosed for a business purpose and sold/shared the following
                            categories of personal information:
                        </p>
                        <div className="table-responsive mt-5 mb-3">
                            <table className="table table-bordered custom-privacy-table">
                                <thead>
                                    <tr className="vertical-align-middle">
                                        <th className="text-center py-2 w-20 font-16">
                                            Category of Personal Information
                                        </th>
                                        <th className="text-center py-2 w-20 font-16">
                                            Specific Personal Information Collected
                                        </th>
                                        <th className="text-center py-2 w-20 font-16">
                                            Disclosed for Business Purpose
                                        </th>
                                        <th className="text-center py-2 w-20 font-16">
                                            Entities that We Disclose Personal Information for a
                                            Business Purpose
                                        </th>
                                        <th className="text-center py-2 w-20 font-16">
                                            Sold or Shared
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            Personal Identifiers, such as name, email address, online
                                            identifiers and other information.
                                        </td>
                                        <td>
                                            <ul className="privacy-ul-style">
                                                <li>Name</li>
                                                <li>Postal address</li>
                                                <li>Phone number</li>
                                                <li>Email address</li>
                                                <li>Website</li>
                                                <li>Contact Preferences</li>
                                                <li>Phone support verification question and answer</li>
                                                <li>Nationality</li>
                                                <li>Citizenship</li>
                                                <li>Visa status</li>
                                                <li>Gender/sex</li>
                                                <li>Disability status</li>
                                                <li>Veteran’s status</li>
                                                <li>Marital status</li>
                                            </ul>
                                        </td>
                                        <td>Yes</td>
                                        <td>
                                            <ul className="privacy-ul-style">
                                                <li>Affiliates</li>
                                                <li>Service Providers</li>
                                                <li>
                                                    Other third parties when required by law or to protect
                                                    Canon or other persons, as described in this Privacy
                                                    Statement
                                                </li>
                                            </ul>
                                        </td>
                                        <td>No</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Payment Information, such as financial information, or
                                            payment method information
                                        </td>
                                        <td>
                                            <ul className="privacy-ul-style">
                                                <li>Name</li>
                                                <li>Billing address</li>
                                                <li>Credit/debit card information</li>
                                                <li>
                                                    Banking information (including your account number and
                                                    routing number) Yes Affiliates
                                                </li>
                                                <li>Service Providers</li>
                                                <li>
                                                    Other third parties when required by law or to protect
                                                    Canon or other persons, as described in this Privacy
                                                    Statement
                                                </li>
                                                <li>
                                                    NoProtected Classification Characteristics, such as age,
                                                    ethnicity and gender.
                                                </li>
                                                <li>Nationality</li>
                                                <li>Citizenship</li>
                                                <li>Visa status</li>
                                                <li>Gender/sex,</li>
                                                <li>Disability status</li>
                                                <li>Veteran’s status</li>
                                                <li>Marital status</li>
                                            </ul>
                                        </td>
                                        <td>Yes</td>
                                        <td>
                                            <ul className="privacy-ul-style">
                                                <li>Affiliates</li>
                                                <li>Service Providers</li>
                                                <li>
                                                    Other third parties when required by law or to protect
                                                    Canon or other persons, as described in this Privacy
                                                    Statement
                                                </li>
                                            </ul>
                                        </td>
                                        <td>No</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Commercial Information, such as information about the
                                            equipment you are leasing, and other information about your
                                            transaction or lease.
                                        </td>
                                        <td>
                                            <ul className="privacy-ul-style">
                                                <li>
                                                    Equipment or other product and service preferences
                                                </li>
                                                <li>
                                                    Equipment, products and services purchased or leased
                                                    (including your lease number, equipment model
                                                    number/serial number, and buyout amount)
                                                </li>
                                                <li>
                                                    Inquiries about equipment, products and services
                                                    purchased or leased
                                                </li>
                                                <li>Service center responses</li>
                                                <li>Customer survey responses</li>
                                                <li>Feedback from visits by our representatives</li>
                                                <li>
                                                    Technical information related to your Canon products
                                                    (including model, serial number, unique device
                                                    identifier, diagnostic information, usage data, camera
                                                    and lens settings, system logs, application
                                                    configurations, consumables status, etc.);
                                                </li>
                                                <li>
                                                    Details on your customer service, warranty and repairs
                                                    interactions with Canon
                                                </li>
                                            </ul>
                                        </td>
                                        <td>Yes</td>
                                        <td>
                                            <ul className="privacy-ul-style">
                                                <li>Affiliates</li>
                                                <li>Service Providers</li>
                                                <li>
                                                    Other third parties when required by law or to protect
                                                    Canon or other persons, as described in this Privacy
                                                    Statement
                                                </li>
                                            </ul>
                                        </td>
                                        <td>No</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Internet/Network Information, such as IP address, Device
                                            Information, and Log and Analytics Data.
                                        </td>
                                        <td>
                                            <ul className="privacy-ul-style">
                                                <li>IP address</li>
                                                <li>Browser type</li>
                                                <li>Browser language</li>
                                                <li>Browser history</li>
                                                <li>Access times</li>
                                                <li>Originating website (referring URL)</li>
                                                <li>Unique device identifier</li>
                                                <li>Clickstream behavior</li>
                                                <li>
                                                    Information about your browsing behavior, device
                                                    information and interactions (including repeated site
                                                    visits, interactions, keywords, online content
                                                    production, etc.)
                                                </li>
                                            </ul>
                                        </td>
                                        <td>Yes</td>
                                        <td>
                                            <ul className="privacy-ul-style">
                                                <li>Affiliates</li>
                                                <li>Service Providers</li>
                                                <li>
                                                    Other third parties when required by law or to protect
                                                    Canon or other persons, as described in this Privacy
                                                    Statement
                                                </li>
                                            </ul>
                                        </td>
                                        <td>No</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Geolocation Data, such as Location Information from your
                                            device or estimated based on your IP address.
                                        </td>
                                        <td>
                                            <ul className="privacy-ul-style">
                                                <li>IP address</li>
                                            </ul>
                                        </td>
                                        <td>Yes</td>
                                        <td>
                                            <ul>
                                                <li>Affiliates</li>
                                                <li>Service Providers</li>
                                            </ul>
                                        </td>
                                        <td>No</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Other Personal Information, such as information you post on
                                            our platform or on social media pages, and information you
                                            submit to us.
                                        </td>
                                        <td>
                                            <ul className="privacy-ul-style">
                                                <li>Right to work documentation</li>
                                                <li>Work history</li>
                                                <li>Prior employer</li>
                                                <li>Job title</li>
                                                <li>Salary history</li>
                                                <li>Education information</li>
                                                <li>Training history</li>
                                                <li>Details of qualifications, skills and experience</li>
                                                <li>Professional licenses and memberships</li>
                                                <li>References information</li>
                                                <li>Job interest data</li>
                                                <li>
                                                    Information about your personal preferences (such as
                                                    whether you consent to receive marketing)
                                                </li>
                                            </ul>
                                        </td>
                                        <td>Yes</td>
                                        <td>
                                            <ul className="privacy-ul-style">
                                                <li>Affiliates</li>
                                                <li>Service Providers</li>
                                            </ul>
                                        </td>
                                        <td>No</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Inferences, such as predictions about your interests and
                                            preferences drawn to create a profile
                                        </td>
                                        <td>None</td>
                                        <td>Not applicable</td>
                                        <td>Not applicable</td>
                                        <td>Not applicable</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Sensitive Personal Information, such as log-in information,
                                            biometric information
                                        </td>
                                        <td>
                                            <ul className="privacy-ul-style">
                                                <li>Social security number</li>
                                                <li>Driver’s license number or passport number</li>
                                                <li>Ethnicity</li>
                                                <li>Race</li>
                                                <li>Hand scan</li>
                                            </ul>
                                        </td>
                                        <td>Yes</td>
                                        <td>
                                            <ul className="privacy-ul-style">
                                                <li>Affiliates</li>
                                                <li>Service Providers</li>
                                            </ul>
                                        </td>
                                        <td>No</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Professional or Employment Related Information, including
                                            resume, references and cover letter
                                        </td>
                                        <td>
                                            <ul className="privacy-ul-style">
                                                <li>Education</li>
                                                <li>Degree(s) awarded</li>
                                                <li>Employment history</li>
                                                <li>Employment records</li>
                                                <li>Professional memberships/licenses</li>
                                                <li>Credit references</li>
                                                <li>Job titles</li>
                                                <li>Disciplinary history</li>
                                                <li>Performance/evaluation information</li>
                                                <li>Grievance information</li>
                                                <li>Salary history</li>
                                                <li>Training records</li>
                                                <li>National citizenship</li>
                                            </ul>
                                        </td>
                                        <td>Yes</td>
                                        <td>
                                            <ul className="privacy-ul-style">
                                                <li>Affiliates</li>
                                                <li>Service Providers</li>
                                            </ul>
                                        </td>
                                        <td>No</td>
                                    </tr>
                                    <tr>
                                        <td>Health Information</td>
                                        <td>
                                            <ul className="privacy-ul-style">
                                                <li>Biological testing</li>
                                                <li>Medical conditions</li>
                                                <li>Medical or other leave information</li>
                                                <li>Disability status</li>
                                                <li>Accommodations</li>
                                            </ul>
                                        </td>
                                        <td>Yes</td>
                                        <td>
                                            <ul className="privacy-ul-style">
                                                <li>Service Providers</li>
                                            </ul>
                                        </td>
                                        <td>No</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="font-16 mb-4">
                            CFS may disclose your personal information to service providers that
                            support our businesses and perform services on our behalf, such as
                            companies that process payments for us or that deliver email
                            marketing messages that you have requested from us. However, CFS
                            does not sell or share your personal information to third parties.
                        </p>
                        <h2 className="pb-2 grey-color-v1 text-uppercase font-16">
                            Sensitive Personal Information
                        </h2>
                        <p className="font-16 mb-4">
                            We collect sensitive information including government-issued IDs,
                            like your driver’s license or passport number, or social security
                            number, age, ethnicity, race and biometric information. We may also
                            collect health information (for example, medical conditions and
                            disability status) and certain employment information which may also
                            be considered sensitive information. We collect categories of
                            sensitive personal information when you provide it to us, and will
                            only use it for the purposes disclosed at the time of collection.
                        </p>
                        <h2 className="pb-2 grey-color-v1 text-uppercase font-16">
                            Children’s Privacy
                        </h2>
                        <p className="font-16 mb-4">
                            CFS does not target its Services to children under 18 and we do not
                            knowingly collect, use or disclose personal information from
                            children under 18.
                        </p>
                        <h2 className="pb-2 grey-color-v1 text-uppercase font-16">
                            Retention of Your Personal Information
                        </h2>
                        <p className="font-16 mb-4">
                            For each of these categories of personal information, we retain your
                            information for as long as it is reasonably necessary for the
                            purposes for which the information was collected, and in accordance
                            with applicable retention policies. The criteria used to determine
                            our retention policies include the length of our relationship with
                            you, your requests, ongoing contract and service obligations, and
                            our legal obligations, business need and our legal obligations.
                            Generally, we will retain your employment-related personal
                            information until the end of your employment with us, plus a
                            reasonable period of time after that where necessary to respond to
                            any employment inquiries, deal with legal, tax, accounting or
                            administrative matters, or to provide you with ongoing pensions or
                            other benefits. We also retain information as otherwise required by
                            applicable law.
                        </p>
                        <h2 className=" pb-2 grey-color-v1 text-uppercase font-16">
                            Sources of Your Personal Information
                        </h2>
                        <p className="font-16">
                            As described above in the “The Information We Collect and How We
                            Collect It” section, we collect information directly from you when
                            you provide it to us, automatically using cookies and other tracking
                            technologies, from the categories of third parties listed in that
                            section, and from publicly or commercially available sources that we
                            deem credible.
                        </p>
                        <p className="font-16 mb-4">
                            For further information, you can also see the “The Information We
                            Collect and How We Collect It” section above.
                        </p>
                        <h2 className="pb-2 grey-color-v1 text-uppercase font-16">
                            Purposes for Your Personal Information
                        </h2>
                        <p className="font-16 mb-4">
                            We collect or disclose personal information about you for the
                            business purposes further described in the “How We Use The
                            Information We Collect” section above.
                        </p>
                        <h2 className="pb-2 grey-color-v1 text-uppercase font-16">
                            Do Not Track
                        </h2>
                        <p className="font-16 mb-4">
                            Some browsers offer you the ability to opt out of cookie-based and
                            other online tracking, which may be considered a “sale” or “sharing”
                            of your personal information. As we do not sell or share any
                            personal information as defined by the CPRA, if you activate a
                            browser-based opt-out signal sent through the Global Privacy
                            Control, we cannot effectuate your request.
                        </p>
                        <p className="font-16 mb-4">
                            The Services are not currently configured to recognize “do not
                            track” or other browser-based signals. However, other settings
                            within your browser may permit you to block Cookies or other
                            technology that enable websites to collect information that can be
                            used to tailor advertisements to your interest. Please check your
                            browser’s settings or consult your browser’s help information for
                            more details. To learn more about browser tracking signals and Do
                            Not Track please visit
                            <a href="#" className="privacy-anchor-style">
                                {" "}
                                www.allaboutdnt.org.
                            </a>
                        </p>
                        <h2 className="pb-2 grey-color-v1 text-uppercase font-16">
                            Your California Privacy Rights
                        </h2>
                        <p className="font-16 mb-4">
                            If you are a California resident, you have the right, under the
                            California Privacy Rights Act (“CPRA”), subject to certain
                            exemptions, to:
                        </p>
                        <ul className="privacy-ul-style">
                            <li>
                                Access, request and receive a portable copy of the personal
                                information that we have collected about you in the last 12
                                months, and specifically:
                                <ul className="mt-2 mb-2 privacy-ul-style">
                                    <li>
                                        The categories and specific pieces of personal information we
                                        have collected about you;
                                    </li>
                                    <li>
                                        The categories of the sources of the personal information;
                                    </li>
                                    <li>
                                        The purposes for which your personal information is collected
                                        and used;
                                    </li>
                                    <li>
                                        The categories of personal information that the business
                                        disclosed for a business purpose, and for each category
                                        identified, the categories of third parties to whom that
                                        particular category of personal information was disclosed;
                                    </li>
                                    <li>
                                        The categories of personal information that the business sold
                                        or shared, and for each category identified, the categories of
                                        third parties to whom that particular category of personal
                                        information was sold or shared;
                                    </li>
                                </ul>
                            </li>
                            <li>Correct inaccuracies in your personal information;</li>
                            <li>Delete your personal information;</li>
                            <li>
                                Not be discriminated against by us for exercising any of these
                                rights.
                            </li>
                        </ul>
                        <h2 className="pb-2 grey-color-v1 text-uppercase font-16">
                            Right to Request Deletion of Personal Information
                        </h2>
                        <p className="font-16 mb-4">
                            You have a right to request us to delete your personal information.
                            Upon verifying the validity of a deletion request, we will honor
                            your request, and, if applicable, instruct any service providers
                            and/or third parties to which we have disclosed your personal
                            information to delete your personal information; however, please be
                            aware that we may need to retain some of your information in order
                            to maintain our records, comply with our legal obligations, resolve
                            disputes, or enforce our agreements. It may not always be possible
                            to completely remove or delete all of your information from our
                            databases without some residual data remaining because of backups
                            and other reasons. We may also keep a record of correspondence with
                            you (for example if you have made a complaint about a product or our
                            Services) to protect us from a legal claim.
                        </p>
                        <h2 className="pb-2 grey-color-v1 text-uppercase font-16">
                            Exercising Your Rights
                        </h2>
                        <p className="font-16 mb-4">
                            To submit your CPRA request with respect to personal information
                            collected by CFS in connection with use of the Services, please:
                            <span className="d-block">
                                email{" "}
                                <a href="#" className="privacy-anchor-style">
                                    privacy@cfs.canon.com
                                </a>{" "}
                                ; or
                            </span>
                            <span className="d-block">
                                call{" "}
                                <a href="#" className="privacy-anchor-style">
                                    1-800-220-0330{" "}
                                </a>
                                .
                            </span>
                        </p>
                        <p className="font-16 mb-4">
                            In your request, please identify yourself as a business user of
                            Canon Financial Services.
                        </p>
                        <p className="font-16 mb-4">
                            When you submit a request to us, we will verify your identity before
                            processing the request. In order to protect your personal
                            information, you may be asked to provide two (2) or three (3) pieces
                            of information to match our records so that we can reasonably verify
                            your identity.
                        </p>
                        <h2 className="pb-2 grey-color-v1 text-uppercase font-16">
                            Authorized Agents
                        </h2>
                        <p className="font-16 mb-4">
                            If you are a California resident and would like to designate an
                            authorized agent to submit certain requests on your behalf, please
                            send an email to the following email address:{" "}
                            <a href="#" className="privacy-anchor-style">
                                privacy@cfs.canon.com{" "}
                            </a>
                            . In order for an authorized agent to be verified, you must provide
                            the authorized agent with signed, written permission to make such
                            requests or a power of attorney. We may also follow up with you to
                            verify your identity before processing the authorized agent’s
                            request.
                        </p>
                        <p className="font-16 mb-4">
                            If you are an agent of a California resident and would like to
                            submit a request on behalf of a California resident, please submit
                            the request to the following email address:{" "}
                            <a href="#" className="privacy-anchor-style">
                                privacy@cfs.canon.com
                            </a>{" "}
                            . After you submit the request, and if the request is not subject to
                            an exemption or exception, we will require additional information to
                            verify the identity of the California resident, as well as your
                            authority to act on behalf of the California resident.
                        </p>
                        <h2 className="pb-2 grey-color-v1 text-uppercase font-16">
                            California Shine the Light Law
                        </h2>
                        <p className="font-16 mb-4">
                            California Civil Code Section 1798.83 gives California residents the
                            right to request, from a business with whom the California resident
                            has an established business relationship, certain information with
                            respect to the types of personal information the business discloses
                            to third parties for direct marketing purposes by such third party,
                            and the identities of the third parties with whom the business has
                            disclosed such information during the immediately preceding year.
                            Canon Financial Services does not disclose your personal information
                            to third parties for direct marketing purposes by such third party.
                        </p>
                        <p className="font-16 mb-4">
                            Canon Financial Services may disclose your personal information to
                            service providers that support our businesses and perform services
                            on our behalf, such as companies that deliver email marketing
                            messages that you have requested from us. Canon Financial Services
                            does not sell your personal information to third parties, and does
                            not share your personal information with third parties.
                        </p>
                        <p className="font-16 mb-4">
                            Our U.S. visitors may have shared information with other Canon
                            groups. If you are a California resident and wish to exercise your
                            CPRA rights with respect to personal information you have shared
                            with CUSA,{" "}
                            <a href="#" className="privacy-anchor-style">
                                click here{" "}
                            </a>
                            .
                        </p>
                    </div>
                </div>
                {/* question6 ends  */}
                {/* question7 starts  */}
                <div className="py-4 border-top border-bottom">
                    <p
                        className="d-flex justify-content-between align-items-center cursor-pointer font-bold font-20 custom-acc collapsed-para collapsed mb-0 banner-text"
                        data-bs-toggle="collapse"
                        data-bs-target="#question7"
                    >
                        <span>7. THIRD-PARTY LINKS AND INTEREST-BASED MARKETING</span>
                        <img
                            className="custom-accordion-arrow"
                            src="images/custom-accordion-arrow.svg"
                            alt="accordion-arrow"
                        />
                    </p>
                    <div className="collapse collapse-content" id="question7">
                        <p className="font-16 font-regular mt-3">
                            Links. There are a number of places on our Services where you may
                            click on a link to access other websites that do not operate under
                            this Privacy Statement. For example, if you click on an
                            advertisement, a third-party logo on the Services, or a link to the
                            website of a company that may partner with CFS, you may be taken to
                            a website that we do not control. These third-party platforms or
                            websites may independently solicit and collect information,
                            including personal information, from you. We are not responsible for
                            the privacy practices of these platforms and websites and cannot
                            guarantee the security of any user data collected there. We
                            recommend that you consult the privacy statements of all third-party
                            websites you visit by clicking on the “privacy” link typically
                            located at the bottom of the web page you are visiting.
                        </p>
                        <p className="font-16 font-regular mb-3">
                            Do Not Track. The CFS website is not currently configured to
                            recognize “do not track” signals sent as a header by Internet
                            browsers. However, other settings within your browser may permit you
                            to block Cookies or other technology that enable websites to collect
                            information that can be used to tailor advertisements to your
                            interest. Please check your browser’s settings or consult your
                            browser’s help information for more details. To learn more about
                            browser tracking signals and Do Not Track please visit{" "}
                            <a href="#" className="privacy-anchor-style">
                                www.allaboutdnt.org
                            </a>
                            .
                        </p>
                    </div>
                </div>
                {/* question7 ends  */}
                {/* question8 starts  */}
                <div className="py-4 border-top border-bottom">
                    <p
                        className="d-flex justify-content-between align-items-center cursor-pointer font-bold font-20 custom-acc collapsed-para collapsed mb-0 banner-text"
                        data-bs-toggle="collapse"
                        data-bs-target="#question8"
                    >
                        <span>8. SECURITY</span>
                        <img
                            className="custom-accordion-arrow"
                            src="images/custom-accordion-arrow.svg"
                            alt="accordion-arrow"
                        />
                    </p>
                    <div className="collapse collapse-content" id="question8">
                        <p className="font-16 font-regular mt-3">
                            When you submit information to CFS through the Services, you should
                            be aware that your information is transmitted across multiple
                            computer systems on the Internet. Although we use reasonable and
                            appropriate physical, technical and organizational security measures
                            to protect your information from accidental loss and from
                            unauthorized access, use, alteration and disclosure, no method of
                            transmitting or storing electronic data on the Internet is ever
                            completely secure, and we do not guarantee the security of such
                            information at any time.
                        </p>
                    </div>
                </div>
                {/* question8 ends  */}
                {/* question9 starts  */}
                <div className="py-4 border-top border-bottom">
                    <p
                        className="d-flex justify-content-between align-items-center cursor-pointer font-bold font-20 custom-acc collapsed-para collapsed mb-0 banner-text"
                        data-bs-toggle="collapse"
                        data-bs-target="#question9"
                    >
                        <span>9. TRANSFER TO OTHER COUNTRIES</span>
                        <img
                            className="custom-accordion-arrow"
                            src="images/custom-accordion-arrow.svg"
                            alt="accordion-arrow"
                        />
                    </p>
                    <div className="collapse collapse-content" id="question9">
                        <p className="font-16 font-regular mt-3">
                            While CFS is a U.S. company, we may collect and you may provide us
                            with information wherever you are located. The servers that process
                            the data you provide us, and the call center you are connected to
                            via the Services, are located in the United States, Japan and other
                            jurisdictions. By using the Services, or providing us with any
                            information, you understand that the collection, processing,
                            maintenance, transfer and storage of such information will occur in
                            the United States, Japan and other countries where the privacy laws
                            may be different from those in the country where you reside or are
                            located, and waive any claims relating to the collection,
                            processing, maintenance, transfer or storage of data outside of such
                            country.
                        </p>
                    </div>
                </div>
                {/* question9 ends  */}
                {/* question10 starts  */}
                <div className="py-4 border-top border-bottom">
                    <p
                        className="d-flex justify-content-between align-items-center cursor-pointer font-bold font-20 custom-acc collapsed-para collapsed mb-0 banner-text"
                        data-bs-toggle="collapse"
                        data-bs-target="#question10"
                    >
                        <span>10. RIGHT TO MODIFY THIS PRIVACY STATEMENT</span>
                        <img
                            className="custom-accordion-arrow"
                            src="images/custom-accordion-arrow.svg"
                            alt="accordion-arrow"
                        />
                    </p>
                    <div className="collapse collapse-content" id="question10">
                        <p className="font-16 font-regular mt-3">
                            We reserve the right to modify this Privacy Statement at any time at
                            our sole discretion. If we modify the Privacy Statement, we will
                            post the revised statement here, with an updated revision date.
                            Changes will be effective immediately (except for material changes)
                            upon the posting of the revised Privacy Statement on the Services.
                            In the event we make material changes to this Privacy Statement, we
                            will notify you through the Services prior to the changes taking
                            effect. Please note that if you do not agree to the modified Privacy
                            Statement, you may not use the Services. Your continued use of the
                            Services following the posting of the changes or any applicable
                            notice period will mean that you accept those changes.
                        </p>
                    </div>
                </div>
                {/* question10 ends  */}
                {/* question11 starts  */}
                <div className="py-4 border-top border-bottom">
                    <p
                        className="d-flex justify-content-between align-items-center cursor-pointer font-bold font-20 custom-acc collapsed-para collapsed mb-0 banner-text"
                        data-bs-toggle="collapse"
                        data-bs-target="#question11"
                    >
                        <span>11. HOW TO CONTACT US</span>
                        <img
                            className="custom-accordion-arrow"
                            src="images/custom-accordion-arrow.svg"
                            alt="accordion-arrow"
                        />
                    </p>
                    <div className="collapse collapse-content" id="question11">
                        <p className="font-16 font-regular mt-3">
                            Should you have questions or concerns about this Privacy Statement,
                            please send us an e-mail at{" "}
                            <a href="#" className="privacy-anchor-style">
                                privacy@cfs.canon.com
                            </a>{" "}
                            or mail your inquiry to Canon Financial Services, Inc. – Customer
                            Privacy, 158 Gaither Drive, Suite 200, Mount Laurel, New Jersey
                            08054. In your request, please identify yourself as a business user
                            of Canon Financial Services. We hope that CFS will be able to
                            resolve any concerns you may have.
                        </p>
                        <p className="font-16 font-regular mb-3">
                            © 2023 Canon Financial Services, Inc. All Rights Reserved.
                            Reproduction in whole or part without permission is prohibited.
                        </p>
                    </div>
                </div>
                {/* question11 ends  */}
            </div>
            {/* Faq Accordion Ends */}
            <p className="pb-2 font-16">
                As a member of the Canon family of companies, Canon Financial Services,
                Inc. (“CFS,” “we,” “us” or “our”) respects your concerns about privacy and
                values its relationship with you. This CFS privacy statement (the “Privacy
                Statement”) is intended to inform you of the types of information we
                collect from you, either online through this website, mobile applications,
                or any of the products, services, solutions (including cloud services and
                solutions), software, websites, interactive features, forms, mobile and
                social media pages offered, and any other goods and services offered,
                owned, or operated by CFS or its affiliates, or your interaction with our
                employees, agents or contractors, or subsites in relation to financial
                services (collectively, the “Services”), whether accessed online via a
                computer, tablet, mobile device, or any other technology or device now
                known or hereafter developed (each a “Device”), or offline, and how that
                information will be used, as well as our practices regarding the
                collection, use, and disclosure of that information.
            </p>
            <p className="font-16 pb-2">
                The Services are intended for business use by business users residing and
                locating in the United States.
            </p>
            <p className="font-16 pb-2 mb-5">
                Please read this Privacy Statement carefully, because by using the
                Services, you are acknowledging that you have read, understand and agree
                to the terms of this Privacy Statement, and consent to the manner in which
                we may collect, use and disclose the information described herein. In
                addition, by using the Services, you are acknowledging that you have read,
                understand and agree to the CFS{" "}
                <a href="#" className="privacy-anchor-style">
                    Terms of Use
                </a>
                , which govern your use of the Services, and any content you submit or
                purchases you make via the Services. This Privacy Statement is
                incorporated into, and is subject to, the CFS{" "}
                <a href="#" className="privacy-anchor-style">
                    Terms of Use
                </a>
                . While this Privacy Statement is intended to generally describe our
                privacy practices, our goal is to also provide more detailed information
                at times when it is most meaningful to you. Please look for these notices
                within our Services. If you do not agree to the terms of this Privacy
                Statement and the CFS{" "}
                <a href="#" className="privacy-anchor-style">
                    Terms of Use
                </a>
                , you are not permitted to access or use the Services.
            </p>
        </div>
    </>
}
