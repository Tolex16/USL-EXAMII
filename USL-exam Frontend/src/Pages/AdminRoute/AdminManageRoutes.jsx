import React, { useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Styles from './AdminManageRoutes.module.css';
import { useNavigate } from 'react-router-dom';
import { AddSharp } from '@mui/icons-material';
import axios from 'axios';
import { BASE_URL } from '../../config';

function AdminManageRoutes() {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [routeDetails, setRouteDetails] = useState({
    origin: '',
    destination: '',
    departureDate: '',
    departureTime: '',
    duration: '',
    price: '',
  });

  const handleRouteSubmit = async (e) => {
    e.preventDefault();
    try {

      const response = await axios.post(`${BASE_URL}/admin/routes/create`, routeDetails, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        "Content-Type": "application/json",
        },
      });

      if (response.status === 201) {
        navigate('/');
      } else {
        setError('Failed to create or update route. Please try again.');
      }
    } catch (err) {
      setError('Error occurred while processing your request.');
      console.error(err);
    }
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setRouteDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  return (
    <>
      <Navbar />
      <div className={Styles.container}>
        <form onSubmit={handleRouteSubmit} className={Styles.form}>
          <h1 style={{ textAlign: 'center' }}>Manage Routes & Buses</h1>

          <label>Origin:</label>
          <input
            type="text"
            name="origin"
            value={routeDetails.origin}
            onChange={handleChange}
            placeholder="Enter Origin"
            required
          />

          <label>Destination:</label>
          <input
            type="text"
            name="destination"
            value={routeDetails.destination}
            onChange={handleChange}
            placeholder="Enter Destination"
            required
          />

          <label>Departure Date:</label>
          <input
            type="date"
            name="departureDate"
            value={routeDetails.departureDate}
            onChange={handleChange}
            placeholder="Enter Departure Date"
            required
          />

          <label>Departure Time:</label>
          <input
            type="time"
            name="departureTime"
            value={routeDetails.departureTime}
            onChange={handleChange}
            required
          />

          <label>Duration:</label>
          <input
            type="text"
            name="duration"
            value={routeDetails.duration}
            onChange={handleChange}
            placeholder="Enter Duration"
            required
          />

          <label>Price:</label>
          <input
            type= "number"
            name= "price"
            value={routeDetails.contact}
            onChange={handleChange}
            placeholder="Enter Operator Contact"
            required
          />

          <button className={Styles.submit} type="submit">
            Submit <AddSharp />
          </button>

          {error && <p className={Styles.error}>{error}</p>}
        </form>
      </div>
      <Footer />
    </>
  );
}

export default AdminManageRoutes;
