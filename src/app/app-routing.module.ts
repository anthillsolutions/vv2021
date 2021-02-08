import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingSimpleComponent } from './landing-simple/landing-simple.component';

const routes: Routes = [
  { path: '', component: LandingSimpleComponent },
  { path: '**', component: LandingSimpleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
