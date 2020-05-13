import { Component, OnInit } from '@angular/core';
import {Clients} from '../Model/Clients.model';
import {ClientsService} from '../services/clients.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
  datasource: any;
  list_Client: any;
  cl: Clients = new Clients();


  constructor(
      private clientService:ClientsService

  ) { }

  ngOnInit(): void {
  }

    filter() {

    }

  get_Info(c: any) {
    console.log(c)

  }

  delete_client(id: any) {
    console.log(id)
  }

  getClient() {
    this.clientService.getByCarte(this.cl.carten).subscribe(

        (data:any)=>{
          this.cl=data

        }

    )
  }
}
