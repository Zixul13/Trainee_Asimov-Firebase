import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() { }

  OnSubmit(form: NgForm){
    this.authService.SignIn(form.value.userEmail, form.value.userPassword);
  }

}