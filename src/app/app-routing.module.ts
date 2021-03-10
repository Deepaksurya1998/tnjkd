import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DistrictsComponent } from './districts/districts.component';
import { HomeComponent } from './home/home.component';
import { NationalbodyComponent } from './nationalbody/nationalbody.component';
import { StatebodyComponent } from './statebody/statebody.component';

const routes: Routes = [{path:'' , component:HomeComponent},
{path:'about' , component:AboutComponent},
{path:'contacts' , component:ContactsComponent},
{path:'districts' , component:DistrictsComponent},
{path:'statebody' , component:StatebodyComponent},
{path:'nationalbody' , component:NationalbodyComponent},
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
