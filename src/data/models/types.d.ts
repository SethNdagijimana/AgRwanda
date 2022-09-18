export interface UserModel {
    username: string;
    email: string;
    phone_number: number;
    id_number: number;
    tin_number: number;
    categories: string;
    location: string;
    password: string;
}

export interface RegisterUserData extends UserModel{
    checkPassword: string;

}