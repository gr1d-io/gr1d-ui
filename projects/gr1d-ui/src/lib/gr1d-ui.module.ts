import { NgModule } from '@angular/core';
import { ButtonModule } from './button/button-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    ButtonModule,
  ],
  declarations: [],
  exports: [BrowserAnimationsModule, ButtonModule]
})
export class Gr1dUiModule { }
