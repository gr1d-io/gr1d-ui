import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Gr1dUiModule } from 'gr1d-ui';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Gr1dUiModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
