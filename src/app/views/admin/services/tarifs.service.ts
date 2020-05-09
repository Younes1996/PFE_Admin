import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarifsService {
  constructor(
      private http:HttpClient
  ) { }

  private baseUrl = "http://localhost:8080/tarif";

  ajouter_tarif(data:any):Observable<any>    {
    return this.http.post(`${this.baseUrl}`, data);
  }

  delete_tarif(id:number){
    return this.http.delete(this.baseUrl+"/"+id);
  }

  get_Tarif():Observable<any>{

    return this.http.get(`${this.baseUrl}`);


  }
  update_Tarif(tarif: Object,id:any): Observable<Object> {
    return this.http.put(`${this.baseUrl+"/"+id}`, tarif);

  }

  get_tarif_By_Page(size:number,page:number){

    return this.http.get(this.baseUrl+"s?page="+page+"&size="+size);
  }
  getOutils(type:any){
    return this.http.get('http://localhost:8080/engins/search/findByOperation?nom='+type);

  }
  public Filter_Outils(nom:String):Observable<Object>
  {
    return this.http.get("http://localhost:8080/tarifs/search/findByOutilsContaining?nom="+nom);
  }

}
