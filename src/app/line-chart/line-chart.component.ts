import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit, AfterViewInit {
  public chart: any;

  constructor() { }


  ngOnInit(): void {
    this.createChart();
  }

  ngAfterViewInit(): void {

  }

  createChart() {

    this.chart = new Chart("MyLineChart", {
      type: 'line', //this denotes tha type of chart

      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'may', 'Jun', 'Jul'],
        datasets: [{
          label: 'Number of threats blocked over time (Last 12 months)',
          data: [1, 2, 0, 4, 4, 6, 2],
          fill: true,
          borderColor: 'rgb(255, 0, 0)',
          tension: 0.1
        }]
      },
      options: {
        aspectRatio: 2.5
      }

    });
  }
}
