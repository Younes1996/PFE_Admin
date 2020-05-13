import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(
     private http:HttpClient
  ) { }

  private baseUrl = "http://localhost:8080/client";

  ajouter_Client(data:any):Observable<any>    {
    return this.http.post(`${this.baseUrl}`, data);
  }

  deleteClient(id:number){
    return this.http.delete(this.baseUrl+"/"+id);
  }

  getClient():Observable<any>{

    return this.http.get(`${this.baseUrl}`);


  }
  updateClient(client: Object,id:any): Observable<Object> {
    return this.http.put(`${this.baseUrl+"/"+id}`, client);

  }

getClient_By_Page(size:number,page:number){

  return this.http.get(this.baseUrl+"s?page="+page+"&size="+size);
}
  public Filter_Client(nom:String):Observable<Object>
  {
    return this.http.get("http://localhost:8080/clients/search/findByNomContaining?nom="+nom);
  }
  public getByCarte(nom:String):Observable<Object>
  {
    return this.http.get("http://localhost:8080/clients/search/findClientByCarten?nom="+nom);
  }

}




