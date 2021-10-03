import { DashboardComponent } from './dashboard/dashboard.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { InicialComponent } from './components/inicial/inicial.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';



import { AuthGuard } from "./shared/guard/auth.guard";
import { CalculadoraRoutes } from './calculadora/calculadora-routing.module';
import { TarefaRoutes } from './tarefas/tarefas.routing.module';
import { JogoDaVelhaRoutes } from './jogo-da-velha/jogo-da-velha-routing.module';


const routes: Routes = [
  { path: '', 
  redirectTo: '/sign-in', 
  pathMatch: 'full' },

  { path: 'sign-in', 
  component: SignInComponent },

  { path: 'register-user', 
  component: SignUpComponent },

  { path: 'inicial', 
  component: InicialComponent, 
  canActivate: [AuthGuard], children:[
    
    { path: '',
      component: DashboardComponent 
    },
    ...CalculadoraRoutes,
    ...TarefaRoutes,
    ...JogoDaVelhaRoutes
  ]},

  { path: 'forgot-password', 
  component: ForgotPasswordComponent },

  { path: 'verify-email-address', 
  component: VerifyEmailComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
