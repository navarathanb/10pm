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
var products_service_1 = require("./products.service");
require("rxjs/add/operator/map");
var AppComponent = (function () {
    function AppComponent(productServ) {
        this.productServ = productServ;
        this.name = 'James';
        this.email = "James@gmail.com";
        this.show = true;
        this.students = [{ "name": "james", "email": "james@gmail.com", "mobile": 42342342, "id": 100, "image": "app/img/1.jpg" }, { "name": "kishore", "email": "kishore@gmail.com", "mobile": 5654654, "id": 101, "image": "app/img/2.jpg" }, { "name": "vimal", "email": "vimal@gmail.com", "mobile": 3453453, "id": 102, "image": "app/img/3.jpg" }, { "name": "surya", "email": "surya@gmail.com", "mobile": 34534534, "id": 103, "image": "app/img/4.jpg" }, { "name": "kishore", "email": "kishore@gmail.com", "mobile": 34534534, "id": 104, "image": "app/img/5.jpg" }];
        this.cartProd = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productServ.getProducts().subscribe(function (products) { return _this.products = products; });
        return this.products;
    };
    //to add into cart
    AppComponent.prototype.cart = function (pname, pid, pcost, image) {
        // console.log(pname);
        this.cartProd.push({ "pname": pname, "pid": pid, "pcost": pcost, "image": image });
    };
    AppComponent.prototype.del = function (pid) {
        for (var i = 0; i < this.cartProd.length; i++) {
            if (this.cartProd[i].pid == pid) {
                this.cartProd.splice(i, 1);
            }
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: "app/app.component.html",
        providers: [products_service_1.ProductService],
        styles: ['h1{font-size: 100px; color: red;}'],
        styleUrls: ['./app.style.css']
    }),
    __metadata("design:paramtypes", [products_service_1.ProductService])
], AppComponent);
exports.AppComponent = AppComponent;
// var data = function(data){
//   return test =data;
// }
// var data = (data)=>test = data 
//# sourceMappingURL=app.component.js.map