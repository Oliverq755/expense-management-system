import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { StaticdataService } from 'src/app/services/staticdata.service';
import { AddexpensesComponent } from '../addexpenses/addexpenses.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  totalBudget = 4560394;
  totalExpenses = 2343554;
  currentBalance;
  displayedColumns = ['editIcon', 'category', 'itemName', 'amount', 'expenseDate'];
  dataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public staticData: StaticdataService,
    private dialog: MatDialog,
    ) {
  }
  
  ngOnInit() {
    this.currentBalance = this.totalBudget - this.totalExpenses;
    this.dataSource = new MatTableDataSource(this.staticData.expenseDetails);
    this.dataSource.paginator = this.paginator;
  }

  addExpenses(){
      const dialogRef = this.dialog.open(AddexpensesComponent, {
        width: '60%',height:'40%',
        // data: {name: this.cityName}
      });
    }

}
