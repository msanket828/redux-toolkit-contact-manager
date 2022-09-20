import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import * as Yup from 'yup';
import { addContacts } from "../../features/contactSlice";
import "./AddContacts.css";



const AddContacts = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();


  const formik=useFormik({
    initialValues: {
      fullName:"",
      contactNumber:"",
      emailId: ""
    },
    validationSchema: Yup.object({
      fullName: Yup.string().max(25,"Fullname should not exceed than 25 characters").required('FullName is required'),
      contactNumber:Yup.number().required('Contact number required'),
      emailId:Yup.string().email('Invalid Email id').required('Email id is required')
    }),
    onSubmit:(values)=>{      
      console.log(values);
      dispatch(addContacts({
        ...values,
        id: uuidv4()
      }));
      navigate('/viewcontacts');
    }
  })



  return (
    <div className="contact-container add-contact">
      <form autoComplete="off" onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">FullName</label>
          <input
            type="text"
            name=""
            id="fullName"
            placeholder="Enter your Name"
            className="form-control"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {
            formik.touched.fullName && formik.errors.fullName ? <p className="formik-error">***{formik.errors.fullName}</p> : ''
          }
        </div>
        <div className="form-group">
          <label htmlFor="contactNumber">Contact No</label>
          <input
            type="tel"
            name=""
            id="contactNumber"
            placeholder="Enter your Contact Number"
            className="form-control"
            maxLength="10"
            value={formik.values.contactNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {
            formik.touched.contactNumber && formik.errors.contactNumber ? <p className="formik-error">***{formik.errors.contactNumber}</p> : ''
          }
        </div>
        <div className="form-group">
          <label htmlFor="emailId">Email ID</label>
          <input
            type="email"
            name=""
            id="emailId"
            placeholder="Enter your Email ID"
            className="form-control"
            value={formik.values.emailId}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
           {
            formik.touched.emailId && formik.errors.emailId ? <p className="formik-error">***{formik.errors.emailId}</p> : ''
          }
        </div>
        <button type="submit" className="cta primary-cta">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddContacts;
