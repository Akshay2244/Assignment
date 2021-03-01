import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RestService } from './rest.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    ReactiveFormsModule,
    
   
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
