import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-addexpenses',
  templateUrl: './addexpenses.component.html',
  styleUrls: ['./addexpenses.component.scss']
})
export class AddexpensesComponent implements OnInit {

  addExpenseForm:FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { 
    this.addNewExpensesData();
  }

  ngOnInit() {
  }

  addNewExpensesData() {
    let formObj =
    {
      EXPENSE_CATEGORY: ['', [Validators.required]],
      EXPENSE_ITEM_NAME: ['', [Validators.required]],
      EXPENSE_AMOUNT: ['', [Validators.required]],
      EXPENSE_DATE: ['', [Validators.required]]
    }
    this.addExpenseForm = this.formBuilder.group(formObj);
  }

  addExpenses(addExpenseForm){
    console.log(addExpenseForm)
  }

}
