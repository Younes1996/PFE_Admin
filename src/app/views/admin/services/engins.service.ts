import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import 'rxjs-compat/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class EnginsService {

  constructor(private http:HttpClient) { }

  private baseUrl = "http://localhost:8080/engin";

  ajouter_Engin(engin:any):Observable<any>    {
    return this.http.post(`${this.baseUrl}`, engin);
  }

  delete_Engin(id:number){
    return this.http.delete(this.baseUrl+"/"+id);
  }

  get_Engin():Observable<any>{

    return this.http.get(`${this.baseUrl}`);

  }
  update_Engin(engin: Object,id:any): Observable<Object> {
    return this.http.put(`${this.baseUrl+"/"+id}`, engin);

  }

  get_Employe_by_Cat(){

    return this.http.get('http://localhost:8080/employes/search/findByCategorie?nom=chaufeur');

  }
  getMarque(type:any){
    return this.http.get('http://localhost:8080/marques/search/findByType?nom='+type);

  }
  ajouter_Marque(f:any):Observable<any>
  {
    return this.http.post("http://localhost:8080/marque", f);
  }


}
//http://localhost:8080/employes/search/findByCategorie?nom=chaufeurs
