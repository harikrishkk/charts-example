import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { ChartjsModule } from '@ctrl/ngx-chartjs';

import {
  BarController,
  BarElement,
  Chart,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
// What you register will depend on what chart you are using and features used.
Chart.register(BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);
@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    LineChartComponent
  ],
  imports: [
    BrowserModule,
    HighchartsChartModule,
    ChartjsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
