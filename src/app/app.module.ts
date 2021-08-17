import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPageComponent } from './search-page/search-page.component';
import { SearchPageModule } from './search-page/search-page.module';
import { WelcomeScreenModule } from './welcome-screen/welcome-screen.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SearchPageModule,
    WelcomeScreenModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
