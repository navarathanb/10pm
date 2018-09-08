"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var services_component_1 = require("./services.component");
var career_component_1 = require("./career.component");
var aboutus_component_1 = require("./aboutus.component");
var notfound_component_1 = require("./notfound.component");
var routing = [
    { path: 'servicesPage', component: services_component_1.servicesPage },
    { path: 'aboutusPage', component: aboutus_component_1.aboutusPage },
    { path: 'careerPage', component: career_component_1.careerPage },
    { path: '**', component: notfound_component_1.notfoundPage }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, router_1.RouterModule.forRoot(routing), forms_1.FormsModule],
        declarations: [app_component_1.AppComponent, services_component_1.servicesPage, aboutus_component_1.aboutusPage, career_component_1.careerPage, notfound_component_1.notfoundPage],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map