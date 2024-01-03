import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { Header } from "./component/header";
import { Footer } from "./component/footer";
import { Careers } from "./component/careers";
import { CustomerFinancing } from "./component/customerFinancing";
import { DealerFinancing } from "./component/dealerFinancing";
import { Faq } from "./component/faq";
import { HomePage } from "./component/homePage";
import { Industries } from "./component/industries";
import { InventoryFinancing } from "./component/inventoryFinancing";
import { Portal } from "./component/portal";
import { AboutUs } from "./component/aboutUs";
import { ContactUs } from "./component/contactUs";
import { PrivacyRights } from "./component/privacyRights";
import { PrivacyStatement } from "./component/privacyStatement";
import { TermsOfUse } from "./component/termsOfUse";

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/Careers' element={<Careers />}></Route>
          <Route path='/CustomerFinancing' element={<CustomerFinancing />}></Route>
          <Route path='/DealerFinancing' element={<DealerFinancing />}></Route>
          <Route path='/Industries' element={<Industries />}></Route>
          <Route path='/InventoryFinancing' element={<InventoryFinancing />}></Route>
          <Route path='/Portal' element={<Portal />}></Route>
          <Route path='/ContactUs' element={<ContactUs />}></Route>
          <Route path='/AboutUs' element={<AboutUs />}></Route>
          <Route path='/Faq' element={<Faq />}></Route>
          <Route path='/Termsofuse' element={<TermsOfUse />}></Route>
          <Route path='/PrivacyRights' element={<PrivacyRights />}></Route>
          <Route path='/PrivacyStatement' element={<PrivacyStatement />}></Route>
        </Routes >
      </React.Fragment>
      <Footer />
    </BrowserRouter >
  );
}


export default App;