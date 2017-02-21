import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app/modules/app.component';
import { HomeComponent } from './app/modules/components/home/home.component';
import { AboutComponent } from './app/modules/components/about/about.component';
import { LoginComponent } from './app/modules/components/login/login.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

/*const childRoutes: Routes = [
  {
    path: 'some-screen',
    component: SomeScreenComponent,
    children: [
      {
        path: '',
        pathMatch: 'sub-screen-1',
        component: SubScreen1Component
      },
      {
        pathMatch: 'sub-screen-2',
        component: SubScreen2Component
      }
    ]
  }
];
export const childRouting: ModuleWithProviders = RouterModule.forChild(childRoutes);
 */
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });

