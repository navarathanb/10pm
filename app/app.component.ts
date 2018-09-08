import { Component } from '@angular/core';

import { ProductService } from './products.service';
import { Products } from './products';



import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';




@Component({
  selector: 'my-app',
  templateUrl: `app/app.component.html`,
  providers: [ProductService],
  styles:['h1{font-size: 100px; color: red;}'],
  styleUrls: ['./app.style.css']
  
})
export class AppComponent  { 
  name : string = 'James';
  email : string = "James@gmail.com";
  show : boolean = true;
  students: any[] = [{"name":"james","email":"james@gmail.com","mobile":42342342,"id":100,"image":"app/img/1.jpg"},{"name":"kishore","email":"kishore@gmail.com","mobile":5654654,"id":101,"image":"app/img/2.jpg"},{"name":"vimal","email":"vimal@gmail.com","mobile":3453453,"id":102,"image":"app/img/3.jpg"},{"name":"surya","email":"surya@gmail.com","mobile":34534534,"id":103,"image":"app/img/4.jpg"},{"name":"kishore","email":"kishore@gmail.com","mobile":34534534,"id":104,"image":"app/img/5.jpg"}];
  products: Products[];
  cartProd: any[] = [];
  constructor(private productServ : ProductService){}


  ngOnInit() : any{
    this.productServ.getProducts().subscribe(products => this.products = products ) 
    return this.products;

  }
  //to add into cart

  cart(pname:string, pid:number, pcost:string, image:string){
    // console.log(pname);
    this.cartProd.push({"pname":pname,"pid":pid, "pcost":pcost, "image": image});
  }

  del(pid:number){
    for(let i=0; i < this.cartProd.length; i++){
      if(this.cartProd[i].pid == pid){
        this.cartProd.splice(i,1);
      }
    }
  }


}

// var data = function(data){
//   return test =data;
// }
// var data = (data)=>test = data