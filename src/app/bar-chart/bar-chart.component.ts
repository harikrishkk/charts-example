import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  public chart: any;

  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {

    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Botnet', 'Malware', 'Phishing', 'Spyware'],
        datasets: [
          {
            label: "Threats blocked on your line (last 12 months)",
            data: ['10', '6', '7', '8'],
            backgroundColor: 'red'
          },
        ]
      },
      options: {
        aspectRatio: 2.5
      }

    });
  }

}
