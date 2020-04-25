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
    engin: Engins = new Engins();
    marques:Marque=new Marque();
    list_engin:any
    list_marque:any
    TypeMat=[{name:"Moiseneuse batteuse"},{name:"Tracteur "},{name:"Matériel Attelé "}]
    operation=[{name:"Labour Profond"},{name:"Epandage "},{name:"Fourage "},{name:"Moisson-batage"}]
    Etats=[{name:"En Marche"},{name:"En panne"},{name:"En Réparation"},{name:"Riformé"},{name:"Vutuste"}]
    employes=[]
    constructor(private enginService:EnginsService,
  //private router:Router

  ) { }


  ngOnInit(): void {
        this.getEngin();
   this.getEmploye_by_cat();
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
  delete_Engin(id: any) {
    console.log(id)
  }

  get_Info(c: any) {
    console.log(c)
  }

  add_engin() {
      console.log(this.engin)
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
}
