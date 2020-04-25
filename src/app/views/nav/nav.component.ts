import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-na',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }
  client='../client'
  engin='../engin'
  personnel='../personnel'
  produit='../produit'
  tarif='../tarif'


  ngOnInit(): void {
  }

}
