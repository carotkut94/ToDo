import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';


export const firebaseConfig = {
    apiKey: "AIzaSyC0w8aq87Nth6zUoO6mA_-xrjsp-IZ0DX4",
    authDomain: "whatwedo-e3b42.firebaseapp.com",
    databaseURL: "https://whatwedo-e3b42.firebaseio.com",
    projectId: "whatwedo-e3b42",
    storageBucket: "whatwedo-e3b42.appspot.com",
    messagingSenderId: "1025548373099"
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
