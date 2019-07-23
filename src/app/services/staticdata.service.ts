import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaticdataService {

  expenseDetails = [
    {category:'Grocery',itemName:'Bread',amount:500,expenseDate:'9/12/2019'},
    {category:'Cloths',itemName:'Jeans',amount:1500,expenseDate:'9/12/2019'},
    {category:'Juice',itemName:'Apple',amount:5100,expenseDate:'9/12/2019'},
    {category:'Rent',itemName:'Home',amount:1500,expenseDate:'9/12/2019'},
    {category:'Travel',itemName:'Bus fare',amount:5200,expenseDate:'9/12/2019'},
    {category:'Food',itemName:'Bread',amount:4500,expenseDate:'9/12/2019'},
    {category:'EMI',itemName:'Loan',amount:5600,expenseDate:'9/12/2019'},
    {category:'Food',itemName:'Bread',amount:8500,expenseDate:'9/12/2019'},
    {category:'Travel',itemName:'Bus fare',amount:4500,expenseDate:'9/12/2019'},
    {category:'Travel',itemName:'Bus fare',amount:4500,expenseDate:'9/12/2019'},
    {category:'Travel',itemName:'Bus fare',amount:4500,expenseDate:'9/12/2019'},
    {category:'Travel',itemName:'Bus fare',amount:4500,expenseDate:'9/12/2019'},
    {category:'Travel',itemName:'Bus fare',amount:4500,expenseDate:'9/12/2019'},
    {category:'Travel',itemName:'Bus fare',amount:4500,expenseDate:'9/12/2019'},
    {category:'Travel',itemName:'Bus fare',amount:4500,expenseDate:'9/12/2019'}
  ]

  constructor() { }
}
