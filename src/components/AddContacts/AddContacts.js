import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContacts } from "../../features/contactSlice";
import "./AddContacts.css";
import { v4 as uuidv4 } from 'uuid';
import { useNavigate  } from "react-router-dom";



const AddContacts = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const [fullName, setFullName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [emailId, setEmailId] = useState("");

  const handleFullName = (e) => {
    setFullName(e.target.value);
  };

  const handleContactNumber = (e) => {
    setContactNumber(e.target.value);
  };

  const handleEmailId = (e) => {
    setEmailId(e.target.value);
  };

  const handleAddContactSubmit = (e) => {
    e.preventDefault();
    if (fullName === "" || contactNumber === "" || emailId === "") {
      alert("please fill all values");
    } else {
      dispatch(addContacts({
        id: uuidv4(),
        fullName:fullName, 
        contactNumber:contactNumber,
        emailId:emailId
      }));
      navigate('/viewcontacts');
    }
  };

  return (
    <div className="contact-container add-contact">
      <form autoComplete="off" onSubmit={handleAddContactSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">FullName</label>
          <input
            type="text"
            name=""
            id="fullName"
            placeholder="Enter your Name"
            className="form-control"
            value={fullName}
            onChange={handleFullName}
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactNumber">Contact No</label>
          <input
            type="tel"
            name=""
            id="contactNumber"
            placeholder="Enter your Contact Number"
            className="form-control"
            value={contactNumber}
            maxLength="10"
            onChange={handleContactNumber}
          />
        </div>
        <div className="form-group">
          <label htmlFor="emailId">Email ID</label>
          <input
            type="email"
            name=""
            id="emailId"
            placeholder="Enter your Email ID"
            className="form-control"
            value={emailId}
            onChange={handleEmailId}
          />
        </div>
        <button type="submit" className="cta primary-cta">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddContacts;
