import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ButtonModule {
}
ButtonModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    MatButtonModule
                ],
                declarations: [],
                providers: [],
                exports: [
                    MatButtonModule,
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class Gr1dUiModule {
}
Gr1dUiModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    BrowserAnimationsModule,
                    ButtonModule,
                ],
                declarations: [],
                exports: [CommonModule, BrowserAnimationsModule, ButtonModule]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { Gr1dUiModule, ButtonModule as ɵa };

//# sourceMappingURL=gr1d-ui.js.map