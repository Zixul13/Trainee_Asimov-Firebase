import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
 

import { CalculadoraRoutes } from "../calculadora/calculadora-routing.module";
import { TarefaRoutes } from "../tarefas/tarefas.routing.module";
import { JogoDaVelhaRoutes } from "../jogo-da-velha/jogo-da-velha-routing.module";


export const DashboardRoutes: Routes = [
	{
		path: 'dashboard',
		component: DashboardComponent,
	},

];