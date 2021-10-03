import { Injectable, NgZone } from '@angular/core';
import { User } from "../services/user";
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  userData: any; // Salvar dados do usuário logado

  constructor(
    public afs: AngularFirestore,   // Serviço Firestore
    public afAuth: AngularFireAuth, // Serviço Angular Fire
    public router: Router,
    public ngZone: NgZone // Serviço NgZone
  ) {
    /* Salvando os dados do usuário no cache quando
    estiver logado e setando como null quando deslogado*/
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')|| '{}');
      } else {
        localStorage.setItem('user', '{}');
        JSON.parse(localStorage.getItem('user')|| '{}');
      }
    })
  }

  // Sign in with email/password
   SignIn(email:any, password:any) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result:any) => {
        this.ngZone.run(() => {
          this.router.navigate(['inicial']);
        });
        this.SetUserData(result.user);
      }).catch((error:any) => {
        window.alert(error.message)
      })
  }

  // Função para Cadastrar com e-mail e senha
  SignUp(email:any, password:any) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result:any) => {
        /* Chama a função SendVerificationEmail() quando um
        novo usuário e cadastrado e retorna uma Promise*/
        this.SendVerificationMail();
        this.SetUserData(result.user);
      }).catch((error:any) => {
        window.alert(error.message)
      })
  }

  // Função de envio de verificação de e-mail
  async SendVerificationMail() {
    return (await this.afAuth.currentUser.then(u => u?.sendEmailVerification())
      .then(() => {
        this.router.navigate(['verify-email-address']);
      }))
  }

  // Função esqueci minha senha
  ForgotPassword(passwordResetEmail:any) {
    return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      window.alert('Password reset email sent, check your inbox.');
    }).catch((error:any) => {
      window.alert(error)
    })
  }

  // Retorna true quando o usuário está logado e o e-mail verificado
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')|| '{}');
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  // Função para login com a conta Google
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }
  AuthLogin(provider:any) {
    return this.afAuth.signInWithPopup(provider)
    .then((result:any) => {
       this.ngZone.run(() => {
          this.router.navigate(['inicial']);
        })
      this.SetUserData(result.user);
    }).catch((error:any) => {
      window.alert(error)
    })
  }

  /* Setando os dados do usuário quando ele loga em sua conta ou
  realiza o cadastro*/
  SetUserData(user:any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }
    return userRef.set(userData, {
      merge: true
    })
  }

  // Função para deslogar da conta
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['sign-in']);
    })
  }
}