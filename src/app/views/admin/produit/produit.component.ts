import { Component, OnInit } from '@angular/core';
import {Produit} from '../Model/Produit.model';
import Swal from "sweetalert2";
import {ProduitService} from '../services/produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
 produit:Produit =new Produit();
    public listProduits:any
    public typeProd:any
    public dataSource :string
  constructor(
      private produitService: ProduitService
  ) { }

  ngOnInit(): void {
     this.getProduit();
     this.getTypeProd();
  }

    delete_Produit(id: any) {
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
                this.produitService.delete_produit(id)
                    .subscribe(data=>{
                            console.log(data);
                            this.getProduit();
                        }
                    );
            }
        })


    }

    get_Info(c: any) {
        this.produit=c;
    }
    private getProduit() {
        this.produitService.get_Produit().subscribe(

            (data:any)=>{

                this.listProduits=data

            }

        )

    }
    private getTypeProd()
    {
        this.produitService.getTypeProduit().subscribe(

            (data:any)=>{

                this.typeProd=data

            }

        )
    }
    ajouterProduit() {
        this.produitService.ajouter_Produit(this.produit)
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
                            this.getProduit()
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

    ajouterType() {
        console.log(this.produit)
        this.produitService.ajouter_typeProd(this.produit)
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
                    this.getTypeProd()
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

    updateProduit() {
        this.produitService.update_Produit(this.produit,this.produit.id)
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

                    this.getProduit()

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
        this.produitService.Filter_Produit(this.dataSource).subscribe(

            (data:any) =>this.listProduits=data._embedded.produits
        )


    }
}
