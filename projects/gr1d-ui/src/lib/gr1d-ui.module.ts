import { NgModule } from '@angular/core';
import { ButtonModule } from './button/button-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ButtonModule,
  ],
  declarations: [],
  exports: [CommonModule, BrowserAnimationsModule, MatButtonModule, ButtonModule]
})
export class Gr1dUiModule { }
