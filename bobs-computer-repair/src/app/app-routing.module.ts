/*
============================================
; Author: Ethan Townsend
; Date:   8/12/2019
; Description: web-425
;===========================================
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { RepairServicesComponent } from './components/repair-services/repair-services.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ResidentialServicesComponent } from './components/residential-services/residential-services.component';
import { ShopServicesComponent } from './components/shop-services/shop-services.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: RepairServicesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'residential-services', component: ResidentialServicesComponent },
  { path: 'in-shop-services', component: ShopServicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
