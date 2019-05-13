import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.css']
})
export class DataBidingComponent implements OnInit {

  url:string = 'http://fabricio.com';
  valor:any = 10;
  cursoAngular:boolean = true;
  urlImagem:string = 'http://lorempixel.com/400/200/nature/';
  
  constructor() { }

  ngOnInit() {
  }

  getValor(){
    return this.valor;
  }

  isCursoAngular(){
    return this.cursoAngular;
  }

  curtirCurso(){
    return true;
  }
}
