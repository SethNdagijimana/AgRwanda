import React, {useState, useEffect} from 'react';
import Navbar from '../../navbar/Navbar';
import "./sign.css";
import bgreen from "../../../assets/PartGreen.png";
import bgreenI from "../../../assets/InGreen.png";
import {Link, useNavigate} from "react-router-dom";
import { UserRepository } from '../../../repository/User-repository';
import checkPassword from "../../../utilis/check-password/";
import getFormData from "../../../utilis/get-form-data";

function Sign() {

  const[ users, setUsers] = useState([]);
  useEffect(() => {
    (async () => {
      const getRepo = await UserRepository.registerUser();
      setUsers (getRepo);
    })
  },[])
  const userRepos = new UserRepository(checkPassword);
  const [isLoading, setIsLoading] = useState (false);
  const navigate = useNavigate();
};
 
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
     const resp = await UserRepository.registerUser (formData);
     setIsLoading(true);
  
     if(resp === true){
      navigate("/");
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
        <input type={"text"} placeholder="Names" className='names' required/>
        <input type={"email"} placeholder="Email" className='Email'required/>
        <input type={"tel"} placeholder="Phone Number" className='phone'required/>
        <input type={"number"} placeholder="ID number" className='idnum'required/>
        <input type={"number"} placeholder="Tin number" className='idnum'required/>

        <input type={"password"} placeholder="Password" className='pass'required/>
        <select class="category" id="select-option">
                                <option value="Select">Select</option>
                                <option value="Buyer">Buyer</option>
                                <option value="Seller">Seller</option>
                            </select>
                            <select name='' id="">
                              {
                                 users.map(users => {
                                  return <option value = {users.id}>{users.name}</option>
                                })
                              }
                             
                            </select>

        <input type={"Location"} placeholder="Location" className='locate'required/>
        </div>
        <div className="signup_button">
        <Link to='/#'><button type='submit' className='signing_up'>submit
        {
          isLoading ? " Loading...": " create account"
        }
        
        </button></Link>

        </div>
        </form>
    </div>
    
  )
}
export default Sign