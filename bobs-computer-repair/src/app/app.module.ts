import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NavComponent } from './nav/nav.component';
import { RepairServicesComponent } from './repair-services/repair-services.component';
import { InvoicesComponent } from './invoices/invoices.component';

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
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RepairServicesComponent,
    InvoicesComponent,
    HomeComponent
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
    FlexLayoutModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
