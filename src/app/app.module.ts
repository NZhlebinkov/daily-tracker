import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HealthComponent } from './health/health.component';
import { HealthRateComponent } from './health/health-rate/health-rate.component';
import { ImportantUrgentComponent } from './important-urgent/important-urgent.component';

@NgModule({
  declarations: [
    AppComponent,
    HealthComponent,
    HealthRateComponent,
    ImportantUrgentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
