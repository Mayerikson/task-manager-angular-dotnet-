import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TarefaService } from '../../services/tarefa';
import { Tarefa } from '../../models/tarefa.model';

@Component({
  selector: 'app-tarefa-lista',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tarefa-lista.html',
  styleUrl: './tarefa-lista.css'
})
export class TarefaListaComponent implements OnInit {
  tarefas: Tarefa[] = [];
  filtroStatus: string = 'Todos';

  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {
    this.carregarTarefas();
  }

  carregarTarefas(): void {
    this.tarefaService.getTarefas().subscribe({
      next: (data) => {
        this.tarefas = data;
      },
      error: (err) => console.error('Erro ao carregar tarefas', err)
    });
  }

  excluirTarefa(id: number | undefined): void {
    if (id && confirm('Tem certeza que deseja excluir esta tarefa?')) {
      this.tarefaService.deleteTarefa(id).subscribe({
        next: () => {
          this.carregarTarefas();
        },
        error: (err) => console.error('Erro ao excluir tarefa', err)
      });
    }
  }

  get tarefasFiltradas(): Tarefa[] {
    if (this.filtroStatus === 'Todos') return this.tarefas;
    return this.tarefas.filter(t => t.status === this.filtroStatus);
  }

  setFiltro(status: string): void {
    this.filtroStatus = status;
  }
}
