import { NgModule } from '@angular/core';
import { ButtonModule } from './button/button-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ButtonModule,
  ],
  declarations: [],
  exports: [CommonModule, BrowserAnimationsModule, ButtonModule]
})
export class Gr1dUiModule { }
