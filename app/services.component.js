"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var students_1 = require("./students");
var servicesPage = (function () {
    function servicesPage(_router) {
        this._router = _router;
        this.name = "Services Page";
        this.students = new students_1.Students(100, "James", "james@gmail.com");
        this.records = [];
    }
    servicesPage.prototype.about = function () {
        this._router.navigate(['/aboutusPage']);
    };
    servicesPage.prototype.onSubmit = function (students) {
        this.records.push({ "id": students.id, "name": students.name, "email": students.email });
    };
    return servicesPage;
}());
servicesPage = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: "app/services.html"
    }),
    __metadata("design:paramtypes", [router_1.Router])
], servicesPage);
exports.servicesPage = servicesPage;
//# sourceMappingURL=services.component.js.map