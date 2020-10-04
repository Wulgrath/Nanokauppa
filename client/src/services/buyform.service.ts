import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class BuyformService {
  private buyURL  = 'http://localhost:3000/api/buy';
  private sellURL = 'http://localhost:3000/api/sell';
  private headers = new Headers ({ 'Content-Type': 'application/json' });


  constructor (private http: Http) {}


  sendBuyForm(form) {
    this.http.post(this.buyURL, JSON.stringify(form), { headers: this.headers })
    .toPromise()
    .then((result) => result.json())
    .catch((error) => {
      return Promise.reject(error);
    });
    }
  sendSellForm(form) {
    this.http.post(this.sellURL, JSON.stringify(form), { headers: this.headers })
    .toPromise()
    .then((result) => result.json())
    .catch((error) => {
      return Promise.reject(error);
    });
  }
  }

