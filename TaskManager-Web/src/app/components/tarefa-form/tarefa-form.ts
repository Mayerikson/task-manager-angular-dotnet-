import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TarefaService } from '../../services/tarefa';
import { Tarefa } from '../../models/tarefa.model';

@Component({
  selector: 'app-tarefa-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './tarefa-form.html',
  styleUrl: './tarefa-form.css'
})
export class TarefaFormComponent implements OnInit {
  tarefa: Tarefa = {
    titulo: '',
    descricao: '',
    status: 'Pendente'
  };
  isEditMode: boolean = false;

  constructor(
    private tarefaService: TarefaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.tarefaService.getTarefa(+id).subscribe({
        next: (data) => {
          this.tarefa = data;
        },
        error: (err) => console.error('Erro ao carregar tarefa', err)
      });
    }
  }

  salvarTarefa(): void {
    if (this.isEditMode && this.tarefa.id) {
      this.tarefaService.updateTarefa(this.tarefa.id, this.tarefa).subscribe({
        next: () => {
          alert('Tarefa atualizada com sucesso!');
          this.router.navigate(['/tarefas']);
        },
        error: (err) => console.error('Erro ao atualizar tarefa', err)
      });
    } else {
      this.tarefaService.createTarefa(this.tarefa).subscribe({
        next: () => {
          alert('Tarefa criada com sucesso!');
          this.router.navigate(['/tarefas']);
        },
        error: (err) => console.error('Erro ao criar tarefa', err)
      });
    }
  }
}
