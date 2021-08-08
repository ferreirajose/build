import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ɵɵdefineInjectable, ɵɵinject, Injectable, Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class ComponentsLibService {
    constructor(http) {
        this.http = http;
        this.apiRoot = 'https://api.tvmaze.com';
    }
    getShow(id) {
        const url = `${this.apiRoot}/shows/${id}`;
        return this.http.get(url);
    }
}
ComponentsLibService.ɵprov = ɵɵdefineInjectable({ factory: function ComponentsLibService_Factory() { return new ComponentsLibService(ɵɵinject(HttpClient)); }, token: ComponentsLibService, providedIn: "root" });
ComponentsLibService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
ComponentsLibService.ctorParameters = () => [
    { type: HttpClient }
];

class ComponentsLibComponent {
    constructor() { }
    ngOnInit() {
    }
}
ComponentsLibComponent.decorators = [
    { type: Component, args: [{
                selector: 'uic-components-lib',
                template: `
    <p>
      components-lib works!
    </p>
  `
            },] }
];
ComponentsLibComponent.ctorParameters = () => [];

class ComponentsLibModule {
}
ComponentsLibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ComponentsLibComponent],
                imports: [CommonModule, HttpClientModule],
                exports: [ComponentsLibComponent]
            },] }
];

/*
 * Public API Surface of components-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ComponentsLibComponent, ComponentsLibModule, ComponentsLibService };
//# sourceMappingURL=components-lib.js.map
