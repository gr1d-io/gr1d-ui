(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material/button'), require('@angular/platform-browser/animations'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('gr1d-ui', ['exports', '@angular/core', '@angular/material/button', '@angular/platform-browser/animations', '@angular/common'], factory) :
    (factory((global['gr1d-ui'] = {}),global.ng.core,global.ng.material.button,global.ng.platformBrowser.animations,global.ng.common));
}(this, (function (exports,core,button,animations,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ButtonModule = /** @class */ (function () {
        function ButtonModule() {
        }
        ButtonModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            button.MatButtonModule
                        ],
                        declarations: [],
                        providers: [],
                        exports: [
                            button.MatButtonModule,
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
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            animations.BrowserAnimationsModule,
                            ButtonModule,
                        ],
                        declarations: [],
                        exports: [common.CommonModule, animations.BrowserAnimationsModule, ButtonModule]
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

    exports.Gr1dUiModule = Gr1dUiModule;
    exports.ɵa = ButtonModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=gr1d-ui.umd.js.map