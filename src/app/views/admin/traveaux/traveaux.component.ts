import { Component, OnInit } from '@angular/core';
import {Clients} from '../Model/Clients.model';
import {Commande} from '../Model/Commande.model';
import {ClientsService} from '../services/clients.service';
import {EnginsService} from '../services/engins.service';
import {ComandService} from '../services/comand.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-traveaux',
  templateUrl: './traveaux.component.html',
  styleUrls: ['./traveaux.component.css']
})
export class TraveauxComponent implements OnInit {

  datasource: any;
  list_Client: any;
  list_Cmd: [];
  exist:boolean=true
  cl: Clients = new Clients();
  cmd:Commande=new Commande();
  operation:any;
  constructor(
      private clientService:ClientsService,
      private enginService:EnginsService,
      private comandeService:ComandService

  ) { }

  ngOnInit(): void {
    this.getOperation();
    this.getComand();

  }
  getOperation()
  {
    this.enginService.getOperation().subscribe(
        data=>{
          this.operation=data;
        }
    )
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

        },error => {
          this.cl=new Clients();
          this.exist=false
          console.log(error)

        }

    )
  }



  add_cmd() {

    console.log(this.cmd)


    this.comandeService.ajouter_Commande(this.cmd)

        .subscribe(data =>
            {
              console.log(data),
                  Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: "La commande est fait avec Succes",
                    showConfirmButton: false,
                    timer: 1500
                  })

              //this.getClient();

            },error => {
              console.log(error)
              Swal.fire({
                icon: 'error',
                title: 'Erreur ',
                text: 'Veuillez réessayer',
                footer:''
              })
            }





        );




  }
  public getComand(){
    this.comandeService.getComand().subscribe(

        (data:any)=>{
          // this.totalPages=data['page'].totalPages
          //this.pages=new Array<number>(this.totalPages)
          this.list_Cmd=data._embedded.commandes

        }

    )

  }



}
