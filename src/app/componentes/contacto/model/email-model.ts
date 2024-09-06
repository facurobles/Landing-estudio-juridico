export class EmailModel {
    email : string;
    message : string;
    name : string;

    constructor(email:string, message:string, name:string){
        this.email = email;
        this.message = message;
        this.name = name; 
    }
}
