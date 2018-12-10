import { NgModule } from '@angular/core';
import { Gr1dButton } from './button';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
@NgModule({
  imports: [
    CommonModule,
    MatButtonModule
  ],
  declarations: [
    Gr1dButton
    ],
  providers: [],
  exports: [
    CommonModule,
    MatButtonModule,
    Gr1dButton
  ]
})
export class ButtonModule {}

