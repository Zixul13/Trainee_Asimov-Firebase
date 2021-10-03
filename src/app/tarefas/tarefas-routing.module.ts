import { Routes } from '@angular/router';
import { ListarTarefaComponent } from './listar/listar-tarefa.component';
import { CadastrarTarefasComponent } from './cadastrar/cadastrar-tarefas.component';
import { EditarTarefasComponent } from './editar/editar-tarefas.component';

export const TarefaRoutes: Routes = [
	{
		path: 'tarefas',
		redirectTo: 'tarefas/listar'
	},
	{
		path: '/inicial/tarefas/listar',
		component: ListarTarefaComponent
	},
	{
		path: '/inicial/tarefas/cadastrar',
		component: CadastrarTarefasComponent
	},
	{
		path: '/inicial/tarefas/editar/:id',
		component: EditarTarefasComponent
	}
];
