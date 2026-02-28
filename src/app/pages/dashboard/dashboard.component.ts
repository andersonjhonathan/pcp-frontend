import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class DashboardComponent {

  totalTarefas = 50248;
  avancoGeral = 62;
  atrasadas = 312;
  concluidas = 18420;

  barChartType: ChartType = 'bar';

  barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['Mecânica', 'Elétrica', 'Tubulação', 'Civil'],
    datasets: [
      {
        data: [65, 45, 80, 50],
        label: 'Avanço por Disciplina (%)',
        backgroundColor: '#f37021'
      }
    ]
  };

  lineChartType: ChartType = 'line';

  lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai'],
    datasets: [
      {
        data: [10, 25, 40, 55, 62],
        label: 'Curva de Avanço (%)',
        borderColor: '#f37021',
        backgroundColor: 'rgba(243,112,33,0.2)',
        fill: true,
        tension: 0.4
      }
    ]
  };
}