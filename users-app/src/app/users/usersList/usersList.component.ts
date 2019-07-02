import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core'
import { UserModel } from 'src/app/shared/users.model';
import { MatDialog, MatDialogConfig, MatDialogModule } from '@angular/material/dialog';
import { EditDialogComponent } from '../editDialog/editDialog.component';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-usersList',
  templateUrl: './usersList.component.html',
  styleUrls: ['./usersList.component.css']
})
export class UserListComponent {

  users: any = [{}];

  displayedColumns: string[] = ["userName", "email", "password", "mobile", "address", "buttonEdit"];

  constructor(public dialog: MatDialog, private http: HttpClient, private _snackBar: MatSnackBar) {

    http.get('http://127.0.0.1:8000/getAllUsers').subscribe(dataRes => {
      console.log(dataRes);
      this.users = dataRes['result'];
      console.log(this.users);
    })

  }

  onDelete(email: string) {
    this.deleteUser(email);
  }

  onEditUser(user: UserModel) {

    console.log("User to be edited : ", user);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '300px';

    dialogConfig.data = {
      userName: user.userName,
      password: user.password,
      email: user.email,
      mobile: user.mobile,
      address: user.address,
    };
    let dialogRef = this.dialog.open(EditDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(editForm => {
      if (editForm) {
        console.log("Value from Edit form : ", editForm.value);
        this.updateUser(editForm.value);
      }

    })
  }

  updateUser(value: any) {
    this.http.post('http://127.0.0.1:8000/deleteUser', {
      email: value.email,
    }).subscribe(dataRes => {
      console.log("Response from the Server : ", dataRes);

      const user = new UserModel(value.userName, value.email, value.password, value.mobile, value.address);

      this.http.post('http://127.0.0.1:8000/addUser', user).subscribe(dataRes => {
        console.log("Response from Server : ", (dataRes));

        this.http.get('http://127.0.0.1:8000/getAllUsers').subscribe(dataRes => {
          console.log(dataRes);
          this.users = dataRes['result'];

          this._snackBar.open("User Updated!", 'OK', {
            duration: 3000,
          })

        })

      })

    })
  }

  deleteUser(email: string) {
    this.http.post('http://127.0.0.1:8000/deleteUser', {
      email: email,
    }).subscribe(dataRes => {
      console.log("Response from the Server : ", dataRes);

      this.http.get('http://127.0.0.1:8000/getAllUsers').subscribe(dataRes => {
        console.log(dataRes);
        this.users = dataRes['result'];
        this._snackBar.open("User Deleted", 'OK', {
          duration: 3000,
        })
      })

    })
  }

}