import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/header/header.component';
import { FrontPageComponent } from './modules/front-page/front-page.component';
import { AboutComponent } from './modules/about/about.component';
import { ProvidesServicesComponent } from './modules/provides-services/provides-services.component';
import { PortafolioComponent } from './modules/portafolio/portafolio.component';
import { TeamComponent } from './modules/team/team.component';
import { TestimonialsComponent } from './modules/testimonials/testimonials.component';
import { ContactComponent } from './modules/contact/contact.component';
import { FooterComponent } from './modules/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FrontPageComponent,
    AboutComponent,
    ProvidesServicesComponent,
    PortafolioComponent,
    TeamComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
