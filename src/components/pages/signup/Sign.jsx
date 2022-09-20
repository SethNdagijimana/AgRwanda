import React, {useState, useEffect} from 'react';
import Navbar from '../../navbar/Navbar';
import "./sign.css";
import Select from "react-select";
import bgreen from "../../../assets/PartGreen.png";
import bgreenI from "../../../assets/InGreen.png";
import {useNavigate} from "react-router-dom";
import { UserRepository } from '../../../repository/User-repository';
import getFormData from "../../../utilis/get-form-data";

function Sign() {

  const[ users, setUsers] = useState([]);
  const userRepo = new UserRepository();
   useEffect(() => {
    
     (async () => {
       const getRepo = await UserRepository.registerUser();
       setUsers (getRepo);
     })();

   },[])

   const option =[
    { value:"Seller", label: "Seller"},
    { value:"Buyer", label: "Buyer"},
    
      ]

  const [isLoading, setIsLoading] = useState (false);
  const navigate = useNavigate();

 
  /**
   * 
   * @param {Event} evt
   */

  const submitUserData = async (evt) => {
    evt.preventDefault();
    /**
     * @type {HTMLFormElement}
     */
    const form = evt.target;

    /**
     * @type {RegisterUserData}
     */
     const formData = getFormData (form);
     console.log(formData);
      setIsLoading(true);
      const resp = await userRepo.registerUser (formData);
      // setIsLoading(true);
      
      if(resp === formData){
       navigate("/login");
      }
    }
    
  
  return (
    <div>
        <Navbar />
        <img src={bgreen}alt='' className='PartGreen'/>
        <img src={bgreenI}alt='' className='InGreen'/>
        <form onSubmit={submitUserData} action="">
        <p className='Sign'>SIGN UP</p>
        <div className='AllSign'>
        <input name="names" type={"text"} placeholder="Names" className='names' required/>
        <input name ="email" type={"email"} placeholder="Email" className='Email'required/>
        <input name= "phone_number" type={"tel"} placeholder="Phone Number" className='phone'required/>
        <input name="id_number" type={"number"} placeholder="ID number" className='idnum'required/>
        <input name="tin_number"type={"number"} placeholder="Tin number" className='idnum'required/>

        <input name = "password" type={"password"} placeholder="Password" className='pass'required/>
       
        <Select
                options= {option}
                  name="categories"
                  className="input"
                  id='input'

                />
                
                             
              

        <input name ="location" type={"Location"} placeholder="Location" className='locate'required/>
        </div>
        <div className="signup_button">
        <button type='submit' className='signing_up'>
        {
          isLoading ? " Loading...": " create account"
        }
        
        </button>

        </div>
        </form>
    </div>
    
  )
}
export default Sign