import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/header/header.component';
import { FrontPageComponent } from './modules/front-page/front-page.component';
import { AboutComponent } from './modules/about/about.component';
import { ProvidesServicesComponent } from './modules/provides-services/provides-services.component';
import { PortafolioComponent } from './modules/portafolio/portafolio.component';
import { ContactComponent } from './modules/contact/contact.component';
import { FooterComponent } from './modules/footer/footer.component';
import { ClientsComponent } from './modules/clients/clients.component';
import { DetailPortafolioComponent } from './modules/detail-portafolio/detail-portafolio.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './modules/landing-page/landing-page.component';
import { DirectoryCategoriesComponent } from './modules/directory-categories/directory-categories.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FrontPageComponent,
    AboutComponent,
    ProvidesServicesComponent,
    PortafolioComponent,
    ContactComponent,
    FooterComponent,
    ClientsComponent,
    DetailPortafolioComponent,
    LandingPageComponent,
    DirectoryCategoriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
