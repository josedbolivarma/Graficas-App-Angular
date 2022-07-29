import { Component } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-barras-doble',
  templateUrl: './barras-doble.component.html',
  styles: [
  ]
})
export class BarrasDobleComponent {

  proveedoresData: ChartData<'bar'> = {
    labels: [],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor: '#F70749', hoverBackgroundColor: 'black' },
      { data: [ 28, 48, 40, 80, 86, 40, 90 ], label: 'Series B', backgroundColor: '#660720', hoverBackgroundColor: 'black' },
      { data: [ 28, 48, 40, 80, 86, 40, 90 ], label: 'Series C', backgroundColor: '#700734', hoverBackgroundColor: 'black' }
    ]
  };

  proveedoresLabels: string[] = ['2021', '2022','2023','2024','2025'];
  
  productoData: ChartData<'bar'> = {
    labels: [],
    datasets: [
    { data: [ 200, 300,400,300, 100 ], label: 'Carros', backgroundColor: 'blue' },
    ]
  };


}
