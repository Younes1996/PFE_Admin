import { Component, OnInit } from '@angular/core';
import {Tarif} from '../Model/Tarif.model';
import {EnginsService} from '../services/engins.service';
import {TarifsService} from '../services/tarifs.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-tarif',
  templateUrl: './tarif.component.html',
  styleUrls: ['./tarif.component.css']
})
export class TarifComponent implements OnInit {
  datasource: any;

  NatureTravail:any
  tarif:Tarif=new Tarif();
  list_tarif: any;
  Outils:any
  Tracteur:any
  public size:number=5;
  public currentpage:number=0;
  public totalPages:number
  public pages:Array<number>
    private isMax: boolean;
  constructor(
      private enginsService: EnginsService,
      private tarifsService: TarifsService
  ) { }

  ngOnInit(): void {
    this.getNatureTravail();
    this.getOutils();
    this.getTracteur();
    this.getTarif()
  }

  filter() {
      this.tarifsService.Filter_Outils(this.datasource).subscribe(

          (data:any) =>this.list_tarif=data._embedded.tarifs
      )

  }

  get_Info(c: any) {
      this.tarif=c;

  }

  delete_client(id: any) {
      Swal.fire({
          title: 'Vous êtes sure?',
          text: "Les Tarifes sera perdu!",
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
              this.tarifsService.delete_tarif(id)
                  .subscribe(data=>{
                          console.log(data);
                          this.getTarif();
                      }
                  );
          }
      })

  }

    get_Next_Page() {
        this.currentpage=this.currentpage+1
        this.getTarif()

        if(this.currentpage==this.totalPages)
        {
            this.isMax==false
        }

    }

    get_Previouss_Page() {
        this.currentpage=this.currentpage-1
        this.getTarif()



    }

  ajouterTarif() {


    this.tarifsService.ajouter_tarif(this.tarif)
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

              this.getTarif();

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

  getNatureTravail()
  {
    this.enginsService.getOperation().subscribe(
        data=>{
          this.NatureTravail=data;
        }
    )
  }

  getOutils() {
    this.Outils=null
    this.tarifsService.getOutils(this.tarif.natureTravail).subscribe(
        (data:any)=>{
          this.Outils=data._embedded.engins;
        }
    )
  }
  getTracteur(){
    this.enginsService.getTracteur("Tracteur").subscribe(
        (data:any)=>{
          this.Tracteur=data._embedded.engins;
        }
    )
  }
  getTarif(){
    this.tarifsService.get_tarif_By_Page(this.size,this.currentpage).subscribe(

        (data:any)=>{
          this.totalPages=data['page'].totalPages
          this.pages=new Array<number>(this.totalPages)
          this.list_tarif=data._embedded.tarifs

        }

    )
  }

    update_Tarif() {
        this.tarifsService.update_Tarif(this.tarif,this.tarif.id)
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

                    this.getTarif()

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

    Onget_Tarif(i: number) {
        this.currentpage=i;
        this.getTarif();
    }
}
