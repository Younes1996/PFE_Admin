import { Component, OnInit } from '@angular/core';
import {ClientsService} from '../services/clients.service';
import Swal from 'sweetalert2';
import {Clients} from '../Model/Clients.model';


//import Swal from "sweetalert2";
//import {ClientsService} from '../services/clients.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

    public size:number=5;
    public currentpage:number=0;
    public totalPages:number
    public pages:Array<number>
    public isMax:boolean
    public datasource:string
    cl: Clients = new Clients();
    public index:number;
    list_Client=[]
    type=[{id:1,name:'Agriculteur'},{id:2,name:'EAC'},{id:3,name:'Multiplicateur'}]



    constructor(
       private clientService: ClientsService,

    ) {}

    ngOnInit(): void {
       this.getClient()

    }



    add_Client() {




           this.clientService.ajouter_Client(this.cl)
                .subscribe(data =>
                    {
                        console.log(data),
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'L ajout est fait avec Succes',
                                showConfirmButton: false,
                                timer: 1500
                            })

                        this.getClient();

                    },error => {
                        console.log(error)
                        Swal.fire({
                            icon: 'error',
                            title: '',
                            text: 'Veuillez réessayer',
                            footer:''
                        })
                    }





                );




    }

    delete_client(id: any) {
        Swal.fire({
            title: 'Vous êtes sure?',
            text: "Le client sera perdu!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirmer'
        }).then((result) => {
            if (result.value) {
                Swal.fire(
                    'Bien Supprimé!',
                    'La suppression est bien Fait.',
                    'success'
                )
                this.clientService.deleteClient(id)
                    .subscribe(data=>{
                            console.log(data);
                            this.getClient();
                        }
                    );
            }
        })


    }


    public getClient(){
        this.clientService.getClient_By_Page(this.size,this.currentpage).subscribe(

            (data:any)=>{
                this.totalPages=data['page'].totalPages
                this.pages=new Array<number>(this.totalPages)
                this.list_Client=data._embedded.clients

            }

        )

    }

    update_Client() {
        this.clientService.updateClient(this.cl,this.cl.id)
            .subscribe(data =>
                {
                    console.log(data),
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Le mise a jour est bien fait',
                            showConfirmButton: false,
                            timer: 1500
                        })

                    this.getClient()

                },error => {
                    console.log(error)
                    Swal.fire({
                        icon: 'error',
                        title: '',
                        text: '',
                        footer:''
                    })
                }





            );

    }

    get_Info(c: any) {
        this.cl=c;
    }

    Onget_Client(i: number) {
        this.currentpage=i;
        this.getClient()

    }

    get_Next_Page() {
        this.currentpage=this.currentpage+1
        this.getClient()

        if(this.currentpage==this.totalPages)
        {
            this.isMax==false
        }

    }

    get_Previouss_Page() {
        this.currentpage=this.currentpage-1
        this.getClient()



    }

    filter() {
        this.clientService.Filter_Client(this.datasource).subscribe(

            (data:any) =>this.list_Client=data._embedded.clients
        )


    }
}
