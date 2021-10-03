import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../shared/tarefa.service';
import { Tarefa } from '../shared/tarefa.model';
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-tarefas',
  templateUrl: './cadastrar-tarefas.component.html',
  styleUrls: ['./cadastrar-tarefas.component.css']
})
export class CadastrarTarefasComponent implements OnInit {

  @ViewChild('formTarefa', { static: true }) formTarefa: NgForm;
  tarefa: Tarefa;

  constructor(private tarefaService: TarefaService, private router: Router) { }

  ngOnInit(): void {
    this.tarefa = new Tarefa();
  }

  cadastrar(): void{
    if(this.formTarefa.form.valid){
      this.tarefaService.cadastrar(this.tarefa);
      this.router.navigate(["/inicial/tarefas"]);
    }
  }


}
