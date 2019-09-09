/*
============================================
; Author: Ethan Townsend
; Date:   8/12/2019
; Description: web-425
;===========================================
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment } from '../environments/environment';

import { NavComponent } from './components/nav/nav.component';
import { RepairServicesComponent } from './components/repair-services/repair-services.component';
import { HomeComponent } from './components/home/home.component';
import { ResidentialServicesComponent } from './components/residential-services/residential-services.component';
import { ShopServicesComponent } from './components/shop-services/shop-services.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CartComponent } from './components/cart/cart.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule, MatMenuModule, MatToolbarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { RepairServicesService } from './services/repair-services.service';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RepairServicesComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ResidentialServicesComponent,
    ShopServicesComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule, 
    FlexLayoutModule,
    ReactiveFormsModule
    
  ],
  providers: [RepairServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
