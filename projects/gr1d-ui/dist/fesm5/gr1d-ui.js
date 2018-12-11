import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ButtonModule = /** @class */ (function () {
    function ButtonModule() {
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
    return ButtonModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var Gr1dUiModule = /** @class */ (function () {
    function Gr1dUiModule() {
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
    return Gr1dUiModule;
}());

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