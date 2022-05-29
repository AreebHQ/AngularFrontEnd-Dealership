export class Message
{
   

    constructor( private name:string,
        private phone:string,
        private email:string,
        private subject:string,
        private message:string)
    {
        this.email = email;
        this.name = name;
        this.message = message;
        this.phone = phone;
        this.subject = subject;
    }
}