import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'

import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserFormComponent } from './userForm/userForm.component';
import { UserListComponent } from './users/usersList/usersList.component';
import { EditDialogComponent } from './users/editDialog/editDialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserFormComponent,
    UserListComponent,
    EditDialogComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  entryComponents : [EditDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
