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




}




