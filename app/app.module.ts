import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';

import { servicesPage } from './services.component';
import { careerPage } from './career.component';
import { aboutusPage } from './aboutus.component';
import { notfoundPage } from './notfound.component';

const routing:Routes = [
  {path: 'servicesPage', component: servicesPage},
  {path: 'aboutusPage', component: aboutusPage},
  {path: 'careerPage', component: careerPage},
  {path: '**', component: notfoundPage }

]

@NgModule({
  imports:      [ BrowserModule, HttpModule, RouterModule.forRoot(routing), FormsModule ],
  declarations: [ AppComponent, servicesPage, aboutusPage, careerPage, notfoundPage ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
