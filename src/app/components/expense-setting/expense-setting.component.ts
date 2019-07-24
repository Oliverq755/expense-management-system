import { Component, OnInit } from '@angular/core';
import { StaticdataService } from 'src/app/services/staticdata.service';

@Component({
  selector: 'app-expense-setting',
  templateUrl: './expense-setting.component.html',
  styleUrls: ['./expense-setting.component.scss']
})
export class ExpenseSettingComponent implements OnInit {

  constructor(
    public staticData: StaticdataService,

  ) { }

  ngOnInit() {
  }

}
