export class User {
  username: string;
  password: string;
  repassword?: string;
  id?: string;
  
  constructor(firstname:string, lastname:string, username:string, password:string,repassword:string, id:string) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.repassword = repassword;
  }
}