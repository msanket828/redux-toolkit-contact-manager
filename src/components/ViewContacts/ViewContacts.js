import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, updateContact } from '../../features/contactSlice';
import './ViewContacts.css';

const ViewContacts = () => {
  const dispatch = useDispatch();
  const allContacts = useSelector((state) => state.contactManager.contacts);

  const [selectedId, setSelectedId] = useState();
  const [showModal, setShowModal] = useState(false);
  const [editContact, setEditContact] = useState();

  /* ------------------------- updated contact details ------------------------ */
  const [editedContactId,setEditedContactId]=useState();
  const [uFullName, setUfullName] = useState('');
  const [uContactNumber, setUcontactNumber] = useState('');
  const [uEmailId, setUemailId] = useState('');

  const handleClose = () => setShowModal(false);

  const makeShortName = (name) => {
    let firstLetter = name.slice(0, 1);
    let lastLetter = name.slice(name.split('').findIndex((char) => char === ' ') + 1, name.split('').findIndex((char) => char === ' ') + 2)
    return firstLetter + lastLetter;
  }

  const clickedOnContact = (id) => {
    setSelectedId(id);
  }

  const handleEdit = (id) => {
    setShowModal(true);
    setEditContact(allContacts.find((contact) => contact.id === id));
  }

  /* ------------------------------- edit popup ------------------------------- */
  const handleUpdatedFullName = (e) => {
    setUfullName(e.target.value);
  }

  const handleUpdatedContactNumber = (e) => {
    setUcontactNumber(e.target.value);
  }

  const handleUpdatedEmailId = (e) => {
    setUemailId(e.target.value);
  }

  useEffect(() => {
    if (editContact) {
      setUfullName(editContact.fullName);
      setUcontactNumber(editContact.contactNumber);
      setUemailId(editContact.emailId);
      setEditedContactId(editContact.id);
    }
  }, [editContact])

  const onSubmitUpdateRecord =(e)=> {
    e.preventDefault();
    if(uFullName === '' || uContactNumber === '' || uEmailId === '') {
      alert('please fill all values');
    } else {
      dispatch(updateContact({
        id:editedContactId,
        fullName:uFullName,
        contactNumber: uContactNumber,
        emailId: uEmailId
      }));
      setShowModal(false);
    }
  }

  return (
    <>
      <div className='contact-container view-contacts'>
        {
          allContacts.map((contact) => {
            return (
              <div className={`${selectedId === contact.id ? 'ind-contact-block clicked' : 'ind-contact-block'}`} key={contact.id} onMouseEnter={() => clickedOnContact(contact.id)}
                onMouseLeave={() => setSelectedId('')}>
                <div className='ind-contact-block-profile'>{makeShortName(contact.fullName)}</div>
                <div className='ind-contact-block-info'>
                  <h3 className='name'>{contact.fullName}</h3>
                  <p className='contact-no'>{contact.contactNumber}</p>
                  <p className='email'>{contact.emailId}</p>
                </div>
                <div className='floating-cta delete' role="button" onClick={() => dispatch(deleteContact(contact.id))}>
                  <img src='./delete.svg' alt='delete' className='img-fluid' />
                </div>
                <div className="floating-cta edit" role="button" onClick={() => handleEdit(contact.id)}>
                  <img src='./edit.svg' alt='edit' className='img-fluid' />
                </div>
              </div>
            )
          })
        }
      </div>
      {/* ---------------------------------- model --------------------------------- */}
      <Modal show={showModal} onHide={handleClose} centered
        dialogClassName='customWidth'>
        <Modal.Header closeButton className='py-2'>
          <h3>Edit Contact</h3>
        </Modal.Header>
        <Modal.Body>
          <form action="" autoComplete='off' onSubmit={onSubmitUpdateRecord}>
            <div className="form-group">
              <label htmlFor="uFullName">Update FullName</label>
              <input type="text" id="uFullName" className='form-control' placeholder='Enter Updated Full Name'
                value={uFullName}
                onChange={handleUpdatedFullName}
              />
            </div>
            <div className="form-group">
              <label htmlFor="uContactNumber">Update Contact Number</label>
              <input type="tel" className='form-control' placeholder='Enter Updated Contact number' id='uContactNumber' maxLength="10"
                value={uContactNumber}
                onChange={handleUpdatedContactNumber}
              />
            </div>
            <div className="form-group">
              <label htmlFor="uEmailId">Update Email Id</label>
              <input type="email" className='form-control' placeholder='Enter Updated Email Id' id='uEmailId'
                value={uEmailId}
                onChange={handleUpdatedEmailId}
              />
            </div>
            <div className="text-center mt-4">
              <button type='submit' className='cta primary-cta'>Update</button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ViewContacts