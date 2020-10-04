import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GetformsService {
  private buyURL  = 'http://localhost:3000/api/getbuyforms';
  private sellURL = 'http://localhost:3000/api/getsellforms';

  constructor( private http: Http) { }

  getBuyForms(): Promise<any[]> {
    return this.http.get(this.buyURL)
    .toPromise()
    .then((response) => response.json().buyForms)
    .catch((error) => {
      console.error(error);
      return[];
    });
  }
  getSellForms(): Promise<any[]> {
    return this.http.get(this.sellURL)
    .toPromise()
    .then((response) => response.json().sellForms)
    .catch((error) => {
      console.error(error);
      return[];
    });
  }
}
