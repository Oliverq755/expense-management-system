import { Component, OnInit } from '@angular/core';
import { StaticdataService } from 'src/app/services/staticdata.service';

@Component({
  selector: 'app-expense-setting',
  templateUrl: './expense-setting.component.html',
  styleUrls: ['./expense-setting.component.scss']
})
export class ExpenseSettingComponent implements OnInit {
  budget:number;
  newCategory:string;
  constructor(
    public staticData: StaticdataService,

  ) { }

  ngOnInit() {
  }

  updateBudget(newBudgetAmount){
    this.staticData.totalBudget = newBudgetAmount;
    this.budget = null;
  }

  addNewCategory(categoryName){
    let categoryDetails = {
      categoryID:'CAT001',
      categoryName: categoryName
    }
    this.staticData.categoryList.push(categoryDetails);
    this.newCategory = '';
  }

}
