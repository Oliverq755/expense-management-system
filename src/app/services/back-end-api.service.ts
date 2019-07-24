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
        return resolve(this.staticData.expenseDetails);
      }, error => {
        return reject(error);
      });
    });
  }

  addExpenses(expense) {
    return new Promise((resolve, reject) => {
      this.http.post(`${this.baseUrl}/expense`, expense).subscribe(result => {
        this.staticData.expenseDetails.push(expense);
        return resolve(expense);
      }, error => {
        return reject();
      });
    });
  }

}
