import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.css']
})
export class DataBidingComponent implements OnInit {

  url:string = 'http://fabricio.com';
  cursoAngular:boolean = true;
  urlImagem:string = 'http://lorempixel.com/400/200/nature/';
  mensagem: string;
  valor : string = '';
  isMouseOver : boolean = false;
  constructor() { }

  ngOnInit() {
  }

  getValor(){
    return this.valor;
  }

  onBlur(){
    
  }

  isCursoAngular(){
    return this.cursoAngular;
  }

  botaoClicado(){
    alert('Olá ' + this.valor + ' !');
  }

  setValor(a : any){
    this.valor = a;
  }

  onKeyUp(evento: KeyboardEvent){

    console.log((<HTMLInputElement>evento.target).value);
    
    if( evento.key == 'Enter' && !evento.ctrlKey){
        console.log('apertei enter');
        //this.valor = (<HTMLInputElement>evento.target).value;
    } else if(evento.key == 'Enter' && evento.ctrlKey){
        console.log('apertei enter e control junto');
    }
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
    console.log(this.isMouseOver);
  }
  curtirCurso(){
    return true;
  }
}
