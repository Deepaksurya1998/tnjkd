import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { StatebodyComponent } from './statebody/statebody.component';
import { NationalbodyComponent } from './nationalbody/nationalbody.component';
import { DistrictsComponent } from './districts/districts.component';
import { ContactsComponent } from './contacts/contacts.component';




@NgModule({
  declarations: [
    AppComponent,
    
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    StatebodyComponent,
    NationalbodyComponent,
    DistrictsComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
