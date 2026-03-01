import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tarefas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tarefas.html',
  styleUrls: ['./tarefas.css'],
})
export class TarefasComponent {

  tarefa = {
    codigo: '',
    descricao: '',
    dataInicio: '',
    dataFim: ''
  };

  salvar() {
    console.log(this.tarefa);
  }
}