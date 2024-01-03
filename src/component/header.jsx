
import React from 'react';

export function Header() {
  return (
    <>
      {/* header starts here */}
      <nav
        id="custom-navbar"
        className="navbar navbar-expand-lg sticky-top bg-light padding-0"
      >
        <div className="container-fluid custom-container custom-header-bg">
          <a className="navbar-brand" href="Home page.html">
            <img
              className="cfs-logo"
              src="images/Canon-Financial-services-logo.svg"
              alt="Canon Financial services logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className={`nav-item position-relative custom-nav-item ${window.location.pathname === "/" ? "active" : ""}`}>
                <a className="nav-link cfs-nav-item" href="/">
                  HOME
                </a>
              </li>
              <li className={`nav-item dropdown position-relative custom-nav-item ${window.location.pathname === "/AboutUs" || window.location.pathname === "/Industries" ? "active" : ""}`}>
                <a
                  className="nav-link cfs-nav-item  dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  ABOUT
                </a>
                <ul className="dropdown-menu custom-dropdown header-menu">
                  <li>
                    <a
                      className={`dropdown-item nav-dropdown-item ${window.location.pathname === "/AboutUs" ? "nav-dropdown-item-active" : ""}`}
                      href="/AboutUs"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="dropdown-divider custom-dropdown-divider" />
                  <li>
                    <a
                      className={`dropdown-item nav-dropdown-item ${window.location.pathname === "/Industries" ? "nav-dropdown-item-active" : ""}`}
                      href="/Industries"
                    >
                      Industries
                    </a>
                  </li>
                </ul>
              </li>
              <li className={`nav-item dropdown position-relative custom-nav-item ${window.location.pathname === "/InventoryFinancing" || window.location.pathname === "/DealerFinancing" || window.location.pathname === "/CustomerFinancing" ? "active" : ""}`}>
                <a
                  className="nav-link cfs-nav-item  dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  SERVICES
                </a>
                <ul className="dropdown-menu custom-dropdown header-menu">
                  <li>
                    <a
                      className={`dropdown-item nav-dropdown-item ${window.location.pathname === "/CustomerFinancing" ? "nav-dropdown-item-active" : ""}`}
                      href="/CustomerFinancing"
                    >
                      Customer Financing
                    </a>
                  </li>
                  <li className="dropdown-divider custom-dropdown-divider" />
                  <li>
                    <a
                      className={`dropdown-item nav-dropdown-item ${window.location.pathname === "/DealerFinancing" ? "nav-dropdown-item-active" : ""}`}
                      href="/DealerFinancing"
                    >
                      Dealer Financing
                    </a>
                  </li>
                  <li className="dropdown-divider custom-dropdown-divider" />
                  <li>
                    <a
                      className={`dropdown-item nav-dropdown-item ${window.location.pathname === "/InventoryFinancing" ? "nav-dropdown-item-active" : ""}`}
                      href="/InventoryFinancing"
                    >
                      Inventory Financing
                    </a>
                  </li>
                </ul>
              </li>
              <li className={`nav-item dropdown position-relative custom-nav-item ${window.location.pathname === "/Portal" ? "active" : ""}`}>
                <a
                  className="nav-link cfs-nav-item dropdown-toggle"
                  href="/Portal"
                >
                  PORTALS
                </a>
                <ul className="dropdown-menu custom-dropdown header-menu">
                  <li>
                    <a
                      className="dropdown-item nav-dropdown-item"
                      href="https://mycfs.cfs.canon.com/"
                      target="_blank"
                    >
                      Customer Portal
                    </a>
                  </li>
                  <li className="dropdown-divider custom-dropdown-divider" />
                  <li>
                    <a
                      className="dropdown-item nav-dropdown-item"
                      href="https://www.cfsdealerportal.com/Dealer/DealerLogin.aspx?ReturnUrl=%2fDealer"
                      target="blank"
                    >
                      Dealer Portal
                    </a>
                  </li>
                </ul>
              </li>
              <li className={`nav-item position-relative custom-nav-item ${window.location.pathname === "/ContactUs" ? "active" : ""}`}>
                <a
                  className="nav-link cfs-nav-item text-nowrap"
                  href="/ContactUs"
                >
                  CONTACT US
                </a>
              </li>
              <li className={`nav-item position-relative custom-nav-item ${window.location.pathname === "/Careers" ? "active" : ""}`}>
                <a className="nav-link cfs-nav-item" href="/Careers">
                  CAREERS
                </a>
              </li>
            </ul>
            <a
              className="header-button ms-auto text-nowrap text-decoration-none mb-4 mb-lg-0"
              type="button"
              href="https://mycfs.cfs.canon.com/"
              target="_blank"
            >
              MAKE A PAYMENT
            </a>
          </div>
        </div>
      </nav>
      {/* header ends  here */}
    </>

  );
}