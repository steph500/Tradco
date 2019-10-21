import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheaderComponent } from './header/topheader/topheader.component';
import { MiddleheaderComponent } from './header/middleheader/middleheader.component';
import { BottomheaderComponent } from './header/bottomheader/bottomheader.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home/home.component';
import { FooterComponent } from './footer/footer/footer.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire'; 
import { AngularFirestoreModule } from 'angularfire2/firestore';

@NgModule({
  declarations: [
    AppComponent,
    TopheaderComponent,
    MiddleheaderComponent,
    BottomheaderComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'Tradco'),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
