import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: `root`
})
export class ContactsService {

  constructor(private http:HttpClient){}
  private baseUrl = "http://localhost:8080/employes";

    public getEmpploye():Observable<Object>
    {
      return this.http.get("http://localhost:8080/listemployes/");
    }

  createEmployee(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, employee);
  }

  deleteContact(id:number){
    return this.http.delete(this.baseUrl+"/"+id);
  }

  getEmploye(page:number,size:number){

      return this.http.get("http://localhost:8080/employes?page="+page+"&size="+size);

  }
  updateEmployee(employee: Object,id:any): Observable<Object> {
    return this.http.put(`${this.baseUrl+"/"+id}`, employee);
  }


  public Filter_Emolye(nom:String):Observable<Object>
  {
    return this.http.get("http://localhost:8080/employes/search/findByNomContaining?nom="+nom);
  }

}
