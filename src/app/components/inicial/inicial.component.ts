import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.css']
})
export class InicialComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
