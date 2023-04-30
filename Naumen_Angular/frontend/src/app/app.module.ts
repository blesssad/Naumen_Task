import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { AgeByNameCardComponent } from '../components/age-by-name-card/age-by-name-card.component';
import { OldestPersonComponent } from '../components/oldest-person/oldest-person.component';
import { StatisticComponent } from '../components/statistic/statistic.component';

@NgModule({
  declarations: [
    AppComponent,
    AgeByNameCardComponent,
    OldestPersonComponent,
    StatisticComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
