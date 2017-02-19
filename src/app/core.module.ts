/**
 * Created by juleedev on 2/18/17.
 * https://medium.freecodecamp.com/angular-2-authentication-made-easy-with-firebase-246c282d9ef8#.a6gnuf35y
 */
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  AngularFireModule,
  AuthMethods,
  AuthProviders
} from "angularfire2";
const firebaseConfig = {
  apiKey: "AIzaSyCk3weREVFpOIN6pL_QVVNFRl3C3keMIRU",
  authDomain: "angular2-auth.firebaseapp.com",
  databaseURL: "https://angular2-auth.firebaseio.com",
  storageBucket: "angular2-auth.appspot.com"
};
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig,{
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    })
  ],
  exports: [
    BrowserModule,
  ]
})
export class CoreModule {}
