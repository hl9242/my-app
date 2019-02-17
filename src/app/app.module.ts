import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { RouterModule } from '@angular/router';
import { RouterModule, Routes }  from '@angular/router';
import { provideRoutes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TooltipOverviewExample} from './demo/tooltip-overview-example'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule,MatTooltipModule} from '@angular/material'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TooltipOverviewExample
  ],
  imports: [
    RouterModule,//.forRoot(routes),

    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,MatTooltipModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule],
 // providers: [],
  bootstrap: [AppComponent,TooltipOverviewExample]
})
export class AppModule { }
