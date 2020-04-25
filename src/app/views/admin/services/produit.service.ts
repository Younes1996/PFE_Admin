import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(
      private http: HttpClient
  ) { }

  private baseUrl = "http://localhost:8080/produit";

  ajouter_Produit(prod:any):Observable<any>    {
    return this.http.post(`${this.baseUrl}`, prod);
  }

  delete_produit(id:number){
    return this.http.delete(this.baseUrl+"/"+id);
  }

  get_Produit():Observable<any>{

    return this.http.get(`${this.baseUrl}`);

  }
  update_Produit(prod: Object,id:any): Observable<Object> {
    return this.http.put(`${this.baseUrl+"/"+id}`, prod);

  }

  getTypeProduit(){
    return this.http.get('http://localhost:8080/typroduit');

  }
  ajouter_typeProd(f:any):Observable<any>
  {
    return this.http.post("http://localhost:8080/typroduit", f);
  }
  getEngint_By_Page(size:number,page:number){

    return this.http.get(this.baseUrl+"s?page="+page+"&size="+size);
  }
  public Filter_Produit(nom:String):Observable<Object>
  {
    return this.http.get("http://localhost:8080/produits/search/findByDesignContaining?nom="+nom);
  }


}
