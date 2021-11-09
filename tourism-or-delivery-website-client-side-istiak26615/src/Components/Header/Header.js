import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import useFirebase from '../../Hooks/useFirebase';
import './Header.css'

const Header = (props) => {
  const {user, logout}=useAuth();
    return (
        <div className="MenuBar-container menubar mt-2  d-flex align-items-center">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-4">
            
              <div className="logo-img">
              <Link to="/" className=" d-flex align-items-center items">
                <img className="w-20" src="https://imgdb.net/storage/uploads/b28b8932a10b244cfcd33ec5ad3bc2322e3c882c4409a6eccd494f0f3c13a2f8.png" alt="" />
                <h3 className="logoname">দ্যা ট্রাভেলপোকা - The Travelpoka</h3>
                </Link>
                
              </div>
              
            </div>
            <div className="col-md-8">
              <div className="menu-container">
                <ul className="d-flex align-items-center justify-content-end ">
                  
                  <Link to="/" className="items">
                    <li>Home</li>
                  </Link>
                  <Link to="/about" className="items">
                    <li>About</li>
                  </Link>
                  {user.email?
                  <Link to="/myorder" className="items">
                  <li>My Orders</li></Link>:''}
                  {user.email?
                  <Link to="/manageAllOrder" className="items">
                  <li>Manage All Orders</li></Link>:''}
                  {user.email?
                  <Link to="/addNewService" className="items">
                  <li>Add New Service</li></Link>:''}
                  {!user.email?
                  <Link to="/login" className="items">
                  <li>Login</li></Link>:
                  <Link to="/login" className="items d-flex align-items-center">
                  <li onClick={logout}>Logout</li>
                  
                  </Link>
                  }
                  {user.email?<small className="user-name">Signed in as {user.displayName}</small>:<p></p>}
                  
                  
                </ul>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Header;