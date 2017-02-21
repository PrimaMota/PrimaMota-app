import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './modules/app.component';
import { HomeComponent } from './modules/components/home/home.component';
import { AboutComponent } from './modules/components/about/about.component';

const commonRoutes = [
  {
    path: 'about',
    component: AboutComponent
  }
];

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
