import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
  datasource: any;
  list_Client: any;

  constructor() { }

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
}
