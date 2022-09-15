import React, { useEffect } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isRedirect,setIsRedirect]=useState(true);

  const handleRedirectPage=()=> {
    setIsRedirect(!isRedirect);
  }

  useEffect(() => {
    window.location.pathname.includes('viewcontacts') && setIsRedirect(!isRedirect)
  }, [])
  

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