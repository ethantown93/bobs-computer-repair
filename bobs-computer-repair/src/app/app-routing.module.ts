import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RepairServicesComponent } from './repair-services/repair-services.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: RepairServicesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
