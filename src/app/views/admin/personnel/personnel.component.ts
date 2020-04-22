import { Component, OnInit } from '@angular/core';
import {ContactsService} from '../services/contacts.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.css']
})
export class PersonnelComponent implements OnInit {
  constructor(
      private contactservice:ContactsService,

  ) { }

  public size:number=5;
  public currentPage:number=0;

  public contacts=[];
    datasource:string

    ngOnInit(): void {
         this.contactservice.getEmpploye()
        .subscribe((data:any)=>this.contacts=data);
  }
  Catgorie=[{id:1,name:'Gérant'},{id:2,name:'Chaufeur'},{id:3,name:'Mécanicien'}]
  fonctions=[{id:1,name:'C-service'},{id:2,name:'Comtable'},{id:3,name:'S-directeur'}]
  wilaya=[{id:1,name:'Adrar'},{id:2,name:'Bejaia'},{id:3,name:'Setif'}]
  daira=[{id:1,name:'El eulma'},{id:2,name:'Djemila'},{id:3,name:'Hamam sokhna'}]
  Comune=[{id:1,name:'Bazer sakhra'},{id:2,name:'Tella'},{id:3,name:'Ras Maa'}]

  Employe={
    id:"",
    nom:"",
    prenom:"",
    dateNaissance:'',
    lieuN:"",
    adresse:"",
    tel:"",
    categorie:"",
    fonction:"",
    calification:"",
    decision:"",
    wilaya:"",
    daira:"",
    commune:"",


  };

  saveEmploye(date:any){
      console.log(date)

         this.contactservice.createEmployee(this.Employe)
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

                  this.getEmploye()

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
  translate(c:any){

    this.Employe.id=c.id;
    this.Employe.nom=c.nom;
    this.Employe.prenom=c.prenom;
    this.Employe.dateNaissance=c.dateN;
    this.Employe.lieuN=c.lieuN;
    this.Employe.adresse=c.adresse;
    this.Employe.tel=c.tel;
    this.Employe.categorie=c.categorie;
    this.Employe.fonction=c.fonction;
    this.Employe.calification=c.calification;
    this.Employe.decision=c.decision;
    this.Employe.wilaya=c.wilaya;
    this.Employe.daira=c.daira;
    this.Employe.commune=c.commune;



  }
  deleteContact(id:number){




        /////////////////////////////////////////////////////
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
        this.contactservice.deleteContact(id)
            .subscribe(data=>{
                  console.log(data);
                  this.getEmploye();
                }
            );
      }
    })



  }






  public getEmploye(){
    this.contactservice.getEmpploye()
        .subscribe((data:any)=>this.contacts=data);

  }


  submit(){

  }

  onGetEmploye(){
    this.contactservice.getEmploye(this.currentPage,this.size )
        .subscribe((data:any)=>{
          this.contacts=data;
        },err=>{
          console.log(err);
        });

  }


    updateEmploye() {
       console.log(this.Employe)

            this.contactservice.updateEmployee(this.Employe,this.Employe.id)
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

                        this.getEmploye()

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


    filter() {
     this.contactservice.Filter_Emolye(this.datasource).subscribe(

         (data:any) =>this.contacts=data._embedded.employes
     )

    }
}
