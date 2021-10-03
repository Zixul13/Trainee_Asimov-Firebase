import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AuthService } from './shared/services/auth.service';

import { SignInComponent } from './components/sign-in/sign-in.component';
import { InicialComponent } from './components/inicial/inicial.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

import { DashboardModule } from './dashboard/dashboard.module';
import { CalculadoraModule } from './calculadora';
import { TarefasModule } from './tarefas/tarefas.module';
import { JogoDaVelhaModule } from './jogo-da-velha/jogo-da-velha.module';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    InicialComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    CalculadoraModule,
    TarefasModule,
    JogoDaVelhaModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
