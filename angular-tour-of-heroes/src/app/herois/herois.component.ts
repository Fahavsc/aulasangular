import { Component, OnInit } from '@angular/core';
import { HEROIS } from '../MockHerois';
import { Heroi } from '../Heroi';

@Component({
  selector: 'herois',
  templateUrl: './herois.component.html',
  styleUrls: ['./herois.component.css']
})
export class HeroisComponent implements OnInit {
  herois = HEROIS;
  selectedHeroi : Heroi;

  onSelect(h : Heroi){
      this.selectedHeroi = h;
  }

  constructor() { 

  }

  ngOnInit() {
  }

}
