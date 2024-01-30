// src/components/PersonalInfoForm.js
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { countries } from 'countries-list';

import './PersonalInfoForm.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateFormField } from '../Redux/actions';

const PersonalInfoForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const personalInfoFormData = useSelector((state) => state.genericForms.forms.PersonalInfoForm);
  const fileInputRef = useRef(null);

  const [countryNames, setCountryNames] = useState([]);

  const handleButtonClick = () => {
    // Trigger click on the hidden file input
    fileInputRef.current.click();
  };

  useEffect(() => {
    // Extract country names and codes
    const countryList = Object.entries(countries);
    const names = countryList.map(([code, details]) => details.name);

    setCountryNames(names);
  }, []);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    
    // Handle file input separately
    if (type === 'file') {
      const file = e.target.files[0];
      const fileObject = { name: file.name, size: file.size, type: file.type };
      dispatch(updateFormField('PersonalInfoForm', name, fileObject ));
    } else {
      dispatch(updateFormField('PersonalInfoForm', name, value ));
    }
  };

  const handleSubmit = (e) => {
    console.log(personalInfoFormData);
    e.preventDefault();
    
    // You can add form submission logic here

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validEmail = emailRegex.test(personalInfoFormData.email);
    const validConfirmEmail = emailRegex.test(personalInfoFormData.confirmEmail);

    if ((validEmail === false) || (validConfirmEmail === false)){ 
      alert('Please enter a valid email');
      return;
    } 

    if (personalInfoFormData.email !== personalInfoFormData.confirmEmail){
      alert("Email id don't match");
      return;
    }

    fetch('http://localhost:8000/User/PersonalInfo/',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers as needed
      },
      body: JSON.stringify(personalInfoFormData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Backend response:', data);
    })
    .catch(error => {
      console.log("Error sending data to backend:", error);
    })
  };

  return (
    <div className='container'>
      <div className='form-style'>
        <h1>Personal Information</h1>
        <div className="input-group">
          <div className="input-group-item">
            <label className='label-style'>
              First Name:
              <input
                type="text"
                name="firstName"
                value={personalInfoFormData.firstName}
                onChange={handleChange}
                className='input-style'
                placeholder='First Name'
                required
              />
            </label>
          </div>
          <div className="input-group-item">
            <label className='label-style'>
              Last Name:
              <input
                type="text"
                name="lastName"
                value={personalInfoFormData.lastName}
                onChange={handleChange}
                className='input-style'
                placeholder='Last Name'
              />
            </label>
          </div>
        </div>
        <br />
        <div className="photo-upload">
          <label className='photo-label-style'>
            Photo:
            <input
              type="file"
              ref={fileInputRef}
              name="photo"
              //value={formData.PersonalInfoForm.photo}
              accept="image/*"
              onChange={handleChange}
              className='input-style'
              style={{display: 'none'}}
            />
            <button className="custom-file-button" onClick={handleButtonClick}>
              Choose File
            </button>
            <div className="file-info-container">
              {!personalInfoFormData.photo && <p className='file-info'>No file chosen</p>}
              {personalInfoFormData.photo && <p className='file-info'>{personalInfoFormData.photo.name}</p>}
            </div>
          </label>
        </div>
        <br />
        <div className='input-group'>
          <div className='input-group-item'>
            <label className='form-label label-style'>
              Email:
              <input
                type="email"
                name="email"
                value={personalInfoFormData.email}
                onChange={handleChange}
                className='input-style'
                placeholder='Email'
                required
              />
            </label>
          </div>
          <div className="input-group-item">
            <label className='label-style'>
                Confirm Email:
                <input
                  type="confirmEmail"
                  name="confirmEmail"
                  value={personalInfoFormData.confirmEmail}
                  onChange={handleChange}
                  className='input-style'
                  placeholder='Confirm Email'
                  required
                />
              </label>
          </div>
        </div>
          <br />
          <label className='label-style'>
            Address(line 1):
            <input
              type="text"
              name="street"
              value={personalInfoFormData.street}
              onChange={handleChange}
              className='input-style'
              placeholder='Street/Locality'
            />
          </label>
          <br />
          <label className='label-style'>
            Address(line 2):
            <input
              type="text"
              name="city"
              value={personalInfoFormData.city}
              onChange={handleChange}
              className='input-style'
              placeholder='City/Town/Village'
            />
          </label>
          <br />
          <div className='input-group'>
            <div className='input-group-item'>
              <label className='label-style'>
                State:
                <input
                  type="text"
                  name="state"
                  value={personalInfoFormData.state}
                  onChange={handleChange}
                  className='input-style'
                  placeholder='State'
                />
              </label>
            </div>
            <div className='input-group-item'>
              <label className='label-style'>
                PIN:
                <input
                  type="text"
                  name="pin"
                  value={personalInfoFormData.pin}
                  onChange={handleChange}
                  className='input-style'
                  placeholder='PIN Code'
                  required
                />
              </label>
            </div>
          </div>
          <br />
          <label className='label-style'>
            Country:
            <select name="country" onChange={handleChange} className='select-style' placeholder='Country'>
              {countryNames.map((name, index) => (
                <option key={index} value={personalInfoFormData.country}>
                  {name}
                </option>
              ))}
            </select>
          </label>
          <br />
          <div className='d-flex justify-content-center'>
          <button type="submit" className='button-style' onClick={() => {console.log(personalInfoFormData);navigate('/DescriptionInfo')}}>Next</button>
          </div>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
