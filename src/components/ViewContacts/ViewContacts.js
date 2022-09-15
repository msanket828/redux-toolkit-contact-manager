import React from 'react'
import { useSelector } from 'react-redux';
import './ViewContacts.css';

const ViewContacts = () => {
  const allContacts = useSelector((state) => state.contactManager);

  const makeShortName = (name) => {
    let firstLetter=name.slice(0, 1);
    let lastLetter=name.slice(name.split('').findIndex((char) => char === ' ')+ 1, name.split('').findIndex((char) => char === ' ') + 2)
    return firstLetter + lastLetter;
  }
  return (
    <div className='contact-container view-contacts'>
      {
        allContacts.map((contact) => {
          return (
            <div className='ind-contact-block' key={contact.id}>
              <div className='ind-contact-block-profile'>{makeShortName(contact.fullName)}</div>
              <div className='ind-contact-block-info'>
                <h3 className='name'>{contact.fullName}</h3>
                <p className='contact-no'>{contact.contactNumber}</p>
                <p className='email'>{contact.emailId}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default ViewContacts