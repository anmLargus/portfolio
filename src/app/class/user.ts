// modelo para el usuario administrador

export class User {
    
    email: string;
    password: string;

    constructor( email="", password="") {
        this.email = email;
        this.password = password;
    }
}
