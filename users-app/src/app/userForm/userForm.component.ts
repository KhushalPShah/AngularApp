import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms'
import { UserModel } from '../shared/users.model';
import { AppComponent } from '../app.component'
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-userForm',
  templateUrl: './userForm.component.html',
  styleUrls: ['./userForm.component.css']
})
export class UserFormComponent {
  userForm: FormGroup;
  userName: FormControl = new FormControl('', [Validators.required, Validators.minLength(5)]);
  password: FormControl = new FormControl('', [Validators.required, Validators.minLength(7)]);
  email: FormControl = new FormControl('', [Validators.required, Validators.email]);
  mobile: FormControl = new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)])
  address: FormControl = new FormControl('', [Validators.required]);

  // @Output() onSubmit = new EventEmitter<UserModel>();

  constructor(fb: FormBuilder, private http: HttpClient, private _snackBar : MatSnackBar) {
    this.userForm = fb.group({
      "userName": this.userName,
      "password": this.password,
      "email": this.email,
      "mobile": this.mobile,
      "address": this.address
    })
  }



  onFormSubmit() {
    console.log(this.userForm.value);
    const user = new UserModel(this.userForm.value.userName, this.userForm.value.email, this.userForm.value.password, this.userForm.value.mobile, this.userForm.value.address);

    this.http.post('http://127.0.0.1:8000/addUser', user).subscribe(dataRes => {
      console.log("Response from Server : ", (dataRes));
      this._snackBar.open("User Registered!",'OK',{
        duration : 3000,
      })
    })
    this.userForm.reset();
  }
}