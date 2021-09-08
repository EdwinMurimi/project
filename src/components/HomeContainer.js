import React from 'react';
import PricesComponent from './PricesComponent';
import SellersComponent from './SellersComponent';


const HomeContainer = ()=> {
  return (
    <>
      <div style={{ display: 'flex', height: '70px', alignItems: 'center', justifyContent: 'center' }} className="container">
        <ul style={{ width: '100%', margin: 'auto' }} className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li style={{ flex: 1 }} className="nav-item" role="presentation">
            <button className="nav-link w-100 active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
          </li>
          <li style={{ flex: 1 }} className="nav-item" role="presentation">
            <button className="nav-link  w-100" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
          </li>
          <li style={{ flex: 1 }} className="nav-item" role="presentation">
            <button className="nav-link w-100" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>
          </li>
        </ul>
      </div>
      <div className="tab-content container" id="pills-tabContent">
        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
          <PricesComponent />
        </div>
        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
          <SellersComponent />
        </div>
        <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">Charts</div>
      </div>
    </>
  );
}

export  default HomeContainer;