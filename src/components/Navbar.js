import React from 'react';
import  { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div style={{ height: '70px' }} className="navbar navbar-light bg-light">
      <nav style={{ height: "100%", width: '100%', margin: 'auto', maxWidth: "1180px" }} >
        <div style={{ padding: '0 auto' }} className="container-fluid">
          <Link style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '250px' }} className="navbar-brand" >
            <img src="https://img.icons8.com/color/48/000000/corn.png" alt="" width="40" height="40" className="d-inline-block align-text-top" />
            Crop Prediction App
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;