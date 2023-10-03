import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPortafolioComponent } from './modules/detail-portafolio/detail-portafolio.component';
import { LandingPageComponent } from './modules/landing-page/landing-page.component';
import { PortafolioComponent } from './modules/portafolio/portafolio.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'detalle/:id', component: DetailPortafolioComponent},
  { path: 'categoria/:description', component: PortafolioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
