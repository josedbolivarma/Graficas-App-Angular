import { Component, OnInit } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';
import { ChartType, ChartData } from 'chart.js';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

   // Doughnut
  
   public doughnutChartData: ChartData<'doughnut'> = {
    labels: [],
     datasets: [

     ]
   };
   public doughnutChartType: ChartType = 'doughnut';


  constructor(
    private graficasService: GraficasService
  ) { }

  ngOnInit(): void {
    // this.graficasService.getUsuariosRedesSociales()
    //   .subscribe( data => {
    //     const labels = Object.keys( data );
    //     const values = Object.values( data );
    //     this.doughnutChartData.labels = labels;
    //     this.doughnutChartData.datasets[0] = { data: values };
    //   })

    this.graficasService.getUsuariosRedesSocialesDonaData()
      .subscribe( ({ labels, values }) => {
        this.doughnutChartData.labels = labels;
        this.doughnutChartData.datasets[0] = { data: values };
      });

  };

}