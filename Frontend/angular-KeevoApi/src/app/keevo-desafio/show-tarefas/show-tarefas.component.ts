import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { KeevoDesafioApiService } from '../../keevo-desafio-api.service';
import { MatDialog } from '@angular/material/dialog';
import { AddEditComponent } from '../add-edit/add-edit.component';

@Component({
  selector: 'app-show-tarefas',
  templateUrl: './show-tarefas.component.html',
  styleUrls: ['./show-tarefas.component.css']
})
export class ShowTarefasComponent implements OnInit {

  TarefasList$!: Observable<any[]>;
  TarefasTiposList$!: Observable<any[]>;
  StatusList$!: Observable<any[]>;
  TarefasTiposList: any = [];
  StatusList: any = [];

  TarefasTiposMap: Map<number, string> = new Map();
  StatusTiposMap: Map<number, string> = new Map();

  constructor(private service: KeevoDesafioApiService, private dialogRef: MatDialog) { }

  ngOnInit(): void {
    this.TarefasList$ = this.service.getTarefaList();
    this.TarefasTiposList$ = this.service.getTarefaTipoList();
    this.StatusList$ = this.service.getStatusList();
    this.refreshTarefasTiposMap();
    this.refreshStatusTiposMap();
  }

  modalTitle: string = '';
  tarefeiro: any;
  Ativa: boolean = false;

  modalEdit(item: any) {
    this.tarefeiro = item;
    this.modalTitle = "Edição Tarefa";
    this.Ativa = true;
  }

  refreshTarefasTiposMap() {
    this.service.getTarefaTipoList().subscribe(data => {
      this.TarefasTiposList = data;

      for (let i = 0; i < data.length; i++) {
        this.TarefasTiposMap.set(this.TarefasTiposList[i].id, this.TarefasTiposList[i].tarefaNome)
      }
    });
  }

  refreshStatusTiposMap() {
    this.service.getStatusList().subscribe(data => {
      this.StatusList = data;

      for (let i = 0; i < data.length; i++) {
        this.StatusTiposMap.set(this.StatusList[i].id, this.StatusList[i].statusNome)
      }
    });
  }

  openDialogg(): void {
    const dialogRef = this.dialogRef.open(AddEditComponent, {
      panelClass: 'custom-dialog-container',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.TarefasList$ = this.service.getTarefaList();
      console.log('The dialog was closed');
    });
  }

  openDialog(item:any | null = null): void {
    const dialogRef = this.dialogRef.open(AddEditComponent, {
      panelClass: 'custom-dialog-container',
      data: { item: item } 
    });

    dialogRef.afterClosed().subscribe(result => {
      this.TarefasList$ = this.service.getTarefaList();
      console.log('The dialog was closed');
    });
  }

  deletaTarefa(id:number){
    this.service.deleteTarefa(id).subscribe(res => {

      var showAddSuccess = document.getElementById('add-delete-alert');
      if(showAddSuccess){
        showAddSuccess.style.display = 'block';
      }
      setTimeout(function() {
        if (showAddSuccess) {
          showAddSuccess.style.display = 'none';
        }
      }, 4000);
      this.TarefasList$ = this.service.getTarefaList();
    })
    this.TarefasList$ = this.service.getTarefaList();
  }

  abrirModalIndesejado: boolean = false;

  openUpdateDialog(tarefaId: number): void {
    this.openDialog(tarefaId);
  }
}
