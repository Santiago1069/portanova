import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPortafolioComponent } from './modules/detail-portafolio/detail-portafolio.component';

const routes: Routes = [
  { path: 'detalle', component: DetailPortafolioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
