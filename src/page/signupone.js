"use client";

import './all.css';
import { useState } from 'react';
import React from 'react';

function Signupone() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    name: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    dob: '',
    identificationNumber: '',
    laserCode: '',
    issueDate: '',
    expiryDate: '',
    address: '',
    bank: '',
    bankBranch: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form data:', formData);
  };

  return (
    <section>
      <div className="back">
        <div className="front">
          <h1 className="name">Bettertogether Pets</h1>

          <div className="all">
            
          <div className="photo">
            <h1>อัปโหลดรูปภาพ</h1>
            <form action="/upload" method="post" enctype="multipart/form-data">
            <input type="file" name="file" accept="image/*" />
            </form>
            </div>

            <h3>role</h3>
            <div className="check">
              <input type="checkbox" name="option1" /> Users
              <p></p>
              <input type="checkbox" name="option2" /> Volunteer
            </div>

            <section className="boxtext">
              <div>
                <h4>Username</h4>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="text-input"
                />
              </div>
              <div>
                <h4>Password</h4>
                <input
                  type="text"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="text-input1"
                />
              </div>
              
            </section>

            <h3>work issues</h3>
            <div className="checky">
              <input type="checkbox" name="option3" /> Accommodation
              <input type="checkbox" name="option4" /> Medicine
              <input type="checkbox" name="option5" /> Responsible for temporary care
            </div>

            <div className="column">
              <h4>Name</h4>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="text-input2"
              />
              <h4>Last Name</h4>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="text-input3"
              />
            </div>

            <div className="column1">
              <h4>E-mail</h4>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="text-input4"
              />
              <h4>Phone number</h4>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="text-input5"
              />
            </div>
            <div className="column2">
              <h4>Age</h4>
              <input
                type="text"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="text-input6"
              />
              <h4>Date of birth</h4>
              <input
                type="text"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="text-input7"
              />
            </div>
            <div className="column3">
              <h4>Identification Number</h4>
              <input
                type="text"
                name="identificationNumber"
                value={formData.identificationNumber}
                onChange={handleChange}
                className="text-input8"
              />
              <h4>Laser Code</h4>
              <input
                type="text"
                name="laserCode"
                value={formData.laserCode}
                onChange={handleChange}
                className="text-input9"
              />
            </div>
            <div className="column4">
              <h4>Date of issue</h4>
              <input
                type="text"
                name="issueDate"
                value={formData.issueDate}
                onChange={handleChange}
                className="text-input10"
              />
              <h4>Date of expiry</h4>
              <input
                type="text"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                className="text-input11"
              />
            </div>
            <h4>Address</h4>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="text-input12"
            />

            <button className="click" onClick={handleSubmit}>
              SIGN UP
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Signupone