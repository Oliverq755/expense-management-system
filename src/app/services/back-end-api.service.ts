import { Injectable } from '@angular/core';
import { StaticdataService } from './staticdata.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackEndApiService {
  baseUrl = 'http://localhost:3000';

  constructor(
    private staticData: StaticdataService,
    private http: HttpClient
  ) { }


  getAllExpenses() {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.baseUrl}/expense`).subscribe(result => {
        this.staticData.expenseDetails = result;
        return resolve(result);
      }, error => {
        return reject(error);
      });
    });
  }

}
