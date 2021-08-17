import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { WelcomeScreenComponent } from './welcome-screen.component';

@NgModule({
    declarations: [
        WelcomeScreenComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    exports: [WelcomeScreenComponent]
})
export class WelcomeScreenModule { }
