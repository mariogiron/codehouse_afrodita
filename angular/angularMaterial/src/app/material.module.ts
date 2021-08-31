import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule
  ],
  exports: [
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule
  ]
})
export class MaterialModule { }
