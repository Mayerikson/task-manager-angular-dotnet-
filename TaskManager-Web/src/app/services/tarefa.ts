import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarefa } from '../models/tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  // URL da API - Ajustar conforme o ambiente de execução
  private apiUrl = 'http://localhost:5000/api/tarefas';

  constructor(private http: HttpClient) { }

  // Busca todas as tarefas
  getTarefas(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(this.apiUrl);
  }

  // Busca uma tarefa por ID para edição
  getTarefa(id: number): Observable<Tarefa> {
    return this.http.get<Tarefa>(`${this.apiUrl}/${id}`);
  }

  // Envia uma nova tarefa para o servidor
  createTarefa(tarefa: Tarefa): Observable<Tarefa> {
    return this.http.post<Tarefa>(this.apiUrl, tarefa);
  }

  // Atualiza uma tarefa existente
  updateTarefa(id: number, tarefa: Tarefa): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, tarefa);
  }

  // Remove uma tarefa
  deleteTarefa(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
