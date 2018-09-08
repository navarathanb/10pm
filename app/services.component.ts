import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {Students} from './students';

@Component ({
    selector: 'my-app',
    templateUrl: `app/services.html`

})

export class servicesPage {
    name:string = "Services Page";
    students = new Students(100,"James","james@gmail.com");
    constructor(private _router : Router){}
    records: any[] = [];
    about() : void{
        this._router.navigate(['/aboutusPage']);
    }
    onSubmit(students:any){
        this.records.push({"id":students.id,"name":students.name,"email":students.email});
    }
}