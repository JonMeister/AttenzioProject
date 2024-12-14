import React, { useState, useEffect } from 'react';
import './styles.css';
import { useNavigate } from "react-router-dom";
import UserCard from '../../components/user.card';

import { fetchUser, createUser } from '../../api/userApi';

const User = () => {
  let navigate = useNavigate();
  
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    picture: '',
    address: '',
    cc: '',
    phone: '',
    proofOfRegistration: '',
    professionalLicense: '',
    role: 'Administrator',
  });

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchUser();
      setUsers(data);
    };
    getUsers();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = Object.values(formData).every((value) => value.trim() !== '');
    if (isValid) {
      await createUser(formData);
      const updatedUsers = await fetchUser();
      setUsers(updatedUsers);
      setFormData({
        name: '',
        lastName: '',
        email: '',
        password: '',
        picture: '',
        address: '',
        cc: '',
        phone: '',
        proofOfRegistration: '',
        professionalLicense: '',
        role: 'Administrator',
      });
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div>
      <div className="login-header">
        <h1>Sign Up</h1>
      </div>
      <div className="home-container">
        <div className="content">
          <div className="form-container">
            <form onSubmit={handleSubmit} className="user-form">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="lastName">Last name:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="picture">Picture:</label>
              <input
                type="text"
                id="picture"
                name="picture"
                value={formData.picture}
                onChange={handleInputChange}
              />

              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="cc">Cc:</label>
              <input
                type="text"
                id="cc"
                name="cc"
                value={formData.cc}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="phone">Phone number:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="proofOfRegistration">Proof of registration:</label>
              <input
                type="text"
                id="proofOfRegistration"
                name="proofOfRegistration"
                value={formData.proofOfRegistration}
                onChange={handleInputChange}
              />

              <label htmlFor="professionalLicense">Professional license number:</label>
              <input
                type="text"
                id="professionalLicense"
                name="professionalLicense"
                value={formData.professionalLicense}
                onChange={handleInputChange}
              />

              <label htmlFor="role">Role:</label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleInputChange}
              >
                <option value="1">Administrator</option>
                <option value="2">Teacher</option>
                <option value="3">Teaching Staff</option>
                <option value="4">Student</option>
              </select>


              <div className="button-container">
                <button
                  className="login-button"
                  type="button"
                  onClick={() => navigate(-1)}
                >
                  Return
                </button>
                <button className="login-button" type="submit">
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
