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

  engin: Engins = new Engins();
  marques:Marque=new Marque();
  list_engin:any
    list_marque:any
    TypeMat=[{name:"Moiseneuse batteuse"},{name:"Tracteur "},{name:"Matériel Attelé "}]
    Marque=[{name:"Moiseneuse batteuse"},{name:"Tracteur "},{name:"Matériel Attelé "}]
    employes=[]
    constructor(private enginService:EnginsService,
  //private router:Router

  ) { }


  ngOnInit(): void {
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
    this.enginService.getMarque(this.engin.type_mat).subscribe(
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
      console.log(this.engin.chaufeur)
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
    this.enginService.get_Engin()
        .subscribe(data=>this.list_engin=data);

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

    update_Client() {

    }
}
