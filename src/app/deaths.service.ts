import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DeathsService {

  constructor(private http: HttpClient) { }
  getService(): Observable<any> {
    return this.http.get(
      "https://covid19.mathdro.id/api/countries/india/deaths"
    ).pipe(
      catchError(err => {
        console.log(err)
        return err
      })
    );
  }
  getAllDeaths() : Observable<any>{
    return this.http.get("https://covid19.mathdro.id/api/countries/india/deaths")
  }
}
