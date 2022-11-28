import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import type { ChartData, ChartOptions } from 'chart.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'charts-example';
  data: any;
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    series: [{
      data: [1, 2, 3],
      type: 'line'
    }]
  };

  data1: ChartData = {
    labels: ['Botnet', 'Malware', 'Phishing', 'Spyware'],
    datasets: [
      {
        label: "Threats blocked on your line (last 12 months)",
        data: [10, 6, 7, 8],
        fill: false,
        backgroundColor: 'red',
        borderWidth: 1,
      },
    ],
  };

  data2: ChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'may', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Number of threats blocked over time (Last 12 months)',
        data: [1, 2, 0, 4, 4, 6, 2],
        fill: true,
        borderColor: 'rgb(255, 0, 0)',
        tension: 0.1
      }
    ],
  };


  options: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Doughnut Chart',
      },
    },
  };

  options2: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Doughnut Chart',
      },
    },
  };

  constructor() {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    }
  }
}
