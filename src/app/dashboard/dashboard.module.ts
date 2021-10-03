import { JogoDaVelhaModule } from './../jogo-da-velha/jogo-da-velha.module';
import { TarefasModule } from './../tarefas/tarefas.module';
import { CalculadoraModule } from './../calculadora/calculadora.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DadosService } from './dados.service';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    CalculadoraModule,
    TarefasModule,
    JogoDaVelhaModule
  ],
  exports:[
    DashboardComponent
  ],
  providers:[
    DadosService
  ]
})
export class DashboardModule { }
