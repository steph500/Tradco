import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheaderComponent } from './header/topheader/topheader.component';
import { MiddleheaderComponent } from './header/middleheader/middleheader.component';
import { BottomheaderComponent } from './header/bottomheader/bottomheader.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home/home.component';
import { FooterComponent } from './footer/footer/footer.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
