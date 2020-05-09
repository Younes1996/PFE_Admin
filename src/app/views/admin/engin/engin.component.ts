import { Component, OnInit } from '@angular/core';

import {Engins} from '../Model/Engins.model';
import {EnginsService} from '../services/engins.service';
import Swal from "sweetalert2";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Marque} from '../Model/Marque.model';

@Component({
  selector: 'app-engin',
  templateUrl: './engin.component.html',
  styleUrls: ['./engin.component.css']
})
export class EnginComponent implements OnInit {
    public size:number=5;
    public currentpage:number=0;
    public totalPages:number
    public pages:Array<number>
    public isMax:boolean
    datasource:string ;
    engin: Engins = new Engins();
    marques:Marque=new Marque();
    list_engin:any
    list_marque:any
    TypeMat=[{name:"Moiseneuse batteuse"},{name:"Tracteur "},{name:"Matériel Attelé "}]
    operation:any

        //[{name:"Labour Profond"},{name:"Epandage "},{name:"Fourage "},{name:"Moisson-batage"}]
    Etats=[{name:"En Marche"},{name:"En panne"},{name:"En Réparation"},{name:"Riformé"},{name:"Vutuste"}]
    employes=[]
    index: any;
    constructor(private enginService:EnginsService,
  //private router:Router

  ) { }


  ngOnInit(): void {
        this.getEngin();
        this.getEmploye_by_cat();
        this.getOperation()

  }


getEmploye_by_cat()
{
    this.enginService.get_Employe_by_Cat().subscribe(
        (data:any)=>{
            this.employes=data._embedded.employes;
        }
    )
}
getMarques()
{
    this.enginService.getMarque(this.engin.typeMat).subscribe(
        (data:any)=>{
            this.list_marque=data._embedded.marques;
        }
    )
}


  get_Info(c: any) {
        this.engin=c;
  }

  add_engin() {
    this.enginService.ajouter_Engin(this.engin)
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

              this.getEngin();

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

  private getEngin() {
    this.enginService.getEngint_By_Page(this.size,this.currentpage).subscribe(

          (data:any)=>{
              this.totalPages=data['page'].totalPages
              this.pages=new Array<number>(this.totalPages)
              this.list_engin=data._embedded.engins

          }

      )

  }



    ajouterMarque() {
        this.enginService.ajouter_Marque(this.marques)
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

    get_Next_Page() {
        this.currentpage=this.currentpage+1
        this.getEngin()

        if(this.currentpage==this.totalPages)
        {
            this.isMax==false
        }

    }

    get_Previouss_Page() {
        this.currentpage=this.currentpage-1
        this.getEngin()
    }
    Onget_Engin(i: number) {
        this.currentpage=i;
        this.getEngin()

    }

    public filter_Engins() {
        this.enginService.Filter_Engins(this.datasource).subscribe(

            (data:any) =>this.list_engin=data._embedded.engins
        )


    }

    delete_Engins(id: any) {
        Swal.fire({
            title: 'Vous êtes sure?',
            text: "L'engins sera perdu!",
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
                this.enginService.delete_Engin(id)
                    .subscribe(data=>{
                            console.log(data);
                            this.getEngin();
                        }
                    );
            }
        })


    }
    getOperation()
    {
        this.enginService.getOperation().subscribe(
            data=>{
                this.operation=data;
            }
        )
    }
    ajouterOperation() {
        console.log(this.engin.operation)
        this.enginService.ajouter_Operation(this.engin)
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
                    this.getOperation()

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

    afficher() {
        console.log("dec")
    }

    update_engin() {
        this.enginService.update_Engin(this.engin,this.engin.id)
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

                    this.getEngin()

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
}
