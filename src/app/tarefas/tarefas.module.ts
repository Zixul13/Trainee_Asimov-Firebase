import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarefaService } from './shared/tarefa.service';
import { ListarTarefaComponent } from './listar/listar-tarefa.component';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { CadastrarTarefasComponent } from './cadastrar/cadastrar-tarefas.component';
import { EditarTarefasComponent } from './editar/editar-tarefas.component';
import { TarefaConcluidaDirective } from './shared/tarefa-concluida.directive';

@NgModule({
  declarations: [
    ListarTarefaComponent,
    CadastrarTarefasComponent,
    EditarTarefasComponent,
    TarefaConcluidaDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    
  ],
  providers:[
    TarefaService,
  ]
})
export class TarefasModule { }
