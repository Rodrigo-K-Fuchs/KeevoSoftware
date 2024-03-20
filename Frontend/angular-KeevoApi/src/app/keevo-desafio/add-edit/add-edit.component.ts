import { Component, Input, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { KeevoDesafioApiService } from '../../keevo-desafio-api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {
  tarefa: any = {};
  tarefaId: number = 0;
  tarefaStatus: number = 0;
  tarefaDescricao: string = '';
  tarefaResponsavel: string = '';
  tarefaTipo: number = 0;


  TarefasList$!: Observable<any[]>;
  TarefasTiposList$!: Observable<any[]>;
  StatusList$!: Observable<any[]>;

  constructor(public dialogRef: MatDialogRef<AddEditComponent>,
    private service: KeevoDesafioApiService,
    @Inject(MAT_DIALOG_DATA) public data: { item: any }) {
      
      if (data && data.item) {
        this.tarefaId = data.item.id;
        this.tarefaStatus = data.item.statusId;
        this.tarefaDescricao = data.item.descricao;
        this.tarefaResponsavel = data.item.responsavel;
        this.tarefaTipo = data.item.tarefaTipoId;        
      } else {
        
      }
    
    }

  
  id:number =this.tarefaId;
  statusId:number = this.tarefaStatus;
  descricao:string = this.tarefaDescricao;
  responsavel:string = this.tarefaResponsavel;
  tarefaTipoId:number = this.tarefaTipo;

  ngOnInit(): void {
    if (this.tarefa) {
      this.id = this.tarefaId;
      this.statusId = this.tarefaStatus;
      this.descricao = this.tarefaDescricao;
      this.responsavel = this.tarefaResponsavel;
      this.tarefaTipoId = this.tarefaTipo;
      this.StatusList$ = this.service.getStatusList();
    this.TarefasList$ = this.service.getTarefaList();
    this.TarefasTiposList$ = this.service.getTarefaList();
    }
  }

  modalTitle:string = '';
  tarefeiro:any;
  Ativa:boolean = false;

  modalEdit(item:any){
    this.tarefeiro = item;
    this.modalTitle = "Edição Tarefa";
    this.Ativa = true;
  }
  

  addTarefa(){
    var tarefa = {
      statusId:this.statusId,
      descricao:this.descricao,
      responsavel:this.responsavel,
      tarefaTipoId:this.tarefaTipoId

      
    }
    

    this.service.addTarefa(tarefa).subscribe(res => {

      var showAddSuccess = document.getElementById('add-success-alert');
      if(showAddSuccess){
        showAddSuccess.style.display = 'block';
      }
      setTimeout(function() {
        if (showAddSuccess) {
          showAddSuccess.style.display = 'none';
        }
      }, 4000);
      this.TarefasList$ = this.service.getTarefaList();
      this.closeDialog();
    })

  }


  updateTarefa(){
    var tarefa = {
      id:this.id,
      statusId:this.statusId,
      descricao:this.descricao,
      responsavel:this.responsavel,
      tarefaTipoId:this.tarefaTipoId
    }

    var id:number = this.tarefaId;
    this.service.updateTarefa(id,tarefa).subscribe(res => {

      var showAddSuccess = document.getElementById('add-update-alert');
      if(showAddSuccess){
        showAddSuccess.style.display = 'block';
      }
      setTimeout(function() {
        if (showAddSuccess) {
          showAddSuccess.style.display = 'none';
        }
      }, 4000);
      this.TarefasList$ = this.service.getTarefaList();
      this.closeDialog();
    })

  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
