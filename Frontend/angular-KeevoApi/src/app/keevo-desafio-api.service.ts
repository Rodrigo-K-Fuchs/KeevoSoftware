import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class KeevoDesafioApiService {

  readonly KeevoDesafioApiURL = "https://localhost:7235/api";



  constructor(private http:HttpClient) { }

  //TAREFAS

  getTarefaList():Observable<any[]>{
    return this.http.get<any>(this.KeevoDesafioApiURL + '/tarefas');
  }

  addTarefa(data:any){
    return this.http.post(this.KeevoDesafioApiURL + '/tarefas', data);
  }

  updateTarefa(id:number|string, data:any){
    return this.http.put(this.KeevoDesafioApiURL + `/tarefas/${id}`, data);
  }

  deleteTarefa(id:number|string){
    return this.http.delete(this.KeevoDesafioApiURL + `/tarefas/${id}`);
  }

  //TAREFAS TIPO
  
  getTarefaTipoList():Observable<any[]>{
    return this.http.get<any>(this.KeevoDesafioApiURL + '/tarefasTipos');
  }

  addTarefaTipo(data:any){
    return this.http.post(this.KeevoDesafioApiURL + '/TarefasTipos', data);
  }

  updateTarefaTipo(id:number|string, data:any){
    return this.http.put(this.KeevoDesafioApiURL + `/TarefasTipos/${id}`, data);
  }

  deleteTarefaTipo(id:number|string){
    return this.http.delete(this.KeevoDesafioApiURL + `/TarefasTipos/${id}`);
  }

  //Status

  getStatusList():Observable<any[]>{
    return this.http.get<any>(this.KeevoDesafioApiURL + '/Status');
  }

  addStatus(data:any){
    return this.http.post(this.KeevoDesafioApiURL + '/Status', data);
  }

  updateStatus(id:number|string, data:any){
    return this.http.put(this.KeevoDesafioApiURL + `/Status/${id}`, data);
  }

  deleteStatus(id:number|string){
    return this.http.delete(this.KeevoDesafioApiURL + `/Status/${id}`);
  }
  


}
