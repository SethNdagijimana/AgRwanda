import {SERVER_URL} from "../FetchingData";

export class UserRepository {
    REGISTER_USER_ENDPOINT = "https://floating-wildwood-63311.herokuapp.com/signup/"

    
/**
 * 
 * @param {(password: string, confirmPassword: string): boolean} checkPassword
 */
constructor(checkPassword) {

    /**
     * 
     *  @type {(password: string, confirmPassword: string): boolean}
     */

    this.checkPassword = checkPassword;
}
/**
 * 
 * @param {RegisterUserData} userFormData
 * @param {boolean}
 */

async registerUser(userFormData){
    const isPasswordChecked = 
    this.checkPassword(userFormData.checkPassword, userFormData.password);

    if (!isPasswordChecked) return false;

    /**
     * 
     * @type {UserModel}
     */


const requestData = {
    username: userFormData.username,
    email: userFormData.email,
    phone_number: userFormData.phone_number,
    id_number: userFormData.id_number,
    tin_number: userFormData.tin_number,
    categories: userFormData.categories,
    location: userFormData.location,
    password: userFormData.password
}

const endPoint = `${SERVER_URL}/floating-wildwood-63311.herokuapp.com/signup/`;
const request = fetch (
    endPoint,
    {
        method: "POST",
        body: JSON.stringify(requestData)
    }
);

const response = await request;
if (response.status === 200) return true;
return false;
}
}