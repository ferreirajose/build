(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common/http'), require('@angular/core'), require('rxjs/operators'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('components-lib', ['exports', '@angular/common/http', '@angular/core', 'rxjs/operators', '@angular/common'], factory) :
    (global = global || self, factory(global['components-lib'] = {}, global.ng.common.http, global.ng.core, global.rxjs.operators, global.ng.common));
}(this, (function (exports, i1, i0, operators, common) { 'use strict';

    var ComponentsLibService = /** @class */ (function () {
        function ComponentsLibService(http) {
            this.http = http;
            this.apiRoot = 'https://api.tvmaze.com';
        }
        ComponentsLibService.prototype.getShow = function (id) {
            var url = this.apiRoot + "/shows/" + id;
            return this.http.get(url);
        };
        return ComponentsLibService;
    }());
    ComponentsLibService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ComponentsLibService_Factory() { return new ComponentsLibService(i0.ɵɵinject(i1.HttpClient)); }, token: ComponentsLibService, providedIn: "root" });
    ComponentsLibService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    ComponentsLibService.ctorParameters = function () { return [
        { type: i1.HttpClient }
    ]; };

    var PosterComponent = /** @class */ (function () {
        function PosterComponent(tvmaze) {
            this.tvmaze = tvmaze;
        }
        PosterComponent.prototype.ngOnInit = function () {
            this.posterUrl$ = this.tvmaze
                .getShow(this.showId)
                .pipe(operators.map(function (show) { return show.image.medium; }));
        };
        return PosterComponent;
    }());
    PosterComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'tm-poster',
                    template: "<img *ngIf=\"posterUrl$ | async as src\" [src]=\"src\" />",
                    styles: ["\n  :host {\n    display: inline-block;\n    overflow: hidden;\n    border-radius: 4px;\n    line-height: 0;\n  }\n  "]
                },] }
    ];
    PosterComponent.ctorParameters = function () { return [
        { type: ComponentsLibService }
    ]; };
    PosterComponent.propDecorators = {
        showId: [{ type: i0.Input }]
    };

    var ComponentsLibComponent = /** @class */ (function () {
        function ComponentsLibComponent() {
        }
        ComponentsLibComponent.prototype.ngOnInit = function () {
        };
        return ComponentsLibComponent;
    }());
    ComponentsLibComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'uic-components-lib',
                    template: "\n    <p>\n      components-lib works!\n    </p>\n  "
                },] }
    ];
    ComponentsLibComponent.ctorParameters = function () { return []; };

    var ComponentsLibModule = /** @class */ (function () {
        function ComponentsLibModule() {
        }
        return ComponentsLibModule;
    }());
    ComponentsLibModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [ComponentsLibComponent],
                    imports: [common.CommonModule, i1.HttpClientModule],
                    exports: [ComponentsLibComponent]
                },] }
    ];

    /*
     * Public API Surface of components-lib
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ComponentsLibModule = ComponentsLibModule;
    exports.ComponentsLibService = ComponentsLibService;
    exports.PosterComponent = PosterComponent;
    exports.ɵa = ComponentsLibComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-lib.umd.js.map
