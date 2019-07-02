import { Component, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms'
import { UserModel } from 'src/app/shared/users.model';

@Component({
  selector: 'app-editDialog',
  templateUrl: './editDialog.component.html',
  styleUrls: ['./editDialog.component.css']
})


export class EditDialogComponent {

  editForm: FormGroup;
  userName: FormControl = new FormControl('', [Validators.required, Validators.minLength(5)]);
  password: FormControl = new FormControl('', [Validators.required, Validators.minLength(7)]);
  email: FormControl = new FormControl('', [Validators.required, Validators.email]);
  mobile: FormControl = new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)])
  address: FormControl = new FormControl('', [Validators.required]);

  constructor(@Inject(MAT_DIALOG_DATA) public data : UserModel ,public dialogRef: MatDialogRef<EditDialogComponent>, fb: FormBuilder) {
    this.editForm = fb.group({
      "userName": this.userName,
      "password": this.password,
      "email": this.email,
      "mobile": this.mobile,
      "address": this.address
    })

    this.editForm.setValue(data); 
  }
  onEditFormClose() {
    this.dialogRef.close();
  }
}