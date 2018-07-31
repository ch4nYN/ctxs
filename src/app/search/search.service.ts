import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class SearchService {

  constructor(private http: Http) { }

  getCoinPrice(coinName) {
    this.http.get("https://api.coinmarketcap.com/v2/listings/")
      .map((response: Response) => {
        console.log(response);
      });
  }

}
