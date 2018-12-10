import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Gr1dUiModule } from '../../projects/gr1d-ui/src/lib/gr1d-ui.module';

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
