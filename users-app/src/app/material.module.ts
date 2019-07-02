import { NgModule } from '@angular/core';

import {
  MatToolbarModule,
  MatTabsModule,
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatTableModule,
  MatDialogModule,
  MatSnackBarModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    MatSnackBarModule,
  ],
  exports: [
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    MatSnackBarModule,
  ]
})
export class MaterialModule { }