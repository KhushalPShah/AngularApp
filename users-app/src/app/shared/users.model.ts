export class UserModel {
  userName : string;
  email : string;
  password : string;
  mobile: number;
  address : string;

  constructor(userName:string, email:string, password:string, mobile:number, address:string) {
    this.userName = userName;
    this.email = email;
    this.password = password;
    this.mobile = mobile;
    this.address = address;
  }

}