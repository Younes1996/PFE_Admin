import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ComandService {

    constructor(private http: HttpClient) {
    }

    private baseUrl = 'http://localhost:8080/comande';

    ajouter_Commande(data: any): Observable<any> {
        return this.http.post(`${this.baseUrl}`, data);
    }
    public getComand():Observable<Object>
    {
        return this.http.get("http://localhost:8080/commandes/");
    }
}
