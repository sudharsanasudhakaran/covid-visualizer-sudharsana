import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color } from 'ng2-charts';
import { MultiDataSet, Label, SingleDataSet } from 'ng2-charts';
import { DeathsService } from '../deaths.service'
import { ChartOptions, ChartDataSets, RadialChartOptions } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  confirmed = 0;
  recovered = 0;
  deaths = 0;
  active = 0;


  items = [];
  confirmedItem = [];
  recoveredItem = [];
  deathItem = [];
  stateLabel = [];
  dataItem = [];
  activeItem = [];
  constructor(private deathsService: DeathsService) {
    this.deathsService.getAllDeaths().subscribe(
      data => {
        this.items = data;
        console.log(this.items[0].confirmed);
        for (let i = 0; i < data.length; i++) {
          this.stateLabel.push(this.items[i].provinceState);
          this.confirmedItem.push(this.items[i].confirmed);
          this.recoveredItem.push(this.items[i].recovered);
          this.deathItem.push(this.items[i].deaths);
          this.activeItem.push(this.items[i].active);
          this.confirmed = this.confirmed + this.items[i].confirmed;
          this.recovered = this.recovered + this.items[i].recovered;
          this.deaths = this.deaths + this.items[i].deaths;
          this.active = this.active + this.items[i].active;
        }
        this.dataItem.push(this.confirmed);
        this.dataItem.push(this.recovered);
        this.dataItem.push(this.deaths);
        this.dataItem.push(this.active)
        console.log(this.confirmed);
        console.log(this.recovered);
        console.log(this.deaths);
        console.log(this.items)
      },
      err => console.log("error", err),
      () => console.log("finally")
    )
  }
  lineChartData1: ChartDataSets[] = [
    { data: this.confirmedItem, label: 'Confirmed' },
    { data: this.recoveredItem, label: 'Recovered' },
    { data: this.deathItem, label: 'Deaths' },
    { data: this.activeItem, label: 'Active' }
  ];

  lineChartLabels1: Label[] = ['Confirmed', 'Recovered', 'Deaths', 'Active'];

  lineChartOptions1 = {
    responsive: true,
  };

  lineChartColors1: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: ['rgba(141, 234, 100  ,0.28)', 'rgba(250,109,33,0.7)', 'rgba(0,139,139,0.7)', 'rgba(154,154,154,0.5)']
    }
  ];

  lineChartLegend1 = true;
  lineChartPlugins1 = [];
  lineChartType1 = 'line';

  lineChartData2: ChartDataSets[] = [
    { data: this.activeItem, label: 'Active' }
  ];
  lineChartLabels2: Label[] = ['Active'];
  lineChartOptions2 = {
    responsive: true,
  };
  lineChartColors2: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: ['rgba(154,154,100,0.5)']
    }
  ];
  lineChartLegend2 = true;
  lineChartPlugins2 = [];
  lineChartType2 = 'line';

  lineChartData3: ChartDataSets[] = [
    { data: this.recoveredItem, label: 'Recovered' }
  ];
  lineChartLabels3: Label[] = ['Recovered'];
  lineChartOptions3 = {
    responsive: true,
  };
  lineChartColors3: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: ['rgba(0,139,139,0.7)']
    }
  ];
  lineChartLegend3 = true;
  lineChartPlugins3 = [];
  lineChartType3 = 'line';

  lineChartData4: ChartDataSets[] = [
    { data: this.deathItem, label: 'Deaths' }
  ];
  lineChartLabels4: Label[] = ['Deaths'];
  lineChartOptions4 = {
    responsive: true,
  };
  lineChartColors4: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: ['rgba(250,109,33,0.7)']
    }
  ];
  lineChartLegend4 = true;
  lineChartPlugins4 = [];
  lineChartType4 = 'line';
  ngOnInit(): void {
  }

}
