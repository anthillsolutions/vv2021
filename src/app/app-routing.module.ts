import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { AboutResolver } from './resolvers/about.resolver';
import { ContactResolver } from './resolvers/contact.resolver';

const routes: Routes = [
  { path: '', redirectTo: 'work', pathMatch: 'full' },
  { path: 'maintenance', component: MaintenanceComponent },
  { path: 'about', component: AboutComponent, resolve: { about: AboutResolver }  },
  { path: 'contact', component: ContactComponent, resolve: { contact: ContactResolver } },
  { path: 'work', loadChildren: () => import('./work/work.module').then(m => m.WorkModule) },
  { path: '**', redirectTo: 'work' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
