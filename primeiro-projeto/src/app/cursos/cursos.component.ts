import { Component, OnInit } from '@angular/core';
import {CursosService} from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos:string[];

  nomePortal:string;

  constructor(private cursosSerivice:CursosService) {
    this.nomePortal = 'http://loiane.training';

    //for(let i = 0; i<this.cursos.length;i++){
    //  var curso:string = this.cursos[i];
    //}
    this.cursos = cursosSerivice.getCursos();
   }

  ngOnInit() {
  }

}
