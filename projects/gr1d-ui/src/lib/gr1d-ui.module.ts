import { NgModule } from '@angular/core';
import { Gr1dUiComponent } from './gr1d-ui.component';
import { ButtonModule } from './button/button-module';

@NgModule({
  imports: [
    ButtonModule
  ],
  declarations: [Gr1dUiComponent],
  exports: [Gr1dUiComponent]
})
export class Gr1dUiModule { }
