// CORE DEPS
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule, AuthMethods } from 'angularfire2';

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
      {
        apiKey: "AIzaSyBcddvifAEvrdeBZ06pO-JJgJRipPaz5Dw",
        authDomain: "primamota-bcf62.firebaseapp.com",
        databaseURL: "https://primamota-bcf62.firebaseio.com",
        storageBucket: "primamota-bcf62.appspot.com",
        messagingSenderId: "660357805049"
      },
      {
        //method: AuthMethods.Popup,
        method: AuthMethods.Redirect
      }
    ),
    BrowserModule,
    ...MD_MODULES

],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

