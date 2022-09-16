import React, { useEffect } from 'react';
import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isRedirect,setIsRedirect]=useState(true);
  const location=useLocation();

  const handleRedirectPage=()=> {
    setIsRedirect(!isRedirect);
  }

  useEffect(() => {
    location.pathname.includes('viewcontacts') && setIsRedirect(false)
  }, [location.pathname])
  

  return (
    <header>
      <nav>
        <h1>Contact Manager</h1>
        <div className='nav-link-container'>
          <NavLink className='btn btn-primary' to={`${isRedirect ? 'viewcontacts':'addcontacts'}`}
          onClick={handleRedirectPage}>{isRedirect ? 'View Contacts' : 'Add Contacts'}</NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Header