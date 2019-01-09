import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {
  
  @Input('opciones') public doughnutChartLabels:string[] = [];
  @Input('datagrafico') public doughnutChartData:number[] = [];
  @Input('titlegrafico') public  doughnutCharttitle:string = ''
  @Input('typegrafico') public doughnutChartType:string = '';

  constructor() { }

  ngOnInit() {
  }

}
