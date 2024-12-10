import { useNavigate } from "react-router-dom";
import Style from "./SignUp.module.css";
import { useState } from "react";
import register from "../../Assets/register.jpg"
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import {BASE_URL} from "../../config";

const OperatorSignUp = () => {
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [validationErrors, setValidationErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const [user , setUser] = useState
  ({driverName:'',
    busNumber:'',
    busModel:'',
    capacity:'',
    routeId:'',
    phoneNumber:''});  

const validateFields = () => {
      const errors = {};
      if (!user.driverName.trim()) errors.driverName = "Driver Name is required.";
      
      if (!user.phoneNumber.trim()) errors.phoneNumber = "Phone Number is required.";
   
      return errors;
};

  const handleOperator = async (e) => {
    e.preventDefault();
    try {
    const errors = validateFields();
    setValidationErrors(errors);
    if (Object.keys(errors).length > 0) return;

      const response = await
        axios.post(`${BASE_URL}/admin/create-bus`, user,
        {
        headers:{
          'Content-Type': 'application/json',
        }
      });

      if (response.status === 200) {
        toast.success('Bus operator added');
        navigate('/');
      } else {
        throw new Error('Registration failed');
      }
    } catch (err) {
      if (err.response?.status === 400) {
        console.error('Error during registration:', err);
        toast.error("Operator already exists or invalid data.");
        setError("Operator already exists or invalid data.");
      } else {
        toast.error("Failed to sign up. Please try again later.");
        setError("Unexpected error occurred. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevUser => ({ ...prevUser, [name]: value }));
    setValidationErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  
  return (   
  <>
  <Navbar/>
  <div className={Style.container}>
      <div className={Style.form}>
        <form onSubmit={handleOperator}>
          <h1>Create Bus Operator</h1>
          <label>Driver Name:</label>
          {validationErrors.driverName && (
          <p className={Style.error}>{validationErrors.firstName}</p>
        )}
          <input type="text" name="driverName" value={user.driverName} onChange={handleChange} placeholder="Enter your First name" required />
          <label>Bus Number:</label>
          <input type="number" name="busNumber" value={user.busNumber} onChange={handleChange} placeholder="Enter your Bus Number" required/>

          <label>Phone number:</label>
          <input type="text" name="phoneNumber" value={user.phoneNumber} onChange={handleChange} placeholder="Enter your phone no" required/>
          {validationErrors.phoneNumber && (
          <p className={Style.error}>{validationErrors.phoneNumber}</p>
        )}
          <label>Bus Model:</label>
          <input type="text" name="busModel" value={user.busModel} onChange={handleChange} placeholder="Enter your bus model" required/>
       
          <label>Capacity:</label>
          <input type="number" name="capacity" value={user.capacity} onChange={handleChange} placeholder="Enter your capacity" required/>
        </form>
      </div>
      <div className={Style.imageContainer}>
        <img className={Style.image} src={register} alt="user" />
      </div>
    </div>
    <Footer/> 
    <ToastContainer />
   </>
   
  );
};

export default OperatorSignUp;
