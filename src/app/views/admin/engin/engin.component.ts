import { Component, OnInit } from '@angular/core';
import {ClientsService} from '../services/clients.service';
@Component({
  selector: 'app-engin',
  templateUrl: './engin.component.html',
  styleUrls: ['./engin.component.css']
})
export class EnginComponent implements OnInit {
  client='../client'
  engin='../engin'
  personnel='../personnel'
  // @ts-ignore
  constructor(private contactservice:ClientsService,
  //private router:Router

  ) { }

  sele:any
contacts=[];
  ngOnInit(): void {

  }
  edit(){
    this.sele="eeeeee"
  }
  contact={nom:"",prenom:"",email:"",dateNaissance:"",tel:""};

  saveEngin(){
    console.log('sssssssssss')

  }

}
