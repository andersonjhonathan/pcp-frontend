import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gantt',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './gantt.html',
})
export class GanttComponent {

  tarefas = [
    {
      descricao: 'Planejamento',
      inicio: new Date('2026-03-01'),
      fim: new Date('2026-03-05')
    },
    {
      descricao: 'Execução',
      inicio: new Date('2026-03-06'),
      fim: new Date('2026-03-15')
    },
    {
      descricao: 'Entrega',
      inicio: new Date('2026-03-16'),
      fim: new Date('2026-03-20')
    }
  ];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
  labels: this.tarefas.map(t => t.descricao),
  datasets: [
    {
      label: 'Tarefas',
      data: this.tarefas.map(t => [
        t.inicio.getTime(),
        t.fim.getTime()
      ])
    }
  ]
};

 public barChartOptions: ChartConfiguration<'bar'>['options'] = {
  indexAxis: 'y',
  responsive: true,
  scales: {
    x: {
      type: 'time',
      time: {
        unit: 'day'
      }
    },
    y: {
      type: 'category'
    }
  }
};

  public barChartType: 'bar' = 'bar';
}