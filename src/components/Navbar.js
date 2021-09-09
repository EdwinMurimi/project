import React, { useState } from 'react';
import  { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';


function Navbar() {

  const { logout, currentUser } = useAuth();

  const [error, setError] = useState('');
  const history = useHistory();

  async function handleLogout() {
    setError('');
    await logout();
    history.push('/');
  }

  return (
    <div style={{ height: '70px' }} className="navbar navbar-light bg-light">
      <nav style={{ height: "100%", width: '100%', margin: 'auto', maxWidth: "1180px" }} >
        <div style={{ padding: '0 auto', display: 'flex', justifyContent: 'space-between' }} className="container-fluid">
          <Link style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '250px' }} className="navbar-brand" >
            <img src="https://img.icons8.com/color/48/000000/corn.png" alt="" width="40" height="40" className="d-inline-block align-text-top" />
            Crop Prediction App
          </Link>
          {!currentUser ? '' : <button type="button" class="btn btn-danger btn-sm" onClick={handleLogout}>Log out</button>}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;