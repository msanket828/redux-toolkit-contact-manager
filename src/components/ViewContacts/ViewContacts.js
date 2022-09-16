import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../features/contactSlice';
import './ViewContacts.css';

const ViewContacts = () => {
  const dispatch = useDispatch();
  const allContacts = useSelector((state) => state.contactManager.contacts);

  const makeShortName = (name) => {
    let firstLetter = name.slice(0, 1);
    let lastLetter = name.slice(name.split('').findIndex((char) => char === ' ') + 1, name.split('').findIndex((char) => char === ' ') + 2)
    return firstLetter + lastLetter;
  }
  const [selectedId, setSelectedId] = useState();
  const clickedOnContact = (id) => {
    setSelectedId(id);
  }
  return (
    <div className='contact-container view-contacts'>
      {
        allContacts.map((contact) => {
          return (
            <div className={`${selectedId === contact.id ? 'ind-contact-block clicked' : 'ind-contact-block'}`} key={contact.id} onMouseEnter={() => clickedOnContact(contact.id)}
            onMouseLeave={()=>setSelectedId('')}>
              <div className='ind-contact-block-profile'>{makeShortName(contact.fullName)}</div>
              <div className='ind-contact-block-info'>
                <h3 className='name'>{contact.fullName}</h3>
                <p className='contact-no'>{contact.contactNumber}</p>
                <p className='email'>{contact.emailId}</p>
              </div>
              <div className='floating-cta delete' role="button" onClick={() => dispatch(deleteContact(contact.id))}>
                <img src='./delete.svg' alt='edit' className='img-fluid' />
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default ViewContacts