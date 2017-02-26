// CORE DEPS
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

import { AngularFireModule, AuthMethods } from 'angularfire2';

//import 'materialize-css/dist/css/materialize.min.css';
import "materialize-css";
import { MaterializeModule } from 'angular2-materialize/src/index';

// MATERIAL DESIGN MODULES
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';

export let MD_MODULES: any = [
  MdToolbarModule,
  MdButtonModule,
  MdCardModule
];

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyBcddvifAEvrdeBZ06pO-JJgJRipPaz5Dw",
  authDomain: "primamota-bcf62.firebaseapp.com",
  databaseURL: "https://primamota-bcf62.firebaseio.com",
  storageBucket: "primamota-bcf62.appspot.com",
  messagingSenderId: "660357805049"
};

// APP
@NgModule({
  imports: [
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(

      firebaseConfig,
      {
        //method: AuthMethods.Popup,
        method: AuthMethods.Redirect
      }
    ),
    routing,
    BrowserModule,
    MaterializeModule,
    ...MD_MODULES

],
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    LoginComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
