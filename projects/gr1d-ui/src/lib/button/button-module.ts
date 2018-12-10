import { NgModule } from '@angular/core';
import { Gr1dButton } from './button';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  imports: [
    MatButtonModule
  ],
  declarations: [
    Gr1dButton
    ],
  providers: [],
  exports: [
    MatButtonModule,
    Gr1dButton
  ]
})
export class ButtonModule {}

