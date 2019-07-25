import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { StaticdataService } from 'src/app/services/staticdata.service';
import { AddexpensesComponent } from '../addexpenses/addexpenses.component';
import { BackEndApiService } from 'src/app/services/back-end-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  currentBalance;
  displayedColumns = ['editIcon', 'category', 'itemName', 'amount', 'expenseDate', 'deleteIcon'];
  dataSource;
  deleteExpense;
  selectedIndex;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public staticData: StaticdataService,
    private dialog: MatDialog,
    private backEndAPI: BackEndApiService
  ) {
  }

  ngOnInit() {
    this.backEndAPI.getAllExpenses();
    this.currentBalance = this.staticData.totalBudget - this.staticData.totalExpenses;
    this.dataSource = new MatTableDataSource(this.staticData.expenseDetails);
    this.dataSource.paginator = this.paginator;
  }

  addExpenses() {
    const dialogRef = this.dialog.open(AddexpensesComponent, {
      width: '35%',
    });
  }

  delete(index){
    console.log(index);
    this.selectedIndex  = index;
    if(this.deleteExpense == 'delete'){
      this.deleteExpense = 'restore';
    } else {
      this.deleteExpense = 'delete';
    }
  }

}
