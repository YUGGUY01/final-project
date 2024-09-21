import './all.css';
import { useState } from 'react';
// Remove Signup import if not needed

function Signuptwo() {
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
            {/* Include Signup component if needed */}
            {/* <Signup /> */}

            <h3>Role</h3>
            <div className="check">
              <input type="checkbox" name="roleUser" />
              Users
              <input type="checkbox" name="roleVolunteer" />
              Volunteer
            </div>

            <section className="boxtext">
            <div className="column0">
              <h4>UserName</h4>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="text-input101"
              />
              <h4>Password</h4>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="text-input102"
              />
            </div>
            </section>

            <h3>Work Issues</h3>
            <div className="checky">
              <input type="checkbox" name="workIssueAccommodation" />
              Accommodation
              <input type="checkbox" name="workIssueMedicine" />
              Medicine
              <input type="checkbox" name="workIssueTemporaryCare" />
              Responsible for temporary care
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
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="text-input4"
              />
              <h4>Phone Number</h4>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="text-input5"
              />
            </div>
            <div className="column2">
              <h4>Age</h4>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="text-input6"
              />
              <h4>Date of Birth</h4>
              <input
                type="date"
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
              <h4>Date of Issue</h4>
              <input
                type="date"
                name="issueDate"
                value={formData.issueDate}
                onChange={handleChange}
                className="text-input10"
              />
              <h4>Date of Expiry</h4>
              <input
                type="date"
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

            <div className="column5">
              <h4>Bank</h4>
              <input
                type="text"
                name="bank"
                value={formData.bank}
                onChange={handleChange}
                className="text-input13"
              />
              <h4>Bank Branch</h4>
              <input
                type="text"
                name="bankBranch"
                value={formData.bankBranch}
                onChange={handleChange}
                className="text-input14"
              />
            </div>

            <div className="column6">
              <h4>Account Name</h4>
              <input
                type="text"
                name="Account Name"
                value={formData.accountName}
                onChange={handleChange}
                className="text-input15"
              />
              <h4>Account Number</h4>
              <input
                type="text"
                name="Accoount Number"
                value={formData.AccountNumber}
                onChange={handleChange}
                className="text-input16"
              />
            </div>

             

            <button className="click" onClick={handleSubmit}>
              SIGN UP
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signuptwo;
