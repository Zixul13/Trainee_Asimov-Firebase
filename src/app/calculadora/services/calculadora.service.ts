import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  static readonly SOMA: string = "+";
  static readonly SUBT: string = "-";
  static readonly PROD: string = "*";
  static readonly DIV: string = "/";
  
  constructor() { }

  calcular(num1:number, num2:number, operacao:string): number {

    let resultado: number;

    switch(operacao){

      case CalculadoraService.SOMA:
        resultado = num1 + num2;
      break;

      case CalculadoraService.SUBT:
        resultado = num1 - num2;
      break;

      case CalculadoraService.PROD:
        resultado = num1 * num2;
      break;

      case CalculadoraService.DIV:
        resultado = num1 / num2;
      break;  

      default:
        resultado = 0;
    }
    
    return resultado;
  }

}
