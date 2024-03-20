import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeevoDesafioComponent } from './keevo-desafio/keevo-desafio.component';
import { ShowTarefasComponent } from './keevo-desafio/show-tarefas/show-tarefas.component';
import { AddEditComponent } from './keevo-desafio/add-edit/add-edit.component';
import { KeevoDesafioApiService } from './keevo-desafio-api.service';

@NgModule({
  declarations: [
    AppComponent,
    KeevoDesafioComponent,
    ShowTarefasComponent,
    AddEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [KeevoDesafioApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
