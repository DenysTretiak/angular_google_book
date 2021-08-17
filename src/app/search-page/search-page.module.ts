import { NgModule } from '@angular/core';
import { SearchPageComponent } from './search-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpService } from '../shared/services/http.service';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        SearchPageComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        HttpClientJsonpModule
    ],
    providers: [HttpService],
    exports: [SearchPageComponent]
})
export class SearchPageModule { }
